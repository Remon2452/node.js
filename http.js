/*const http = require('http');

const server = http.createServer();

server.on('connection', (socket) => {
    console.log('New connection...');
});

server.listen(3000, () => {
    console.log('Listening on port 3000...');
});*/

/*const http = require('http');

const server = http.createServer();
console.log('serc=ver created');*/

/*const http=require('http');
const server = http.createServer();
server.listen(3000);
console.log('server is running');*/


//full server

/*const http = require('http');
const server = http.createServer((req,res)=>{
    res.write('Shahadat hossain Remon');
    res.end();
});
server.listen(3000,()=>{
    console.log('server is running on port 3000');
});*/




//practice

const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end('home page');
    }
    else if(req.url==='/about'){
        res.end('about page');
    }
    else{
        res.end('404 - page not found');
    }
});

server.listen(3000, ()=>{
    console.log('server running....');
});
