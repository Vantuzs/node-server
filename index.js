const express = require('express');
const yup = require('yup');
const app = express();

const bodyParser = express.json() // request.body

const validationSchema = yup.object({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required(),
    isSubscribed: yup.boolean().required()
})

const PORT = 5000;

app.post('/user',bodyParser,async (req,res,next)=>{
    try{
        const value = await validationSchema.validate(req.body);
    console.log(value);
    } catch(error){
        next(error.message)
    }
})

app.listen(PORT,()=>{
    console.log(`Servet start on port ${PORT}`);
})

// маршрут + метод = роут

/* 

Задача: Зарегестрировать (создать) юзера 

1. Принять запрос на определённый роут
2. Разпарсить данные, которые пришли с запросом
3. Проверить (валидировать) данные
4. Сохранить эти данные
5. Отправить ответы клиенту

*/