// let heros = ['ironman', 'hulk', 'batman', 'spiderman', 'superman', 'shaktiman'];

// let size = heros.length;

// for loop
// for(let i= 0;i< size;i++) {
//     console.log(heros[i]);
// }

//while loop

// let i = 0;
// while(i < size){
//     console.log(heros[i]);
//     i++;
// }

//do-while loop
// let i = 0;
// do {
//     console.log(heros[i]);
//     i++;
// } while(i< size);

// for -of
// for(let names of heros) {
//     console.log(names);
// }

// for-in

// for(let keys in heros) {
//     console.log(heros[keys]);
// }

// array methods

// let num = [1, 2, 3 ,4];

// num.push(5, 6, 7);
// num.pop();
// console.log(num);

// let foods = ['potato', 'apple', 'banana', 'chips'];
// let marks = [82, 97, 58, 69];
// console.log(marks);
// console.log(marks.toString());
// console.log(marks);

// let marvel_heros = ['ironman', 'spiderman', 'hulk'];
// let dc_heros = ['superman', 'batman'];
// let indian_heros = ['shaktiman', 'krish'];

// let heros = marvel_heros.concat(dc_heros, indian_heros);

// console.log(heros);

// marvel_heros.unshift('antman');
// marvel_heros.shift('antman');
// console.log(marvel_heros);

let arr = [1, 2, 3, 4 ,5, 6, 7];

// let arr1 = arr.slice(1,3);

let arr1 = arr.splice(2)
console.log(arr1);
