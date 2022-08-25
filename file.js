var fs=require('fs');
//synchronous method
var readMe=fs.readFileSync('text.xml');

console.log(readMe.toString().split("</mpqs>"));

const readLastLines=require('read-last-lines');
readLastLines.read('text.xml',5)
.then((lines)=>console.log(lines));


// // Asynchronous method
 fs.readFile('text.xml',function(err,readMe)
 {
     if(err)
     {
         return console.log("Error");
     }
     console.log(readMe.toString());
 });

 fs.writeFile('writeFile.txt',readMe, err=>{
    if(err){
         console.error(err)
         return
    }
 });
