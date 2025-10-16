// Qs. Create a toggle button that changes the screen to dark-mode when clicked & light-mode
// when clicked again.

let btn = document.querySelector('button');
let currentMode = 'light';

btn.addEventListener('click', () => {
    if(currentMode === 'Light') {
        console.log('Dark');

        currentMode = 'Dark';
        document.querySelector("body").style.backgroundColor = "black";
    } else {
        console.log('Light');

         currentMode = 'Light';

          document.querySelector("body").style.backgroundColor = "white";
    }
})
