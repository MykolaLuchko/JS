// -- 1 --
// У вас є масив об’єктів fruts, і в кожному з них є name
// Напишіть код, який перетворює їх в масив імен.
// const fruts = [
//   { id: 0, name: "Apple" },
//   { id: 1, name: "Tomat" },
//   { id: 2, name: "Cherry" },
//   { id: 3, name: "Orange" },
// ];
// let name1 = fruts.map((item) => item.name);
// console.log(name1);
// -- 2 --
//Виведіть парні числа від 2 до 10, використовуючи цикл for.
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
for (let i = 0; i < arr.length; i++) {
  if (i % 2 !== 0) {
    let val = arr[i];
    console.log(val);
  }
}

// -- 3 --
//Замініть цикл "for" на "while"
// for (let i = 0; i < 5; i++) {
// console.lpg( `цифра ${i}!` );
// }
// while (i < 5) {
//   console.log(`цифра ${i}!`);
//   i++;
// }

// -- 4 --
//Напишіть цикл, який пропонує prompt ввести число більше за 100.
//Якщо відвідувач введе менше число – попросити ввести ще раз, і так далі.
//Цикл повинен запитувати число доти, доки відвідувач не введе число,
// більше за 100, або не скасує ввід/введе порожній рядок.

// -- 5 --
// Вирахуйте середній вік
const girls = [
  { age: 23, name: "Оля" },
  { age: 29, name: "Аня" },
  { age: 10, name: "Юля" },
  { age: 20, name: "Катя" },
];
girls.push({ age: 18, name: "Леся" });
// let age1 = girls.map((item) => item.age);
// console.log(age1);
// for (const iterator of age1) {
//   let gt = iterator;
//   console.log(gt);
// }
/*WHILE    DO WHILE*/
// let x = 0;
// while (x < girls.length) {
//   console.log(girls[x].name);
//   x++;
// }

// do {
//   console.log(girls[x].name);
//   x++;
// } while (x < girls.length);

let summ = 0;
while (true) {
  let value = +prompt("Введить число");
  if (!value) {
    break;
  } else {
    summ += value;
  }
}
document.write(summ);

/*FOR FOR of FOR in */

for (let i = 0; i < girls.length; i++) {
  let user = girls[i];
  document.write(`<h3>Name - ${user.name}, ${user.age}</h3>`);
}

for (const iterator of girls) {
  document.write(`<h3>Name - ${iterator}, ${iterator.age}</h3>`);
  console.log(iterator);
}

for (const key in girls) {
  const element = girls[key];
  console.log(element);
  document.write(
    `<h2>for in</h2>   <h3>Name - ${element.name}, ${element.age}</h3>`
  );
}

for (const item of girls) {
  for (const key in item) {
    console.log(key, item[key]);
  }
  console.log(" ");
}
