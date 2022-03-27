"use strict"


//task1

// const box = {
//     color: "red",
//     size: 30
// }

// delete box.color;
// delete box.size;
// console.log(box);


//task2

// const box = {
//     color: "red",
//     size: 30
// }

// console.log("color" in box);
// console.log("size" in box);
// console.log(box);


//task3

// const student = {
//     name: 'John',
//     age: 19,
//     isHappy: true
// }

//     for(let key in student) {
//         console.log(key);
//     }
//     for(let key in student) {
//         console.log(student[key]);
//     }


//task4

// const colors = {
//     'ru pum pu ru rum': {
//         red: 'красный',
//         green: 'зеленый',
//         blue: 'синий'
//     },
// };

// console.log(colors["ru pum pu ru rum"].red);
// console.log(colors["ru pum pu ru rum"].blue);
   

//task5

// let salaries = {
//     Andrey: 500,
//     sveta: 413,
//     anton: 987,
//     andrey: 664,
//     alexandra: 199
// }

// let sum = 0;

//     for (let key in salaries) {
//         sum += salaries[key];
//   }

// console.log(sum); 


//task6

// let enterLogin = prompt("Введите логин");
// let enterPassword = prompt("Введите пароль");

// let result = {
//     login: enterLogin,
//     password: enterPassword
// } 
// let x = confirm("Вы верно ввели логи и пароль?");
//     if (x === true) {
//         alert("Добро пожаловать");
//     } else {
//         alert("Отказано");
//     }


// ADVANCED level

// task2

// let student1 = {
//     name: 'Polina',
//     age: 27,
// }
// let student2 = {
//     name: 'Polina',
//     age: 27,
// }
// console.log(JSON.stringify(student1) === JSON.stringify(student2));

//task3

// const animals = {
//     cat: {
//        name: 'Енчик',
//        age: 3,
//     },
//     dog: {
//        name: 'Орео',
//        age: 2,
//     }
// }
// console.log( animals && animals.bird && animals.bird.name );