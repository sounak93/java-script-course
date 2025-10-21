// Qs. Create a toggle button that changes the screen to dark-mode when clicked & light-mode
// when clicked again.

let btn = document.querySelector("button");
let body = document.querySelector("body");
let currentMode = "light";

btn.addEventListener("click", () => {
  if (currentMode === "Light") {
    console.log("Dark");

    currentMode = "Dark";
    // body.style.backgroundColor = "black";
    body.classList.add("dark");
    body.classList.remove("light");
  } else {
    console.log("Light");

    currentMode = "Light";

    // body.style.backgroundColor = "white";
    body.classList.add("light");
    body.classList.remove("dark");
  }
});
