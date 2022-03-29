"use strict"

// task1

// const colors = ['red', 'green', 'blue'];

// console.log(colors.length);


// task2

// let animals = ['monkey', 'dog', 'cat'];

// console.log(animals[animals.length - 1]);


// task3

// const numbers = [5, 43, 63, 23, 90];

//1
// numbers.length = 0;
// console.log(numbers);

//2
// console.log(numbers.slice(0,0));


// task4

// const students = ['Polina', 'Dasha', 'Masha'];

// students.pop();
// students.push(`Borya`);


// students.shift();
// students.unshift(`Andrey`);
// console.log(students);


// task5

// const cats = ['Gachito', 'Tom', 'Batman'];

//     for( let i = 0; i < cats.length; i += 1){
//         console.log(cats[i]);
//     }

    // for( let i of cats) {
    //     console.log( i );
    // }


// task6

// const evenNumbers = [2, 4, 6, 8, 10];
// const oddNumbers = [1, 3, 5, 7, 9];

// const num = evenNumbers.concat(oddNumbers);
// console.log([num.indexOf(8)]);
// console.log(num);


// task7

// const binary = [0, 0, 0, 0];
// const binaryNew = binary.join('1');
// console.log(binaryNew);



//ADVANCED level


//task1

// let input = 'wow';

// function palindrom (input) {
//     let reversedInput = '';

//     for (let character of input) {
//         reversedInput =  character + reversedInput;
//         console.log(reversedInput);
//     }

//     return input === reversedInput;
// }

// console.log(palindrom(input))


//task2

// const matrix = [
//     [12, 98, 78, 65, 23],
//     [54, 76, 98, 43, 65],
//     [13, 324, 65, 312],
//     [9092, 22, 45, 90000],
// ];

// function sumMatrix (matrix) {
//     let sum = 0;
//     let count = 0;
//     for (let i = 0; i < matrix.length; i += 1) {
//         for (let j = 0; j < matrix[i].length; j += 1) {
//             sum += matrix[i][j];
//             count += 1;
//         }
//     }
//     let result = sum / count;

//     return result;
// }

//  console.log(sumMatrix(matrix));


//task3

// const mixedNumbers = [-14, 24, -89, 43, 0 , -1, 412, 4];

// function getArrays (mixedNumbers) {
//     const positivNumbers = [];
//     const negaticNumbers = [];

//     for (let i = 0; i < mixedNumbers.length; i += 1) {
//         if (mixedNumbers[i] >= 0 ) {
//             positivNumbers.push(mixedNumbers[i]);
//         } else {
//             negaticNumbers.push(mixedNumbers[i]);
//         }
//     } 
//     console.log(positivNumbers, negaticNumbers);
// }

// getArrays(mixedNumbers);


//task4

// function getRandomInt() {
//     const numbers = [];
//     const numbersInCub = [];
    
//     for (let i = 0; i < 5; i += 1) {
//         numbers.push( Math.floor(Math.random() * 100) );
//     }
//     console.log(numbers);

//     for (let i = 0; i < numbers.length; i += 1) {
//         numbersInCub.push( Math.pow(numbers[i], 3) );
//     }
//     console.log(numbersInCub);
// }

// getRandomInt();
