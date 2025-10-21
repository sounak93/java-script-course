let div = document.querySelector("div");
let newEl = document.createElement("p");
newEl.innerHTML = "<i>You are inside the box</i>";

// div.onmouseover = () => {
//   console.log("new paragraph");
//   div.after(newEl);
// };

let i = 0;
div.addEventListener("mouseover", (evt) => {
  i++;
  console.log(i);
  div.classList.add("inside");
  div.after(newEl);
});
div.addEventListener("mouseout", (evt) => {
  //   console.log("new paragraph");
  //   div.after(newEl);
  div.classList.remove("inside");
  newEl.remove();
});
