/*Qs. For a given array with marks of students -> [85, 97, 44, 37, 76, 60]
Find the average marks of the entire class.*/

let marks = [85, 97, 44, 37, 76, 60];

let marksLength = marks.length;

let sum = 0;

for(let i = 0; i < marksLength; i++) {
    sum += marks[i];
}

let avg = sum/marksLength;

console.log(`Average marks of the class is ${avg}.`);