const path = require('path');
basedName=path.basename('C:\Users\agaly\OneDrive\Documents\MERN FullStack\nodejs\sample.txt')
console.log(basedName);

const extensionName=path.extname('C:\Users\agaly\OneDrive\Documents\MERN FullStack\nodejs\sample.txt')
console.log(extensionName);

const joinedPath=path.join('C:\Users\agaly\OneDrive\Documents\MERN FullStack\nodejs','sample.txt')
console.log(joinedPath);