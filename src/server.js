const http = require('http');
const router = require('./router.js');
const port = process.env.port || 5000;
const server = http.createServer(router);
server.listen(port,()=>{
    console.log(`server is running in localhost:${port}`);
    
})