let divs = document.querySelectorAll('.box');

// console.dir(divs);
let idx = 1;
for(let div of divs) {
    div.innerText = `new unique value ${idx}`;
}

// divs[0].innerText = "new value 1";
// divs[1].innerText = "new value 2";
// divs[2].innerText = "new value 3";