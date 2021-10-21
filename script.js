'use strict';

///// Task 1

let liEl = document.querySelectorAll('li');
let ulEl = document.querySelector('ul');

for (let i = 0; i < liEl.length; i++) {
    liEl[i].addEventListener('mouseenter', () => {
        ulEl.style.display = 'none';
    });
}

//// Task 2

const btnAdd = document.getElementById("btnAdd");
const btnDel = document.getElementById("btnDel");


btnAdd.addEventListener('click', () => {
    let newEl = document.createElement('p');
    document.body.append(newEl);
    newEl.innerHTML = 'text text text';
    
});

btnDel.addEventListener('click', () => {
    let arr = [];
    let elOfArr = document.querySelectorAll('p');
    elOfArr.forEach(function (x) {
        arr.push(x);
    });
    arr.pop().remove();
});


