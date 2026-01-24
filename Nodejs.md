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

res.render() → Render a view (template engine)

Used when you are using a template engine like:

EJS

Pug

Handlebars

res.render("home", { name: "Utkarsh" });


What happens:

Express finds home.ejs

Injects data { name: "Utkarsh" }

Converts it into HTML

Sends that HTML to browser

👉 Used for server-side rendered pages




