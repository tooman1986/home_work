'use strict';



/// Task 6 Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false. 

let obj = {
    name: 'jhon',
    surname: 'jhonson'
};

function isEmpty(obj) {
    for (let key in obj) {
      return false;
    }
    return true;
  }

 console.log(isEmpty(obj));

 //// Task 2 Существует ul список на странице. Получить все текстовые значения элементов списка. Создать из них массив и к каждому элементу массива добавить его порядковый номер. Вывести полученный массив

let listItem = document.getElementsByClassName('list_item');
let arr = [];

for (let i = 0; i < listItem.length; i++){
arr.push(listItem[i].innerHTML);
arr[i] = (i + 1) + '.' + arr[i];
console.log(arr[i]);
}


//// Task 3 Есть объект prices с произвольным количеством свойств, содержащих цены продуктов.Напишите функцию sumPrices(prices), которая возвращает сумму всех цен с помощью метода Object.values

let prices = {
    pen: 3,
    pensil: 2,
    marker: 4
};

function sumPrices(prices) {
let sum = 0;
for (let price of Object.values(prices)) {
    sum += price;
}
return sum;
}

alert(sumPrices(prices));




//// Task 2  Напишите функцию, которая выводит через 5 секунд на экран сообщение “прошло 5 секунд”

let showMessage = function (n) {
    let timer = setTimeout(function (){
        alert('Прошло 5 секунд...');
    }, n);
    
};
showMessage(5000);


////Task 3 Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.


function printNumbers(from, to) {
    let number = from;
  
    let timer = setInterval(function() {
      console.log(number);
      if (number == to) {
        clearInterval(timer);
      }
      number++;
    }, 1000);
  }
  
  printNumbers(0, 12);

