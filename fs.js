/*const fs = require('fs');


const ourReadStream = fs.createReadStream(`${__dirname}/bigdata.txt`);


ourReadStream.on('data', (chunk) => {
  console.log(chunk.toString());
});


ourReadStream.on('end', () => {
  console.log('✅ File reading completed.');
});


ourReadStream.on('error', (err) => {
  console.error('❌ Error:', err.message);
});
*/

//readfile

/*const fs = require('fs');
fs.readFile('myfile.txt',(err,data)=>{
if(err){
  console.log(err);
  return;
}
console.log(data.toString());
});*/


//writefile

/*const fs = require('fs');
fs.writeFile('note.txt','i love bangladesh also love node.js',(err)=>{
  if(err){
    console.log(err);
    return;
  }
  console.log("file cteated");
});*/

///appendfile

/*const fs = require('fs');
fs.appendFile('note.txt','\nHello developer',(err)=>{
  if(err){
    console.log(err);
    return;
  }
  console.log("updated");
});*/

/*const fs = require('fs');
fs.readFile('note.txt',(err,data)=>{
  if(err){
    console.log(err);
    return;
  }
  console.log(data.toString());
});*/

///append

/*const fs = require('fs');
fs.appendFile('myfile.txt','Bangladesh is not for begenier',(err)=>{
  if(err){
    console.log(err);
    return;
  }
console.log("updated");

});*/

const fs = require('fs');
fs.unlink('myfile.txt',(err)=>{
  if(err){
    console.log(err);
    return;
  }
  console.log("deleted");
});

