const db = new Map();

class User {
    constructor({firstName, lastName, email, password, isSubscribed = false}) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.isSubscribed = isSubscribed;
        this.createdAt = new Date();
        this.id = db.size + 1;
    }

    addUser() {
        db.set(this.id, this);
    }

    static findOne(userId) {
        return db.get(userId);
    }

    static findAll() {
        return [...db.values()];
    }

     static deleteUser(userId) {
        return db.delete(userId);
    }

    updateUser(updatedFields){
    /* 
        1. Найти юзера за его ИД, получить екземпляр юзера
        2. В HTTP  запросе мы будем принимать те поля, которые мы хотим обновить
        Задача на этом етапе: обновить инфу без потерь данных
        Сделать новый обьект на основе старых данных, и дополнить (перезаписать) этот обькт новыми данными
        3. Утсановить в мапу ВМЕСТО старого обькта, этот новый обьект, который мы создали на шаге 2
    */
        db.set(this.id,{...this,...updatedFields});
        return db.get(this.id);
    }
}

module.exports = User;

/*

ДЗ:

Спробуйте створити роут на отримання всіх ваших юзерів

Декомпозиція задачі:

1. Спочатку прописати роут в index.js
2. Створити новий метод контроллеру UserController, у якому викликати метод метод findAll з моделі

*/