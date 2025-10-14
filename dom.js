// let button = document.getElementById('myId');

// console.dir(button);

// let headings = document.getElementsByClassName('myClass');

// console.dir(headings)

// let tags = document.getElementsByTagName('p');

// console.dir(tags);

//query selector

// let firstEl = document.querySelector('#myId'); // returns 1st element

// console.dir(firstEl);


// let allEl = document.querySelectorAll('.myClass'); // returns all elements

// console.log(allEl);

let h2 = document.createElement("h2");

// h2.innerText = "This is a new Heading";
h2.innerHTML = "<i>This is a new Heading</i>";

// let div = document.querySelector('div');

// div.before(h2);

document.querySelector('body').prepend(h2);

document.querySelector('p').remove();





