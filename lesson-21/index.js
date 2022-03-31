"use strict"


//task1
 
// const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];
// fibonacci.forEach(element => console.log(element));

// function a(f) {
//     console.log(f);
//     return f
// }

// fibonacci.forEach(a);


//task2

// const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton'];
// const newUsers = users.map((f, index) => `member ${index + 1}: ${f}`);

// console.log(newUsers);


// function getNew(f) {
//     f = 'member ' + ': ' + f;
//     return f;

// }

// const newUsers = users.map(getNew);
// console.log(newUsers);


//task3

// const numbers = [7, -4, 32, -90, 54, 32, -21];

// const result = numbers.filter(Number => Number > 0);
// console.log(result);


// function number(f) {
//     if(f > 0)
//         return f
// }

//  const newNumbers = numbers.filter(number);
//  console.log(newNumbers);


//task4

// const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];

// const result = fibonacci.reduce((sum, f) => sum + f);
// console.log(result);


// function sum(sum, f) {
//     return sum + f;
// }

// const result = fibonacci.reduce(sum);
// console.log(result);


//task5

// const numbers = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5];

// const result = numbers.find((f) => f % 2 == 0);
// console.log(result);


// function getResult(f) {
//     if (f % 2 == 0) {
//         return f;
//     }
// }

// const result = numbers.find(getResult);
// console.log(result);




//class work


// let arr = [{a: 1}, {id: 2}, {id:3}, {}].filter(object => object.id)
// console.log(arr)
 


//  let a1 = [7, 7, 8, 10, 6];
//  let a2 = [5, 6, 5, 10, 10];
//  let a3 = [9, 9, 10, 10, 10];

// let sum1 = a1.reduce((a, b,_,Array) => a+(b/Array.length, 0));
// let sum2 = a2.reduce((a, b,_,Array) => a+(b/Array.length, 0));
// let sum3 = a3.reduce((a, b,_,Array) => a+(b/Array.length, 0));
// console.log(sum1,sum2,sum3)
