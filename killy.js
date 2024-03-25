const http = require('http');
const fs = require('fs'); 
const hostname = '127.0.0.1';
const port = 3006;

const server = http.createServer((req,res)=>{
	const filepath = 'testpage.html'
	fs.readFileSync(filepath,(err,data)=>{
		if (err){
			res.statusCode = 500; // Internal Server Error
			res.setHeader('Content-Type', 'text/plain');
			res.end('Error reading the HTML file');
		}
		else{
			res.statusCode=200;
			res.setHeader('conten-type','text/html');
			res.end(data);
		}
	})

});

server.listen(port,hostname,()=>{
	console.log(`Server Runing at http://${hostname}:${port}/`)
});


// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });