//Declaration
function showMessage(name, city) {
  console.log("Hi, my name is " + name + " I am from " + city);
}
showMessage("Kolya", "Lviv");

//Expresion
let sayHi = function (name) {
  console.log("Hi " + name);
};
sayHi("Nik");

//return
function sum(a, b) {
  return a + b;
}
let w = sum(1, 3);
console.log(w);

//callback
{
  function ask(qestion, yes, no) {
    if (confirm(qestion)) {
      yes();
    } else {
      no();
    }
  }

  function show_yes() {
    console.log("You say YES!!!");
  }

  function show_no() {
    console.log("You say NO!!!");
  }
  ask("do you like coffe", show_yes, show_no);
}
//Стрілочні функції

let showMovie = (age) => {
  if (age < 21) {
    return alert("Ще малий");
  }
  return alert("Go go go!!!");
};
showMovie(11);

function cikl(arrName) {
  for (let i = 0; i < arrName.length; i++) {
    const element = arrName[i];
    console.log(element);
  }
}

let arrt = ["dd", [2, 4, 7], "jih", { id: 133, name: "Olia" }, 24];

cikl(arrt);

{
  function pers(cach) {
    return cach / 100;
  }

  function tax(sum) {
    return sum - pers(sum) * 20 - pers(sum) * 1.5;
  }

  let test = tax(10000);
  console.log(test);
}

{
let usr = function userBilder(name,age) {
  let usersFun = {name, age};
  return usersFun;
}
console.log(usr('Max',54));
console.log(usr('den',23));
}


{
  function girlsFilter(arr) {
    let newGiglsMas = [];
    for (const us of arr) {
      if (us.age > 20) {
        newGiglsMas.push(us);
      }
    }
    return newGiglsMas;
  }

  // let res = girlsFilter(girls);
  // console.log(res);
}

/*THIS */ {
  let users = {
    name: "Lesya",
    age: 33,
    greeting: function (msg) {
      return `${msg} my name is ${this.name}`;
    },
  };

  console.log(users.greeting("Hi"));
}

let watName = prompt("Wat is your name");
alert(`My name is ${watName}`);

// ---1---
// Перепишіть функцію, використовуючи '?' або '||'
function checkAge(age) {
  age > 18 ? true : confirm("Батьки дозволили?");
}

checkAge(9);

// ---2---
// Напишіть функцію min(a, b), яка повертає менше з двох чисел a та b.

function min(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}
let audit = min(4, 9);
console.log(audit);
//  ---3---
// Перепишіть з використаинням стрілкових функцій Замініть Функціональні Вирази на стрілкові функції у коді нижче:
let ask = (question, yes, no) => {
  if (confirm(question)) yes();
  else no();
};
ask(
  "Ви згодні?",
  function () {
    alert("Ви погодились.");
  },
  function () {
    alert("Ви скасували виконання.");
  }
);
