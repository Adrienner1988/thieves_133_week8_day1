// Homework Exercises

// 1. For each of these values, what type will the TypeScript compiler infer?
let a = 118;
// A: let a: number = 118;

let b = 'Thieves';
// A: let b: string = 'Thieves';

let c = [true, false, false];
// A: let c: boolean[] = [true, false, false];

let d = {age: 3};
// A: let d: {age: 3};

let e = [3]
// A: let e: number[] = [3];

let f;
// A: let f: any;

let g = []
// A: let g: any[] = [];



// 2. What are the compilation errors in each of the following code snippets?
let song: {
    title: string,
    releaseYear: number,
} = {
    title: 'Lose Yourself'
};
/*A: let song: {
    title: string,
    releaseYear?: number,
} = {
    title: 'Lose Yourself',
    releaseYear: ,
};
*/

let prices = [100, 200, 300];
prices[0] = '$100';
// A: let prices: number[] = [100, 200, 300];
//prices can not be reassigned as a string of '$100' because it was declared as a number 

function myFunc(a: number, b: number): number {}
// A: function myFunc(a: number, b: number): number => {}
//Says it's going to return a number but it not returning anything


//CodeWars
//Multiply
// This code does not execute properly. Try to figure out why.
// function multiply(a, b){
//     return a * b
//   }


//Convert a Number to a String!
//We need a function that can transform a number (integer) into a string.
// What ways of achieving this do you know?
// function numberToString(num) {
//     return num.toString()
//   }


//Reversed String
// Complete the solution so that it reverses the string passed into it.
// function solution(str){
//     let splitStr = str.split('');
//     let reverseStr = splitStr.reverse();
//     let joinStr = reverseStr.join('');
  
//      return joinStr;
//   }