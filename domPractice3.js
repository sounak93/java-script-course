//Qs. Create a new button element. Give it a text “click me”, background color of red & text color of white.Insert the button as the first element inside the body tag.

let button = document.createElement("button");

button.innerText = "click me";
button.style.backgroundColor = "red";
button.style.color = "white";

document.querySelector("body").append(button);