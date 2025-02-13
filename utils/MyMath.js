class MyMath{
    static sum = (a,b)=>a+b;
    static sub = (a,b)=>a-b;
    static multy = (a,b)=>a*b;
    static div = (a,b)=>a/b;
}

const object = {
    key1: 'value1',
    key2: 'value2'
}

const superFunction = ()=>{
    return 1+2;
}

// Експортируем 1 обект MyMath и больше ничего =)
// module.exports = MyMath;

//Задача: заекспортировать от сюда и MyMath и object и superFunction
module.exports = {
    MyMath,
    object,
    superFunction
}