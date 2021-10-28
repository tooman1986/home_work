'use strict';


//////Object
 
///////// Task 1  Создать объект car с набором свойств по желанию. Вывести в цикле все ключи и значения объекта.


let car = {
        model: "Renault",
        color: "silver",
        engine: "petrol" 
    };

    for (let key in car) {
        if(car.hasOwnProperty(key)){
          console.log(`${key} : ${car[key]}`)
        }
      }

///////// Task 2  Создать объект user с свойствами name, email, phone, id. Скопировать этот объект со всеми свойствами в новую переменную newUser.
      
let user = {
    name: "Ivan",
    email: "Ivan@gmail.com",
    phone: "+344555000",
    id: 123 
};

let newUser = user;

console.log(newUser);


///////// Task 3 Создать объект circle со свойствами: radius, color. Также создать в объекте метод   calculateCircumference(), при вызове которого, в консоль выводится длина окружности (2 * число пи * радиус).


let numberPi = 3.14;

let circle = {
    radius: 30,
    color: "blue",
    calculateCircumference() {
        alert(2 * `${numberPi}` * circle.radius);
    }
};

circle.calculateCircumference();