const { error } = require('console');
const fs = require('fs');
const date = new Date();

fs.writeFileSync('myfile.txt', `current date ${date.toLocaleDateString()}`);
fs.readFile('myfile.txt', 'utf-8', (err, data) => {
    if(error){
        console.error("There was an error reading the file:", err);
        return;
    }   else{
        console.log(data);
    }});
const data = fs.readFileSync('myfile.txt', 'utf-8');
console.log(data);
// fs.unlinkSync('myfile.txt');