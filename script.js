'use strict';


/////// Task 1  Преобразуйте user в JSON, затем прочитайте этот JSON в другую переменную.

let user = {
  name: "User photo",
  size: "200 x 200"
};

let user2 = JSON.parse(JSON.stringify(user));


/////// Task 2 Создайте асинхронную функцию getUsers(names), которая получает на вход массив логинов пользователей GitHub, запрашивает у GitHub информацию о них и возвращает массив объектов-пользователей.Информация о пользователе GitHub с логином USERNAME доступна по ссылке: https://api.github.com/users/USERNAME.


async function getUsers(names) {
    let jobs = [];
  
    for(let name of names) {
      let job = fetch(`https://api.github.com/users/${name}`).then(
        success => {
          if (success.status != 200) {
            return null;
          } else {
            return success.json();
          }
        },
        fail => {
          return null;
        }
      );
      jobs.push(job);
    }
  
    let result = await Promise.all(jobs);
  
    return result;
  }