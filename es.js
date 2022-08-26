var fs=require('fs');
var read=fs.readFileSync("ex.txt");
//var read1=read.toString();
let StrData=read.toString().split(/[rj\r\n\s]+/);
console.log(StrData);
var ar=[];
for(var i=0;i<StrData.length;i++){
     if(!(i%2===0)){
          ar.push(StrData[i]);
          
     }
}
console.log(ar.join(" "));
var write=fs.createWriteStream("write.txt");
write.on("error",function(err){console.log(err)});
ar.forEach(value=>write.write(`${value}\r\n`));
write.end();
// fs.writeFile('write.txt',ar, err=>{
//                      if(err){
//                          console.error(err)
//                          return
//                      }
//                  }); 
      
