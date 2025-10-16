let btn1 = document.querySelector("#btn1");
// let div = document.querySelector("div");

// btn1.onclick = (e) => {
//     console.log(e);
//     console.log("button was clicked");
//     let a = 25;
//     a++;
//     console.log(a);
// }

// div.onmouseover = () => {
//     console.log('mouse is inside div');
//     let a = 25;
//     a++;
//     console.log(a);
// }

btn1.addEventListener('click', (evt) => {
    console.log("btn1 was clicked - handler 1");
    // console.log(evt);
    // console.log(evt.type);
})
btn1.addEventListener('click', () => {
    console.log("btn1 was clicked -- handler 2")
})

const handler3 = () => {
    console.log("btn1 was clicked -- handler 3")
}
btn1.addEventListener('click', handler3)
btn1.addEventListener('click', () => {
    console.log("btn1 was clicked -- handler 4")
})

btn1.removeEventListener('click', handler3)