// Qs. Create an arrow function to perform the same task.

const vowelsCount = (str) => {
    let count = 0;
    for(let i = 0; i< str.length; i++) {
        if(str[i] === "a" ||str[i] === "e" ||str[i] === "i" ||str[i] === "o" ||str[i] === "u") {
            count++;
        }
    }

    return count;
}

let val = vowelsCount("apnacollege");
console.log(val);