"use strict";

/*Task from learn.JS.ru

/*let name;
const admin = `Джон`;
name = admin;
alert(admin);*/


/*let name = prompt('Ваше имя?');
alert(`Ваше имя ${name}`);*/




/*HW-15*/


/*Task1

const x = 20;
const y = 58;
const z = 42;
console.log(x + y + z);*/


/*Task2

const SECONDS_IN_MINUTE = 60;
const MINUTES_IN_HOUR = 60;
const HOURS_IN_DAY = 24;
let daysInYear = 365;
let myAge = 25;
let myAgeInSeconds = (myAge * daysInYear * HOURSINDAY * MINUTESINHOUR * SECONDSINMINUTE);
alert(myAgeInSeconds);*/


/*Task 3

const count = 42;
const userName = '42';
count = Number('42');
userName = String(42);
console.log(typeof count);
console.log(typeof userName);*/



/*Task 4

const a = 1;
const b = 2;
const c = "белых медведей";
console.log(`${a}${b} ${c}`);*/



/*Task5

const a = "access";
const b = "marine";
const c = "frost";
const d = "reproach";
let e = "chopped";
const wordLength = (a + b + c + d + e).length;
console.log(wordLength);*/


/*Task6 
const a = 'доступ';
const b = 2;
const c = true;
const aType = typeof(a);
const bType = typeof(b);
const cType = typeof(c);
alert(`Variable: a have type: ${aType}; Variable: b have type: ${bType}; Variable: c have type: ${cType};`);*/



/*Task7

const name = prompt("NAME?");
const age = prompt('age?');
alert(`${name} ${age}`);*/


//ADVANCED level

//Task1

/*const a = 4;
const b = 3;
a=a+b;
b=a-b;
a=a-b;
console.log(`${a} ${b}`);*/


/*Task2

const codeWord1 = "обернись";
const codeWord2 = "неужели";
const codeWord3 = "огурцы";
const codeWord4 = "липкие";
const codeWord5 = "?!";
var cipher =(codeWord1[1] + codeWord2[1] + codeWord3[1] + codeWord4[1] + codeWord5[1]) ;
console.log(cipher);*/



/*hw-2-extra

TASK 1

let time = prompt("Количество часов");
let litres = (time * 0.5);
alert(Math.trunc(litres));*/


/*TASK 2

let year = prompt("Введите год");
let century = (year - 1) / 100 + 1;
alert(Math.trunc(century));*/


/*TASK 3 

let year = prompt("Введите год");
let century = (year/4);
alert("Если целое число то год високосный");
confirm(century);*/


/*TASK 4

let n = prompt("Введите число");
let result = ("$" + n);
alert(result);*/
