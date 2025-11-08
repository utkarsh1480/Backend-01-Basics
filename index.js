// ---------------------------------------------------------------// Export and Import----------------------------------------------------------------
// console.log("Hello, World!");
// const mango = require('./Export/mango.js')
// const math = require('./Export/math.js');
// console.log(math);
// console.log(math.sum(2,5));
// console.log(math.sub(2,5));
// console.log(mango);
// const banana = require('./clas/banana.js')
// console.log(banana);



// ---------------------------------------------------------------// File System----------------------------------------------------------------
// const { error } = require('console');
// const fs = require('fs');
// const date = new Date();

// fs.writeFileSync('myfile.txt', `current date ${date.toLocaleDateString()}`);
// fs.readFile('myfile.txt', 'utf-8', (err, data) => {
//     if(error){
//         console.error("There was an error reading the file:", err);
//         return;
//     }   else{
//         console.log(data);
//     }});
// const data = fs.readFileSync('myfile.txt', 'utf-8');
// console.log(data);
// fs.unlinkSync('myfile.txt');


// -----------------------------------------------------Creating Basic Server--------------------------------------------------------------------------

// const http = require('http');
// const MyServer = http.createServer((req, res) => {
//     console.log("Request made");
//     res.end('Hello from the server');
// }
// );
// MyServer.listen(3000, (err, data) => {
//     if(err){
//         console.log("There was an error", err);
//     } else{
//         console.log("Server is listening on port 3000");
//     }
// });

// -----------------------------------------------------Creating Basic Server with Routing--------------------------------------------------------------------------
const http = require('http');
const fs = require('fs');
const Server = http.createServer((req,res) => {
   const url = req.url;
   const log = (`${Date.now()} : ${url} \n , new Request made`);
   fs.appendFile("test.txt", log, (err, data) =>{
    if(err){
        console.log("There was an error", err);
    }   else{
        console.log("Log saved to test.txt");
    }


  
//    switch(url){
//     case '/':

//         res.send = "Hello fro default page";
//         res.end(res.send);
//         break;
//     case '/about':
//         res.send = "Hello from about page";
//         res.end(res.send);
//         break;
//     case '/contact':
//         res.send = "Hello from contact page";
//         res.end(res.send);
//         break;


//     default:
//         res.send = "404 Page not found";
//         res.end(res.send);
//         break;

//    }


});
});
Server.listen(3000, (err, data) => {
    if(err){
        console.log("There was an error", err);
    } else{
        console.log("Server is listening on port 3000");
    }
});
