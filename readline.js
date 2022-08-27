const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
    input: fs.createReadStream('text1.xml'),
    output: process.stdout,
    terminal: false
});
var write=fs.createWriteStream("writeFile1.txt");
rl.on('line', (line) => {
    let[d1,d2]=line.toString().split("</mqps>"); 
    console.log(d2);

write.write(d2);
write.write("\n");
});

