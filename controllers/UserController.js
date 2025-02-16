const User = require('../models/User');

// метод контроллера на реєстрацію
module.exports.registerUser = (req, res, next) => {
    const { body } = req;
    const user = new User(body);
    user.addUser();

    delete user.password;
    // console.log(user);
    res.status(201).send(user);
}

// метод контроллера на отримання всіх користувачів
module.exports.getAllUsers = (req,res,next)=>{
    const usersArray  = User.findAll();
    res.status(200).send(usersArray);
}

//метод контролера на получение конкретного пользователя
module.exports.getOneUser = (req,res,next)=>{
    const { userId } = req.params;
    const user = User.findOne(Number(userId));

    if(user){ // если юзер сюществует, тоесть если он не undefined
        res.status(200).send(user)
    }else {
        res.status(404).send('QWAqwaQwaaaaaa')
    }
}

module.exports.deleteOneUser = (req,res,next)=>{
    const { userId } = req.params;
    const objDeletedUser = User.findOne(Number(userId))
    const user = User.deleteUser(Number(userId))
    
    if(user){
        res.status(200).send(objDeletedUser);
    } else{
        res.status(404).send('User not found =(')
    }
}

// метод контролерра на обновлене инфы про какого то конкретного юзера
module.exports.updateUser = (req,res,next)=>{
    const { body,params: {userId} } = req;
    const user = User.findOne(Number(userId));

    if(user){
        const updatedUser = user.updateUser(body)
        res.status(200).send(updatedUser)
    } else{
        res.status(404).send('User not found =(')
    }
    
}