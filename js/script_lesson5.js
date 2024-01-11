//________________________________________________________Замикання

function someName(someValue) {
  return function someName2(params, params2) {
    return someValue + params + params2;
  };
}
let qw = someName(2);
let jh = qw(9, "Go");
console.log(jh);

function someUrl(domain) {
  return function (url) {
    return `http://${url}.${domain}`;
  };
}
let hujg = someUrl("com");
let rjh = hujg("google");
console.log(rjh);

function asd() {
  let x = 5;
  function inner() {
    return ++x;
  }
  return inner;
}
let foo = asd();
console.log(foo);
console.log(foo());

function userBilder(name, age) {
  let usersFun = { name, age };
  return {
    getName() {
      return usersFun.name;
    },
    getAge() {
      return usersFun.age;
    },
    setAge(age) {
      if (age > 0 && age < 100) {
        usersFun.age = age;
      } else {
        alert("ERROR");
      }
    },
  };
}

let bild = userBilder("Pol", 25);
console.log(bild);
let usAge = bild.getAge;
console.log(usAge());
let usNewAge = bild.setAge(99);
console.log(usAge());

//_______________________________________________________this
{
  function changeColor() {
    let style = this.style;
    style.background = "green";
    style.color = "red";
    style.border = 1;
  }

  let userT = document.querySelectorAll('#ty');
  userT.forEach(function (element) {
    element.onclick = changeColor;
  });
}

//____________________________________________bind в this__________
const Nikol = {
  name: "Nikol",
  age: 23,
  info: function (city) {
    console.log(`My name is ${this.name}`);
    console.log(`My age is ${this.age}`);
    console.log(`City is ${city}`);
  },
};
Nikol.info();

const Mikki = {
  name: "Mikki",
  age: 29,
};
Nikol.info.bind(Mikki, "Lviv")();

const Tom = {
  name: "Tom",
  age: 42,
};
Nikol.info.bind(Tom)("Kiev");


//_________________________________________________________call
{
  const userInfo = {
    name: "name",
    age: 23,
    logInfo: function (job) {
      console.group(`${name} info:`);
      console.log(`Name is ${this.name}`);
      console.log(`Age is ${this.age}`);
      console.log(`Job is ${job}`);
      console.groupEnd();
    },
  };
  console.log(userInfo.logInfo());

  const MikiInfo = {
    name: "Miki",
    age: 18,
  };
  userInfo.logInfo.call(MikiInfo, "JS developer"); //одразу викликає(схоже на bind)
}

{
  const showMass = function (name, stars) {
    console.log(`${name}!!! Welkom to ${this.hotel} hotel. Sars - ${stars}`);
  };

  const Bokovel = { hotel: "Bukovel&SPA", price: 45000 };
  const Dragobrat = { hotel: "Dragobrat&SPA", price: 18000 };

  showMass.call(Bokovel, "Nik", 4);
  showMass.apply(Bokovel, ["Nik", 4]); ////////////////////////apply
  showMass.bind(Bokovel, "Nik", 4)();
}

{
  let curt = {
    showItemc() {
      console.log(`"В корзині:" ${this.items}`);
    },
  };

  const woman = {
    items: ["Сукня", "Боді"],
  };

  const man = {
    items: ["Джинси", "Рюкзак"],
  };

  const kid = {
    items: ["Футболка", "колготи"],
  };

  curt.showItemc.bind(man)();

  document
    .querySelector("#wom")
    .addEventListener("click", curt.showItemc.bind(woman));
  document
    .querySelector("#man")
    .addEventListener("click", curt.showItemc.bind(man));
  document
    .querySelector("#kids")
    .addEventListener("click", curt.showItemc.bind(kid));
}
///////////////////////////////////////////////
// Домашнє завдання
// --1--
// 1) написати об*єкт студента який буде виводити ім*я, спеціальнісь, середній
// бал і кількість пропущених занять
// 2) написати метод який буде виводити цю інформацію 
// 3) написати три варіанти студентів
// 4) прикріпити знначення за допомогою call apply bind
class someStudent{
constructor (Sname, special, rating, missedClasses ) {
this.name = Sname,
this.special = special,
this.rating = rating,
this.missedClasses = missedClasses
}
show(){
  return `${this.name}, ${this.special}, ${this.rating}, ${this.missedClasses}`
}
charter(number){
  return`${this.name} have ${number} charter`
}
}
const studentNik = new someStudent('Nik', 'loyer', '9 of 10', 3);
console.log(studentNik);
console.log( studentNik.show());
console.log( studentNik.charter(5));


const studentAr = {
  name:'Artur',
  age: 23
}

console.log(studentNik.charter.bind(studentAr, 6)());
console.log(studentNik.charter.call(studentAr, 6));
console.log(studentNik.charter.apply(studentAr, [6]));



// --2--
// Написати дві кнопки і закріпити на них функції
// при натисканні на кнопку html - має видати коротке визначення 
//що це таке при натисканні на кнопку css - має видати коротке визначення що це таке

let showDif ={
  showDifFun(){
  return console.log(this.definition);
// return document.write `<div>${this.definition}</div>`

}
};

let html = {
  definition: 'стандартизована мова розмітки документів для перегляду вебсторінок у браузері.'
};

let css = {
  definition:'це спеціальна мова стилю сторінок, що використовується для опису їхнього зовнішнього вигляду.'
} 
// console.log(showDif.showDifFun.bind(html)());
document.querySelector('#htmlID').addEventListener('click', showDif.showDifFun.bind(html));

document.querySelector('#cssID').addEventListener('click', showDif.showDifFun.bind(css));

//  --3--
// Написати функцію магазин, яка отримує назву товару, ціну за кг і кількість 
//товару функція має повертати назву товару і вартість
// перевірити на варіантах: 
// 1) banana 30, 4,5
// 2) cherry 58, 1,3
// 3) jrange 89. 3,4

function market (name, price2, number) {
let vart = price2*number;
  return `${name} - ${vart}` 
}

const banana = market('banana', 30, 4.5);
console.log(banana);

const naegfme = market('cherry', 58, 1.3);
console.log(naegfme);

const jrange = market('jrange', 89, 3.4);
console.log(jrange);
