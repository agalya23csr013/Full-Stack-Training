let fs=require('fs');
console.log(fs);
let words=fs.writeFile('sample.txt',"This is new data")
console.log(words);
fs.read()

let fs = require('fs');

//create a file and write data into it

fs.writeFile('index.txt', 'hi agalya how are you!', (err) => {
    console.log(err);
    console.log('File created successfully.');
});


//append data into a file
fs.appendFile("sample.txt","hello agalya welcome to nodejs",(data)=>{
    console.log(data);
    console.log('File appended successfully.');
});


//delete a file
fs.unlink('index.txt', (err) => {
    console.log(err);
    console.log('File deleted successfully.');
});

//read data from a file
fs.readFile('sample.txt', 'utf8', (err, data) => {
    console.log(err);
    console.log(data);
});

