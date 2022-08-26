var fs=require('fs');
//sync method
var readMe=fs.readFileSync("text.xml");

var data=readMe.toString().replaceAll("\r\n","</mqps>").split("</mqps>");
console.log(data);
var ar=[];
for(var i=0;i<data.length;i++){
     if(i%2===0){
          ar.push(data[i]);       
}
}
console.log(ar);
var write=fs.createWriteStream("writeFile.txt");
write.on("error",function(err){console.log(err)});
ar.forEach(value=>write.write(`${value}\r\n`));
write.end();



// const readLastLines=require('read-last-lines');
//  readLastLines.read("writeFile.txt",5)
//  .then((lines)=>console.log(lines));

 
//Asynchronous method
// fs.readFile('text.xml',function(err,readMe)
// {
//     if(err)
//     {
//         return console.log("Error");
//     }
//     console.log(readMe.toString());
// });