const http = require('http');

const PORT = 5000

const requestListener = (request,response)=>{
    const {url,method} = request
    console.log(url,method);
    // console.log(request);
    // console.log('REQUEST IS HERE!!');
    response.statusCode = 418;
    response.end('Hello from server')
}

const server = http.createServer(requestListener);

server.listen(PORT)

// console.log(server);