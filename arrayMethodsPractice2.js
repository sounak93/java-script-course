//Qs. Take a number n as input from user. Create an array of numbers from 1 to n.
//Use the reduce method to calculate sum of all numbers in the array.
//Use the reduce method to calculate product of all numbers in the array.

let userInput = prompt("Enter some value: ");

let arr = [];
for(let i =1; i<=userInput; i++) {
    // arr.push(i);
    arr[i-1] = i;
}

console.log(arr);

//sum
let sum = arr.reduce((prev, curr) => {
    return prev + curr;
});

console.log(sum);

//product
let product = arr.reduce((prev, curr) => {
    return prev * curr;
});
console.log(product);