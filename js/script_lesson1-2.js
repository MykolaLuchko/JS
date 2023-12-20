// //***1***
// // Робота зі змінними
// // Оголосіть дві змінні: name та city.
// // Присвойте значення "Іван" змінній name.
// // Скопіюйте значення зі змінної name в city.
// // Виведіть значення змінної city, використовуючи функцію console.log (яка повинна показати “Іван”).

// let name = "Іван";
// let city = "Kyiv";
// city = name;
// console.log(city);

// //***2***
// //Який буде результат виконання скрипта?
// // let name = "Olga";
// // console.log(`привіт ${1}`); //
// // console.log(`привіт ${"name"}`); //
// // console.log(`привіт ${name}`); // ?

// //***3***
// //Видобути число зі змінних
// let a = "5";
// console.log(typeof Number(a));

// let b = "13cvb";
// console.log(typeof Number.parseInt(a));

// let c = "12.9sxdcfgv";
// console.log(typeof Number.parseFloat(a));

// //***4***
// //Зробіть, щоб 0.1 + 0.2 = 0.3
// console.log((0.1 * 10 + 0.2 * 10) / 10);

// //***5**
// //Поверніть найбільше число с набору 20, 10, 50, 40
// console.log(Math.max(20, 10, 50, 40));

// //***6**
// //Поверніть випадкове число в діапазоні від 2 до 4
// let numb = Math.random() * (4 - 2) + 2;
// let withoutfloat = Math.round(numb);
// console.log(withoutfloat);

// //***7**
// //дізнатись довжину message
// const message = "Welcome to Bahamas!";
// console.log(message.length);

// //***8**
// //вивести в консоль message великими літерами
// let f = "message";
// console.log(f.toUpperCase());

// //***9**
// // створити пустий об*єкт
// // додати туди ім*я, вік і місто
// // вивести результат в консоль
// // видалити місто
// // додати буль з ключем: like flowers
// // вивести результат в консоль

// let user = {};
// user.name = "Kolya";
// user.age = 28;
// user.city = "Kyiv";
// console.log(user);
// delete user.city;
// user["like flowers"] = true;
// console.log(user);

// //***10**
// // За допомогою циклу “for…in” вивести в консоль ключі і значення об*єкта
// for (const key in user) {
//   console.log(key, user[key]);
// }

// let user = {};
// user.name = "Kolya";
// user.age = 28;
// user.city = "Kyiv";
// for (const key in user) {
//   console.log(key, "-", user[key]);
// }

// let num = +prompt("enter number");
// let num_true = Number(num);
// console.log(typeof num_true);

// let a = 5;
// let b = 3;
// let c;
// if (2 + 2 == 4) {
//   c = a + b;
// }
// console.log(c);

// let tern_op = 5 + 5 == 10 ? 3 + 2 : 3 - 2;
// console.log(tern_op);

// let value = prompt("enter number");
// if (value == "green") {
//   alert("GO!!!");
// } else if (value == "yellow") {
//   alert("wait!!!");
// } else if (value == "red") {
//   alert("stop!!!");
// } else {
//   alert("Be careful");
// }

// let value = prompt("enter color");
// switch (value) {
//   case "red":
//     alert("STOP");
//     break;
//   case "yellow":
//     alert("WAIT");
//     break;
//   case "green":
//     alert("GOOOOOO");
//     break;
//   default:
//     alert("Do somethitg");
//     break;
// }

// let cost;
// const sub = "premium";

// switch (sub) {
//   case "free":
//     cost = 0;
//     break;
//   case "pro":
//     cost = 100;
//     break;
//   case "premium":
//     cost = 500;
// }
// console.log(cost);

// let min = prompt("  Введіть хвилини ");
// if (min >= 0 && min <= 14) {
//   console.log("Перша чверть");
// } else if (min >= 15 && min <= 29) {
//   console.log("Друга чверть");
// } else if (min >= 30 && min <= 44) {
//   console.log("Третя чверть");
// } else if (min >= 45 && min <= 59) {
//   console.log("Четверта чверть");
// } else {
//   console.log("Invalid value");
// }

// let value = prompt("Введіть назву товару").toLocaleLowerCase();
// let cost;
// switch (value) {
//   case "кавун":
//     cost = 10;
//     alert(`${value} коштує ${cost} грн.`);
//     break;
//   case "груша":
//     cost = 70;
//     alert(`${value} коштує ${cost} грн.`);
//     break;
//   case "ананас":
//     cost = 180;
//     alert(`${value} коштує ${cost} грн.`);
//     break;
//   case "пиво":
//     cost = 22;
//     alert(`${value} коштує ${cost} грн.`);
//     break;
//   case "хліб":
//     cost = 12;
//     alert(`${value} коштує ${cost} грн.`);
//     break;
//   case "вода":
//     cost = 8;
//     alert(`${value} коштує ${cost} грн.`);
//     break;
//   case "цукерки":
//     cost = 35;
//     alert(`${value} коштує ${cost} грн.`);
//     break;

//   default:
//     alert(`Товару ${value} немає в наявності`);
// }

// Якщо змінна більше нуля - виведіть true, менше - false

//Перевірте це на варіантах 1, 0, -3.
// Якщо змінна ="test" - виведіть true,
//Перевірте це на варіантах 'test',"qwerty", true
// Якщо змінна більше 10 - відніміть 5,
//менше - додайте 5, результат виведіть в консоль
//Перевірте це на варіантах 1, 10, 13.
// let value = prompt("Enter value");
// if (value > 0 || value == String(value)) {
//   if (value > 10) {
//     alert(+value - 5);
//   } else if (value < 10) {
//     alert(+value + 5);
//   }
//   alert("true");
// } else {
//   alert("false");
// }
//Зробіть сервіс який отримує число від 1 до 12
// виведіть місяць який дорівнює числу

//Зробіть сервіс який отримує тризначне число
//Поверніть користувачу сумму цих чисел
// let info = confirm("enter 3 number");
// if (info == true) {
//   let value1 = +prompt("1 number");
//   let value2 = +prompt("2 number");
//   let value3 = +prompt("3 number");
//   alert(value1 + value2 + value3);
// } else {
//   alert("Goodby");
// }
