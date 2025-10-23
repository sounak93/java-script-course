// console.log("console 1");
// console.log("console 2");

// setTimeout(() => {
//   console.log("hello");
// }, 4000); //timeout 2s = 2000ms

// console.log("console 3");
// console.log("console 4");

//Callback

// function sum(a, b) {
//   console.log(a + b);
// }

// function calculation(a, b, sumCallBack) {
//   sumCallBack(a, b);
// }

// calculation(1, 2, sum); //pass function without parenthesis

// calculation(1, 2, (a, b) => {
//   console.log(a + b);
// });

// const hello = () => {
//   console.log("hello");
// };

// setTimeout(hello, 3000);

// Callback hell

// function getData(dataId, getCallBackData) {
//   setTimeout(() => {
//     console.log(dataId);
//     if (getCallBackData) {
//       getCallBackData();
//     }
//   }, 2000);
// }

// getData(1, () => {
//   getData(2, () => {
//     getData(3, () => {
//       getData(4, () => {
//         getData(5);
//       });
//     });
//   });
// });

//Promises

// let promise = new Promise((resolve, reject) => {
//   console.log("new Promise");
//   reject("Some error");
// });

// function getData(dataId, getCallBackData) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       //   console.log("data", dataId);
//       //   resolve("success");
//       reject("error");
//       if (getCallBackData) {
//         getCallBackData();
//       }
//     }, 5000);
//   });
// }

// const getPromise = () => {
//   return new Promise((resolve, reject) => {
//     console.log("This is a promise");
//     // resolve("success");
//     reject("network error");
//   });
// };

// let promise = getPromise();

// promise.then((res) => {
//   console.log("Promised fulfilled", res);
// });

// promise.catch((err) => {
//   console.log("rejected", err);
// });

//Promise chain

// function asyncFunc1() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data1");
//       resolve("success");
//     }, 4000);
//   });
// }

// function asyncFunc2() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data2");
//       resolve("success");
//     }, 4000);
//   });
// }

// // console.log("fetching data1...");

// // let p1 = asyncFunc1();

// // p1.then((res) => {
// //   console.log("fetching data2...");

// //   let p2 = asyncFunc2();

// //   p2.then((res) => {});
// // });

// // other way of writting this

// console.log("fetching data1...");

// asyncFunc1().then((res) => {
//   console.log("fetching data2");

//   asyncFunc2().then((res) => {});
// });

function getData(dataId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data =", dataId);
      resolve("success");
    }, 2000);
  });
}

// // 1st way
// getData(1).then((res) => {
//   console.log(res);
//   getData(2).then((res) => {
//     console.log(res);
//     getData(3).then((res) => {
//       console.log(res);
//     });
//   });
// });

// better way

console.log("fetching data1...");
getData(1)
  .then((res) => {
    console.log("fetching data2...");
    return getData(2);
  })
  .then((res) => {
    console.log("fetching data3...");
    return getData(3);
  })
  .then((res) => {
    console.log(res);
  });
