// for (let i = 1; i <= 5; i++) {
//     console.log("Sounak De")
    
// }

// let sum = 0;
// let n = 100;
// for(let i=1;i<=n;i++){
//     sum = sum + i;
// }

// console.log(sum);

// let i = 1;

// while(i <= 10) {
//    console.log("Sounak");
//    i++;
// }

// let i = 1;

// do {
//     console.log('i =',i);
//     i++;
// } while (i<= 10);

// let str = "Javascript";

// let size = 0
// ;
// for(let val of str) {
//     console.log("val =", val);
//     size++;
// }

// console.log("Size of the string: ", size);

// let student = {
//     name: "Rahul Kumar",
//     age: 24,
//     cgpa: 8.2,
//     isPass: true
// };

// for(let key in student) {
//     console.log('key =', key, 'value =', student[key]);
// }

//Print all the even numbers for 0-100

// for(let i=0;i<=100;i++) {
//     if(i%2 !== 0) {
//         console.log(i);

//     }
// }

// Q2. Create a game where you start a game with any random game number.Ask the user to keep gussing the game number until the user enters correct value

let num = 25;
let userNum = prompt("Guess the game number : ")

while(userNum != num) {
prompt("You have entered the wrong number.Guess again :")
}

console.log("Congratulation! You have entered the right number.")