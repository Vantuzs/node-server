const express = require('express');
const {validateUser} = require('./middlewares/index');
const UserController = require('./controllers/UserController')
const app = express();

const bodyParser = express.json() // request.body


const PORT = 5000;

app.post('/user',bodyParser,validateUser,UserController.registerUser);

// Роут на получение всех пользователей 
app.get('/users',UserController.getAllUsers); // http://localhost:5000/users

app.listen(PORT,()=>{
    console.log(`Servet start on port ${PORT}`);
})
//Роут на получение какогото конкретного юзера
app.get('/user/:userId',UserController.getOneUser);

//Роут на удаление юзера
app.delete('/user/:userId',UserController.deleteOneUser)

//роут на обновление конереьного пользователя
app.put('/user/:userId',bodyParser,UserController.updateUser)

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