// async function hello() {
//   console.log("hello");
// }

// function api() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("weather report");
//       resolve(200);
//     }, 3000);
//   });
// }

// async function getWeatherData() {
//   await api();
//   await api();
// }

function getData(dataId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data = ", dataId);
      resolve("success");
    }, 2000);
  });
}

// async function fetchData() {
//   console.log("fetching data1...");
//   await getData(1);
//   console.log("fetching data2...");

//   await getData(2);
//   console.log("fetching data3...");

//   await getData(3);
// }

//using IIFE
(async function () {
  console.log("fetching data1...");
  await getData(1);
  console.log("fetching data2...");

  await getData(2);
  console.log("fetching data3...");

  await getData(3);
})();

// let array = 10;

// async function fetchData() {
//   for (let i = 1; i <= array; i++) {
//     console.log(`fetching data${i}`);
//     await getData(i);
//   }
// }
