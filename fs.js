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


const fs = require('fs');
fs.readFile('myfile.txt',(err,data)=>{
if(err){
  console.log(err);
  return;
}
console.log(data.toString());
});



