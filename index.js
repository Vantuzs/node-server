const express = require('express');
const app = express()

const PORT = 5000;

app.get('/',(request,response)=>{
    response.status(418).send('PRIVET')
});

app.get('/user',(request,response)=>{
    response.status(418).send('????? TI V USERERERERERERE')
})

app.listen(PORT,()=>{
    console.log(`Servet start on port ${PORT}`);
})

// маршрут + метод = роут