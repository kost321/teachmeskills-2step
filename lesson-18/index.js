"use strict"


// task1

// function getSum(n) {
//     let sum = 0;
   
//     for (let i = 0; i <= n; i += 1) {
//        sum += i;
//     }

//     return sum;
// }

// let x = +prompt();
// alert( getSum(x) );
 

//task2

// const percentageYear = 0.17;
// const numberOfYears = 5;

// function credit(n) {

//     return n * (percentageYear * numberOfYears);
// }

// let x = +prompt();
// alert( credit(x) );


//task3

//let start = prompt("");
//let end = prompt("");

// function trimString(n) {

//     return n = str.substring(start, end);
// }

// let str = prompt("");
// console.log( trimString(str) );


//task4

// function getNumbersSum(num) {
//     let figures = num.toString();
//     let sum = 0;
      
//     for (let i = 0; i < figures.length; i +=1) {
//         sum += +figures[i];
//     }

//     return sum;
// }
    
// let result = prompt("");
// console.log( getNumbersSum(result) );


//task5

// let a = +prompt("Введите число");
// let b = +prompt("Введите число");

// function getSum(a, b) {

//     if (a === b) {
//         return a ;
//     } 
//         if(a > b) {
//             let c = b ;
//             b = a;
//             a = c;
//         }

//         let sum = 0;

//         while(a <= b ) {       
//             sum += a;  
//             a += 1;
//         }

//         return sum;
//     }

// console.log(getSum(a, b));


//task6

// function fooboo(booleanValue, nameFoo, nameBoo) {
//     if(booleanValue === true) {
//         nameFoo();
//     } else {
//         nameBoo();
//     }
// }

// function foo() {
//     console.log("foo");
// }

// function boo() {
//     console.log("boo");
// }

// fooboo(false, foo, boo);







// Class work



// task 1

// let a = +prompt("Введите число");
// let b = +prompt("Введите число");
// function min(a, b) {
//     if (a < b) {
//         return a;
//     } else {
//         return b;
//     } 
// }
// let result = min(a, b);
// alert(result);


// task 2

// let x = +prompt("Введите число");
// let n = +prompt("Введите число");

// function pow(x, n) {
//     if (n % 1 == 0 && n > 1) {
//         alert(pow(x, n));
//         } else {
//         alert(`используйте натуральное число`);
//         }
// return x ** n;


// task 3

// let str = prompt();

// function found() {
//     let n = 0;
//     for (let i = 0; i < str.length; i += 1) {
//         if ( str[i] === 'e'   str[i] === 'a'  str[i] === 'i'  str[i] === 'o'  str[i] === 'u') {
//             n += 1;
//         }
//     }
//     return n;
// }
// let result = found();
// alert(result);


// task 4

// function palindrom(str) {
//     for (let i = 0; i < str.length / 2; i += 1) {
//         if (str[i] !== str[str.length - i - 1]) {
//             return false;
//         }
//     }
//     return true;
// }
// alert(palindrom('anna'))
// alert(palindrom('abcba'))
// alert(palindrom('zkscslzkuvhlz'))

// task 5

// function fib(n) {
//     let a = 1;
//     let b = 1;
//     for (let i = 3; i <= n; i++) {
//       let c = a + b;
//       a = b;
//       b = c;
//     }
//     return b;
//   }
