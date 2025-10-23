const URL = "https://meowfacts.herokuapp.com/?count=10";

const fact = document.querySelector("#fact");
const btn = document.querySelector("#btn");

// let promise = fetch(URL);
// console.log(promise);

// const getFacts = async () => {
//   console.log("getting data ...");
//   let response = await fetch(URL);
//   console.log(response);
//   let data = await response.json();

//   //   console.log(data["data"][0]);
//   fact.innerText = data["data"][0];
// };

function getFacts() {
  fetch(URL)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      fact.innerText = data["data"][0];
    });
}

btn.addEventListener("click", getFacts);
