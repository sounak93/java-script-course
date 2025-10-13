//Qs. For a given array of numbers, print the square of each value using the forEach loop.

// let arr = [4, 7, 11, 3, 14];

// arr.forEach((val) => {
//     console.log(`Square of ${val} :`,val ** 2);
// });

// another way 

let nums = [67, 54, 39, 75];

let calcSquare = (num) => {
    console.log(`Square of ${num} :`, num * num);
};

nums.forEach(calcSquare);
