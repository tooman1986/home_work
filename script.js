'use strict';

///// Task 3  Создать форму в HTML с полем ввода, несколькими checkbox и кнопкой отправки. На submit формы вывести значения поля ввода и имена всех отмеченных полей checkbox.

let form = document.forms['form'];
let tag = form.elements;

 form.addEventListener('submit', function (event) {
     event.preventDefault();
     console.log(tag.name.value);
     for(let i = 0; i < tag.length; i++) {
         if(tag[i].type == 'checkbox' && tag[i].checked) {
             console.log(tag[i].name);
         }
     }
 });


//// Task 4 Создать форму в HTML с полем ввода и кнопкой отправки. На submit формы, если поля ввода пустое, делать фокус на поле ввода.
 
let form1 = document.forms['form1'];
let tag1 = form1.elements;

 form1.addEventListener('submit', function (event) {
     if(tag1.name.value == '') {
      tag1.name.focus();
     }
 });


 ///// Task 5 Создать форму в HTML с полями для ввода имени, фамилии, телефона и сообщения. Для поля телефона задать максимальное количество символов 13, сообщение может быть большим. При submit формы создавать объект со всеми значениями формы и выводить его.

let form2 = document.forms['form2'];
let tag2 = form2.elements;

form2.addEventListener('submit', function (event) {
    event.preventDefault();

    let name = tag2.name.value;
    let surname = tag2.surname.value;
    let phone = tag2.phone.value;
    let message = tag2.message.value;

    const obj = {
        имя: name,
        фамилия: surname,
        телефон: phone,
        сообщение: message,
        };

console.log(obj);

});
