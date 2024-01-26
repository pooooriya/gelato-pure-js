// Dom Manipulation

// select kardan dar js
// const pTags = document.getElementsByTagName("p"); // ---
// const pTags = document.getElementsByTagName("p");
// let collection = document.getElementsByTagName("p");
// collection[0].style.backgroundColor = "red";

// window.onload = () => {
//   ChangeText();
// };

// // task 1 - change text
// const ChangeText = () => {
//   const pTag = document.getElementsByTagName("p")[0];
//   pTag.innerHTML = "Hello Quera !";
// };

// task 1 - change text
// const pTag = document.getElementsByTagName("p")[0];
// pTag.innerText = "Hello Quera !";

// const pTag = document.getElementsByClassName("paragraph");
// // pTag[0].innerHTML = "hello quera";
// // pTag[0].innerText = "<p>Hello Quera</p>";
// pTag[0].innerHTML = "<p>Hello Quera</p>";

// console.log(document.getElementById("paragraph"));

// document.getElementsByTagNameNS
// const cells = table.getElementsByTagNameNS(
//     "http://www.w3.org/1999/xhtml",
//     "td",
//   );

// console.log(document.getElementsByClassName("paragraph2"));

// ++++++++++++++++

// document.querySelectorAll();
// document.querySelector();

// 1. khoroji mishe avalin element ke dakhelesh neveshti tatobogh dare
// const x = document.querySelector(".paragraph");
// // tamami chiz haee ke ba selectori ke dakhelesh neveshti tatobogh dare
// const x2 = document.querySelectorAll("div p.paragraph2");
// console.log(x2);

// ++++++++++++++++++++++++++++++
//document.querySelector => element
//document.querySelectorAll => htmlCollection

// const element = document.querySelector("div");
// element.className = "test_2";
// element.style.fontSize = "80px";
// console.log(element);

// chandin rah braie taghir shekl va shamayel element

//appendChild
// const element = document.querySelector("div");
// const p = document.createElement("p");
// p.innerHTML = "Hello";
// element.appendChild(p);

// const element = document.querySelector("div");
// const p = document.createElement("p");
// p.innerHTML = "Pouriya";
// element.prepend(p);

// prepend vs appendChild ++++

// const element = document.querySelector("div");

// console.log(element.getClientRects());

// console.log(element.scrollHeight);
// console.log(element.offsetHeight);
// console.log(element.clientHeight);
// console.log(element.clientWidth);
// console.log(element.textContent);

// event
// register
// remove

// function handleClickOnDocument() {
//   console.log("Click Shodam");
// }

// document.addEventListener("click", handleClickOnDocument);

// document.removeEventListener("click", handleClickOnDocument);

// const element = document.querySelector("div");
// element.addEventListener("click", () => {
//   console.log("man click shudam");
// });

// +++++++++++++++++++++++++++++++++++++++
// window.addEventListener()
// document.addEventListener()
const element = document.querySelector("div");

// element.focus();
// element.addEventListener("blur", () => {
//   console.log("blur");
// });

// window.addEventListener("blur", () => {
//   console.log("window blur shud !!!");
// });

// window.addEventListener("scroll",()=>{})

// element.addEventListener("mouseenter", () => {
//   console.log("mouseenter");
// });

// element.addEventListener("mouseleave", () => {
//   console.log("mouseleave");
// });

// element.addEventListener("mousedown", () => {
//   console.log("mousedown");
// });
// element.addEventListener("mouseup", () => {
//   console.log("mouseup");
// });

// element.addEventListener("mousemove", () => {
//   console.log("mousemove");
// });

// touch gooshi dashte basham
// mouse pc laptop

// element.addEventListener("mousemove", () => {
//   console.log("mousemove");
// });  --------TOUCH----------

// element.addEventListener("pointermove", () => {
//   console.log("pointermove");
// });

// element.addEventListener("pointerenter", (e) => {
//   console.log("pointerenter");
// });

// element.addEventListener("touchmove", () => {
//     console.log("pointerenter");
//   });

// element.addEventListener("")

// event bubbling => (snapp)

// function handleClick() {
//   console.log("clicked");
// }

// function handleClickDown(e) {
//   if (e.keyCode) {
//     alert("شما اجازه ی استفاده کردن از شیفت را ندارید");
//   }
//   console.log(e.keyCode);
//   console.log("type shod dakhel man");
// }

// function onBlur(cb){
//     // code blur shodan element
//     cb(event)
// }

// onBlur((event)=>{
//     handleClickDown(event)
// })

// window.addEventListener("keydown", (event) => {
//   // 17 67
//   event.preventDefault();
//   if (event.keyCode === 67 && event.ctrlKey) {
//     alert("شما مجاز به استفاده از کنترل سی نیستین");
//   }
//   console.log(event.keyCode);
// });

// window.addEventListener("copy", (e) => {
//   e.preventDefault();
//   alert("آی دزد");
//   return false;
// });
// window.addEventListener("oncut", () => {});
// window.addEventListener("onpaste", () => {});

// window.onclick =()=>{}
// window.onload =()=>{}
// window.addEventListener("load", () => {

// });

// bubbling

// function handleClick() {
//   console.log("handleClick");
// }

// function handleClick2(event) {
//   event.stopPropagation();
//   console.log("handleClick2");
// }

// let data = { username: "ali" };
// function handleChangeInput(event) {
//   data = {
//     ...data,
//     [event.target.name]: event.target.value
//   };
//   console.log(data);
// }

// function handleSubmit(event) {
//   event.preventDefault();
// }

// promise callback callback hell async await

// const x = new Promise((res, rej) => {
//   rej(20000);
// });

// console.log(
//   x.then((value) => {
//     console.log(value);
//   })
// );

// then
// x.catch((value) => {
//   console.log(value);
// });

// console.log(1);
// const x = new Promise((res, rej) => {
//   console.log(2);
//   res("20000"); /// system group
//   console.log(3);
// });
// console.log(
//   x.then((res) => res),
//   4
// );
// console.log(5);

// console.log(1);
// const x = new Promise((res, rej) => {
//   console.log(2);
//   setTimeout(() => {
//     console.log(3);
//     res(200);
//   }, 0);
//   console.log(4);
// });
// console.log(
//   x.then((res) => res),
//   5
// );
// console.log(6);
// async await try catch

// const request = async () => {
//   // promise await
//   return await new Promise((res, rej) => {
//     res(2000);
//   });
// };

// console.log("1");

// setTimeout(() => {
//   console.log("2");
// }, 1000);

// const x = new Promise((res, rej) => {
//   return res(2000);
// });
// console.log("3");

// setTimeout(() => {
//   console.log("4");
// }, 0);

// console.log("5");

// cb hell
// const x = new Promise((res, rej) => {
//   return res(2000);
// });

// x.then((value) => value).then((value) => {}); // cb hell
// // async await

// continue
// debugger

// const array = [1, 2, 3, 4, 5];
// for (let index = 0; index < array.length; index++) {
//   if (index % 3 == 0) {
//     break;
//   }
//   console.log(index);
// }
// break continue ;

//.then .catch  --- try catch
// async await

// try {
//   console.log(1);
//   const x = 10;
//   x = 12;
// } catch (error) {
//   alert("خطا خوردم");
// }

// console.log(2);

// async await

// ec module import export

// import module from "./module";
// module();

// const x = required("./module");
// import { x } from "./module";
// console.log(x());

// final project

// import file from "./module";
