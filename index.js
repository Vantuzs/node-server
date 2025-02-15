const express = require('express');
const {validateUser} = require('./middlewares/index')
const app = express();

const bodyParser = express.json() // request.body


const PORT = 5000;

app.post('/user',bodyParser,validateUser())

app.listen(PORT,()=>{
    console.log(`Servet start on port ${PORT}`);
})

// маршрут + метод = роут

/* 

Задача: Зарегестрировать (создать) юзера 

Декомпозиция задачи: когда задачу разделяют на несколько маленьких шажков(миниЗадач)

1. Принять запрос на определённый роут
2. Разпарсить данные, которые пришли с запросом
3. Проверить (валидировать) данные
4. Сохранить эти данные
5. Отправить ответы клиенту

*/