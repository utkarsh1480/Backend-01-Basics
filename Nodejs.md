```
Node Js Article

```

```  HTTP Module ```
# 🚀 Node.js Basics

This README explains **Node.js core modules**, **why HTTP does not need installation**, **module resolution**, and the **difference between `require` and `import`**, with examples.

---

## 📦 HTTP Module (Core Module)

Many beginners think **every module must be installed first**, but the **HTTP module works without installation**.

### ❓ Why can we directly require `http`?

When you install **Node.js**, it already includes some **core modules**.  
These modules are **pre-installed and bundled with Node.js itself**.

---

## ✅ Core Modules (No Installation Required)

```js
const http = require('http')
const fs = require('fs')
const path = require('path')
const os = require('os')

Node.js resolves modules in this order:
1. Core modules
2. Local files (./ or ../)
3. node_modules (searching upward)



```require is dynamic and runtime-based, while import is static and resolved at compile time.
    require : anywhere , conditional
    import  : used in EJS, always at the top of tree, 
```
```diff
- require(): dynamic and runtime-based
+ import: static and resolved at compile time
```

 Because without ./, Node looks inside node_modules, not current directory. 
```js
Node resolves modules by checking core modules, local files, and then node_modules upward.
require is dynamic CommonJS, while import is static ES Modules.
Core modules don’t need installation, npm packages do.
```


```js
---Basic Server Creation---

    const http = require('http');
    const server = http.createServer((req,res) =>{
    // do anything you want
    server.listen(port, () =>{
    console.log("Server is started"); 
```
-- some special command -- 
req.header //extra data( meta data - Data About data)
Date.now() // create new date

 ## Handel Urls in Node module

 ```js
url = https://www.google.com/homepage?search=somethind
```
https - Hyper Text transfer protocol system
www.google.com - this is domain
homepage - path
search=somethind - query parameter

-- Node js by default not seprate the url for this we use url module --

```js
const url = require("url');
```
```---href: The full URL that was originally parsed. Both the protocol and host are lowercased.---

Example: 'http://user:pass@host.com:8080/p/a/t/h?query=string#hash'

--protocol: The request protocol, lowercased.

Example: 'http:'

--host: The full lowercased host portion of the URL, including port information.

Example: 'host.com:8080'

--auth: The authentication information portion of a URL.

Example: 'user:pass'

--hostname: Just the lowercased hostname portion of the host.

Example: 'host.com'

--port: The port number portion of the host.

Example: '8080'

--pathname: The path section of the URL, that comes after the host and before the query, including the initial slash if present.

Example: '/p/a/t/h'

--search: The 'query string' portion of the URL, including the leading question mark.

Example: '?query=string'

--path: Concatenation of pathname and search.

Example: '/p/a/t/h?query=string'

--query: Either the 'params' portion of the query string, or a querystring-parsed object.

Example: 'query=string' or {'query':'string'}

--hash: The 'fragment' portion of the URL including the pound-sign.

Example: '#hash'
```

--Req.query--
req.query is an object, but all query parameter values are strings because URLs transmit text only.
Important Interview Trap 🚨

an req.query contain arrays?
✅ YES — but as values, not itself

URL:

/search?tags=js&tags=node&tags=express

req.query


Output:

{
  tags: ['js', 'node', 'express']
}


✔ tags is an array
❌ req.query is still an object

[Object: null prototype] once you studied about prototype the investigate this topic here hacker exploitation is hidden
```js
❓ Is req.query.id === 1 true?

❌ NO
✔ req.query.id === '1'
```

```js
### Why this  req.query['id'] Insted of req.query

✅ If:

Key is a valid JavaScript identifier

No spaces

No special characters

Doesn’t start with a number

```js
## use [''] if
--Key has special characters--
--Key starts with a number--
--🚨 Case 3: Dynamic key (interview favorite)
const key = 'id'
req.query[key]   // ✅
req.query.key    // ❌ looks for literal "key"--
--Reserved words or weird keys
/?class=10
req.query['class'] // safer--
```


### 4️⃣ Why interviews prefer ['id'] sometimes 🧠

Because:

It works in all cases

Safer for dynamic access

Avoids edge-case bugs

📌 Especially in frameworks like Express, keys come from user input.

##Cacheable - Cacheable means data or a response that can be stored temporarily and reused to improve performance and reduce repeated computation.

### HTTPS Method

```js
###POST METHOD
POST sends data in body
Needs middleware to parse
Used for create operations
Not cached
Supports large payloads

###POST data goes in the request body
⚠️ Without express.json(), req.body will be undefined. // it is a middleware which parse the data which comming from backend
###req.body is an object containing data sent by client.

### METHODS
req.body(),
req.header() it retuern ther meta data ,means data about data
req.params() parameters post/url/:id
req.query() Query
res.send() normal string send
res.json({}) json formate data is send for ui

```
```🖨️
Can POST have query params?

✔ Yes, but not recommended

❓ Is POST secure?

✔ Safer than GET (data not in URL)
❌ Not encrypted unless HTTPS

❓ Why body is undefined?

❌ Missing middleware
✔ Use express.json()
```
### Res.send() and Res.render()

```“res.send() sends data directly to the client, while res.render() generates HTML using a template engine and then sends it.” ```
### res.send()--
```
res.send() → Send response directly

Used to send any type of data to the client.
res.send("Hello World");
You can send:

string

object

array

Buffer

HTML

res.send({ name: "Utkarsh", role: "Developer" });


Express automatically:
sets Content-Type
converts object/array → JSON

👉 No template engine involved
```

### res.render() → Render a view (template engine)
```

Used when you are using a template engine like:

EJS

Pug

Handlebars
```

### res.render("home", { name: "Utkarsh" });

```
What happens:

Express finds home.ejs

Injects data { name: "Utkarsh" }

Converts it into HTML

Sends that HTML to browser

👉 Used for server-side rendered pages
```

### Res.end()

```
res.end() → End the response (low-level)

res.end() comes from Node.js (http module), not Express specifically.

res.end("Hello");


What it does:

Writes data (optional)

Immediately closes the response

Does NO formatting

Does NOT set headers automatically

👉 It just says: “response finished, bye”
```
### Shallow Copy- Shallow copy creates a new object but copies references of nested objects, not their actual values.



```
let user = {
  name: "Utkarsh",
  address: {
    city: "Delhi",
    pin: 110001
  }
};

let copyUser = { ...user }; // shallow copy

user --------┐
             ├──► address (same object)
copyUser ----┘

copyUser.address.city = "Mumbai";

console.log(user.address.city); // 😱 "Mumbai"

// Object
let a = { ...obj };
let b = Object.assign({}, obj);

// Array
let arr2 = [...arr];
let arr3 = arr.slice();
Real Object
const obj = {
  name: "A",
  address: { city: "Delhi" }
};

const copy = { ...obj };
Copy Object
copy = {
  name: "A",
  address: { city: "Delhi" }
};
{ ...obj } creates a new outer object, but nested objects remain shared because it is a shallow copy
Use this when object is flat (no nested object)
Or when you don’t care about nested changes
```
### Methods to create Shallow Copy

```
const user = { name: "Utkarsh", age: 21 };
const shallowCopy = { ...user };

const shallowCopy = Object.assign({}, user);

const shallowArr = arr.slice();

Use this when object has nested objects
 API data, Redux state, config objects


```

### Deep Copy - Deep copy creates a completely independent copy of an object, including all nested objects.
```
user --------► address (object A)
deepCopy ----► address (object B)

deepCopy.address.city = "Pune";

console.log(user.address.city); // "Delhi" ✅

BEST deep copy method (Modern JS 🔥)

 structuredClone() (placement favorite now)
let deepCopy = structuredClone(user);

✔ Supports:
nested objects
arrays
Date
Map / Set

❌ Does NOT copy functions (by design)
```
### Methods to create Deep Copy
```
const deepCopy = structuredClone(obj);

const deepCopy = JSON.parse(JSON.stringify(obj));
but this method is loosy
👉 functions
👉Date
👉undefined
👉Map / Set
```
### why JSON.parse is Loosy while Deep copy
```
Because JSON only supports a limited set of data types.
During this conversion, unsupported things are dropped or changed

JSON SUPPORTS

string,number,boolean,null,plain objects,arrays

❌ JSON LOSES / BREAKS

functions,undefined,Date,Map / Set,RegExp,Infinity, NaN,class instances 
```

###“Use spread or Object.assign for shallow copy, and structuredClone or JSON methods for deep copy depending on data complexity.

### MiddleWare




### MiddleWare - Middleware is a function that runs between request and response and has access to req, res, and next.
### Global middleware
```

app.use((req, res, next) => {
  console.log('Time:', Date.now());
  next();
});

 ### What this does:

This middleware has NO path

So it runs for:
/,/user/1,/login
all HTTP methods (GET, POST, PUT, DELETE)
next() 
Tells Express:
 “Go to the next middleware / route”
Without next() → request hangs
```


### Path Specific Middleware
```
app.use('/user/:id', (req, res, next) => {
  console.log('Request Type:', req.method);
  next();
});

What this does:

Runs ONLY when URL matches /user/:id

Works for:/user/1,/user/42
Runs for ALL HTTP methods : GET,POST,PUT,DELETE

```
### what this do
```
app.get('/user/:id', (req, res, next) => {
  res.send('USER');
});
What this does:

Handles GET requests only
This is a route handler
Sends response → ends request
app.use() registers middleware for all HTTP methods.
```
### Flow of MiddleWare
```
Request
   ↓
app.use()   // global
   ↓
app.use('/user/:id')
   ↓
app.get('/user/:id')
   ↓
Response

Middleware can block request but route does not able to do that
```

### Error Handelling Middleware
```
Error-handling middleware must have four arguments (err, req, res, next) because Express uses the function’s arity to distinguish it from normal middleware. Without the fourth argument, Express will not treat it as an error handler.
```

### Salt in Node js
```
salt is the special string which is added in string beforing hashing
password123$#@9Ksd!
That random part ($#@9Ksd!) is the salt.

Why do we need salt? 🤔

Without salt 
If two users have the same password, they get the same hash.
Hackers can:
Use rainbow tables
Pre-compute hashes
Crack many passwords at once
With salt 
Even if two users have the same password:
Their hashes will be different
Pre-computed attacks fail
👉 Salt = extra security layer


```
```
### Modern way (recommended)
Libraries like:
bcrypt
argon2
scrypt
They:
Generate salt automatically
Store it inside the hash




```
```
### In crypto What Occur

Manual way (Node crypto)

You do everything yourself:

salt = randomBytes()
hash = sha256(password + salt)
store: { hash, salt }


👉 You must:

Generate salt

Store salt separately

Re-hash correctly

Tune security yourself
```
### What the modern libraries Do

```
automatic way (bcrypt / argon2 / scrypt)
hash = bcrypt.hash(password)
Behind the scenes:
Generates random salt ✅
Embeds salt inside hash ✅
Stores cost parameters ✅
Handles verification safely ✅
Example bcrypt hash: $2b$10$N9qo8uLOickgx2ZMRZo5i.e8VvX...


That string already contains:
Algorithm, Cost, Salt, Hash
```

### bcrypt Most commanly userd for production and recomonded for password
### scrypt Stronger than bcrypt in some cases. Used in: Cryptocurrencies, High-security systems
### argon2 (🔥 BEST) Winner of Password Hashing Competition (PHC).

```
### What should Use
🥇 argon2id (best)

🥈 bcrypt (industry standard)

🥉 scrypt (security-focused apps)

❌What Should Never Use:

MD5, SHA-1, SHA-256 (for passwords)

```

```
### what Occuer when MD5, SHA-1, SHA-256
GPU bolta hai:
“Ruk, 10 crore passwords 1 sec me try kar deta hoon”
Isliye unsalted fast hashes = dead security.

To password security me GPU ko kaise harate hain? 🛡️
Trick #1: Slow hashing
bcrypt, argon2

Trick #2: Memory-hard
Zyada RAM chahiye
GPU ke paas kam RAM per core
Trick #3: Salt
Har user ka alag game
Precomputed attacks fail
```

```
Important points
Matlab: Future me computers fast ho gaye?
👉 Tum cost badha doge
👉 Hashing aur slow ho jayegi

bcrypt me:Sirf cost factor and Memory control ❌
```

```
ˇ| Term          | Matlab                  | Kyu important       |
| ------------- | ----------------------- | ------------------- |
| Memory-hard   | Zyada RAM use           | GPU slow            |
| GPU resistant | GPU ineffective         | Mass cracking rukta |
| Configurable  | Security tune kar sakte | Future-proof        |

```



###Jwt Started

JWT (JSON Web Token) = login ke baad milne wala identity token
Server bolta hai:

JWT payload = user ke baare me non-sensitive info
why password is not send with JWT payload 
JWT payload encrypted nahi hota
Sirf Base64 encoded hota hai
Koi bhi decode kar sakta hai

###Important Points 

 encoder function atob() kya hota hai? 🔓
atob() = Base64 decode
JWT payload:
Base64 encoded hota hai
Encrypted nahi
Example:
```
const base64Payload = token.split('.')[1];
const json = atob(base64Payload);
console.log(json);
Output:

{"userId":"123","role":"user","iat":1710000000}
```








