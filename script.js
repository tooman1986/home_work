'use strict';

// Task 1

// let arr = ['box', 'table', 'window'];

// let item1 = arr[0].length;
// let item2 = arr[1].length;
// let item3 = arr[2].length;

// let arrNew = [item1, item2, item3];

// console.log(arrNew);


// let arr7  = ['Anna', 12, 'Sam', 9, 'Kate', 10, 'Ron', 9]; 

// arr7.forEach(function (x) {
//     if (typeOf (x) == 'string') {
//         console.log(x + '-string value');
//     } else {
//         console.log(x + '-number value');
//     }
// });


// // Task 3

// let arr3 = [1, 4, 2, 67, 34, 2, 50, 23, 11, 10, 5, 4, 9, 21];

// let result = arr3.filter(x => {
//     return x > 10;
    
// });
// console.log(result);



// // Task 4

// let arr5 = [];
// let x;
// let sum = 0;

// while (x != 15) {
//      x = +prompt('write your number', '');
//      arr5.push(x);
     
// }
// for (let i = 0; i < arr5.length; i++) {
//     sum += arr5[i];
//     if (x == 15) {
//         console.log(`сумма введенных значений ${sum}`);
//     }
// }


//  function myMessage() {
//      alert('Привет');
//  };
//  myMessage();
 
//  const func = function (a = 'default') {
//      alert(a);
//  };
// func();

// const arrFun = (a, b) => {

// // }

// function goodMorning() {
// console.log('goodMorning');
// }

// function goodNight() {
// console.log('goodNight');
// }

// let message = goodMorning;

// message();

// /////

// let color = 'blue';
// function changeColor() {
//     let anotherColor = "red";


// function swapColors() {
//     const tempColor = anotherColor;
//     anotherColor = color;
//     color = tempColor;
// }

// swapColors();
// }
// changeColor();


// /////////
// ////Одно и тоже
// const sum = (a, b) => a + b;

// const sum1 = (a, b) => {
//     return a + b;
// };

// ///////

// let a = "1";

// switch(a) {
//     case '1': {
//         console.log("im 1");
//         break;
//     }
//     case '2': {
//         console.log("im 2");
//         break;
//     }
//     default: {
//         console.log("another value");
//         break;
//     }
// }

// ////////

// const sayHello = (name) => {
//     if (name === "Mark") {
//         console.log ("Hi" + name);
//     } else {
//         console.log("hello" + name);
//     }
// };

// sayHello("Alex");
// sayHello("Mark");
// sayHello("Andrew");

// ////////////////////

// let min = (a, b) => {
//     if (a < b) {
//         return a;
//     } else if (b < a) {
//         return b;
//     }
// };

// console.log(min (10, -45));

// ///////////

// let pow = (x, n) => {
    
//     return x**n;
// };

// console.log(pow (4, 5));



// //////// Task 3
// let isEven = (n) => {
//      if (n % 2 === 0) {
//          return ('true');
//      } else {
//         return ('false');
//      }
// };
// console.log(isEven (100));

// /////////Task 4
// let deleteChars = (str) => {
//     let item = str.split('');
//     item.shift(1);
//     item.pop(1);
//     console.log(item);
// };
// deleteChars('table');

// ///////// Task 5
// let convertFloor = (floor) => {
//     if (floor < 0) {
//         return floor;
//     } else if (floor >= 13) {
//         return floor;
//     } else {
//         return floor + 1;
//     }
// };
// console.log(convertFloor(-3));
// console.log(convertFloor(10));
// console.log(convertFloor(18));


// let message = 'message';
// let func = function() {
//     let value = 0;
//     function showData() {
//         console.log(value, message);
//     }
//     showData();
// };
// func();


// let counter = function () {
//     let value = 0;

//     return function () {
//         value +=1;
//     };
// };

//  let makeCounter = counter();
//  makeCounter();
//  makeCounter();

// console.log('------------');

//  let makeCounter2 = counter();
//  makeCounter2();
//  makeCounter2();
//  makeCounter2();
//  makeCounter2();
//  makeCounter2();


// ////////////////////////

// let adder = (a) => (b) => console.log(a + b);

// let add5 = adder(5);

// add5(6);
// add5(3);
   
// let add10 = adder(10);
// add10(5);
// add10(10);


//////////////////////////


// console.log(document.title);

// document.title = "I'm new document";

// console.log(document.URL);
// console.log(document.domain);
// console.log(document.referrer);



// let divClass = document.getElementsByClassName("container");

// console.log(divClass);

// let divId = document.getElementById("my-first-elem");

// console.log(divId);

// let divWrapper = document.getElementsByClassName("wrapper");

// console.log(divWrapper);



// let divTwoFirst = document.querySelectorAll(".element");

// console.log(divTwoFirst[0]);
// console.log(divTwoFirst[1]);

// divId.classList.add('addd');
// document.body.style.background = "red";

// divId.id = "mySecondElem";


// let div = document.createElement("p");

// el.innerText = 'hello';

// let elementUl = document.getElementById('el');


// let p = document.createElement("p");

// p.className = "text";
// p.innerText = "Eto text";

// let div = document.createElement("div");
// div.className = "alert";
// div.innerText = "Error";
// div.style.background = "red";
// div.style.color = "white";
// div.style.padding= "20px";

// document.body.append(p);
// p.after(div);

/////Task 1

let newTag = document.createElement('p');
newTag.className = 'text';
newTag.innerHTML = 'Это всего лишь текст';
document.body.prepend(newTag);

let newDiv = document.createElement('div');
newDiv.className = 'alert';
newDiv.innerHTML = 'А это сообщение об ошибке';
newTag.after(newDiv);
newDiv.style.background = 'red';
newDiv.style.color = '#fff';
newDiv.style.padding = '20px';

////Task 2

let ol = document.createElement('ol');
document.body.prepend(ol);
let newArr = ["Viktor", "Tatiana", "Eduard", "Michael", "Denis", "Peter", "Ann", "Dmitry", "Sergey", "Ivan", "Alan"];
let newLi;


for (let i = 0; i < newArr.length; i++) {
    newLi = document.createElement('li');
    ol.prepend(newLi);
    newLi.innerHTML = newArr[i];
    if (i % 2 === 0) {
        newLi.className = 'even';
        newLi.style.background = 'green';
    } else {
        newLi.className = 'odd';
        newLi.style.background = 'blue';
    }
}


















