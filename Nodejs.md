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
```
Node resolves modules by checking core modules, local files, and then node_modules upward.
require is dynamic CommonJS, while import is static ES Modules.
Core modules don’t need installation, npm packages do.

```

```
    Basic Server Creation 

    const http = require('http');
    const server = http.createServer((req,res) =>{
    // do anything you want
    server.listen(port, () =>{
    console.log("Server is started"); 
    
```

-- some special command -- 
req.header //extra data( meta data - Data About data)
Date.now() // create new date



