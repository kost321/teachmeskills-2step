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

// let percentageYear = 0.17;
// let numberOfYears = 5;

// function credit(n) {

//     return ( n * (percentageYear * numberOfYears) );
// }

// let x = +prompt();
// alert( credit(x) );


//task3

// function trimString(n) {
//     let x = prompt("");
//     let y = prompt("");

//     return n = str.substring(x, y);
// }

// let str = prompt("");
// console.log( trimString(str) );


//task4

// function getNumbersSum(num) {
//     let figures = "" + num;
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

// function getSum() {

//     if (a === b) {
//         return alert(a && b);
//     } else { 
//         let sum = 0;

//         while(a <= b) {       
//             sum += a;  
//             a ++;
//         }

//         return alert(sum);
//     }
// }

// let result = getSum();
// console.log(getSum(result));


//task6

// Не получилось написать в развёрнутой форме

// function fooboo(boolean, foo, boo,) {

//     if (function() {
//         console.log(foo);
//         })();{
//          return boolean === true
//         } else {
//         (function() {
//         console.log(boo);
//         })();
//     }
// }

// alert(fooboo(true, "foo", "boo"));


//Данный код позаимствовал у Антона

// function fooboo(n,x,y){
//     return n === true ? (function (){console.log(x);})() : (function (){console.log(y);})()
// }
// alert(fooboo(true,'foo','boo'));




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
