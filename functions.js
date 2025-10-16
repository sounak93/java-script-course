// function myFunction() {
//     console.log("My name is Sounak De");
//     console.log("I love JS :)");
// }

// myFunction();

// function myFunction(msg , n) {
//     //parameter -> input
//     console.log(msg * n); // return NaN => Not a number
// }

// myFunction("I love js", 100); //argument

//Function -> 2 number , sum

// function sum(num1, num2) {
//     // console.log(num1 + num2)
//       s = num1 + num2;
//       return s;

//     //   console.log(num1 + num2); // after retun the line will not execute
// }

// let val =sum(4, 5);
// console.log(val);

// arror function 
//sum function 
// function sum(a, b) {
//     return a+b;
// }

// const arrowSum = (a,b) => {
//     console.log(a+b);
// }

// // arrowSum(4, 5);

// //multiplication function 
// function mul(a, b) {
//     return a*b;
// }

// const arrowMul = (a, b) => {
//     // console.log(a*b);

//     return a*b;
// }

// // let mulVal = arrowMul(3, 4);
// // console.log(mulVal);

// const printHello = () => {
//     console.log("Hello");
// }

// let arr = [1, 2, 3, 4, 5];

// arr.forEach((val) => {
//     console.log(val);
// });

// let cities = ['Kolkata', 'Mumbai', 'Delhi'];

// cities.forEach((nameVal, idx, arr) => {
//     console.log(nameVal, idx, arr);
// })

//map

// let nums = [67, 54, 39, 75];

// let newNums = nums.map((num) => {
//     // console.log(num);
//     return num * 2;
// });

// console.log(newNums);

// filter

// let nums = [1, 2, 3, 4, 5, 6, 7];

// let newArray = nums.filter((num) => {
//     return num > 3 !== 0;
// });

// console.log(newArray);

// reduce

// let arr = [5,11, 4, 77, 42,97, 101];

// let newVal = arr.reduce((prev, curr) => {
//     return prev < curr ? prev : curr;
// });

// console.log(newVal);

let arr = [5,11, 4, 77, 42,97, 101];

arr.forEach((val) => {
    return val * 2;
});

console.log(arr);