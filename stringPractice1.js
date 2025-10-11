// Qs1. Prompt the user to enter their full name. Generate a username for them based on the input.Start username with @, followed by their full name and ending with the fullname length.

let userName = prompt("Enter your name :");

let newUserName = userName.replace(' ', '');
newUserName = newUserName.toLowerCase(newUserName);

let finalUserName = `@${newUserName}${newUserName.length}`;

console.log(finalUserName);