```
          Node Js Article

```

```  HTTP Module ```
You Thing ever all the modules firstly Install but Http module directly required Why ????


if You Remember We install Node js module So By default Node module consist 4  pre-installed with Node.js itself.

```
const http = require('http')
const fs = require('fs')
const path = require('path')
const os = require('os')
```

```
 require is dynamic and runtime-based, while import is static and resolved at compile time.
    require : anywhere , conditional
    import  : used in EJS, always at the top of tree, 
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



