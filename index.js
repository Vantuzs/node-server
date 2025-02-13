const http = require('http');

const PORT = 5000

const requestListener = (request,response)=>{
    const {url,method} = request
    console.log(url);
    console.log(method);
    // console.log(request);
    console.log('REQUEST IS HERE!!');
}

const server = http.createServer(requestListener);

server.listen(PORT)

// console.log(server);