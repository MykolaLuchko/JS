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

  let userT = document.querySelectorAll("div");
  userT.forEach(function (element) {
    element.onclick = changeColor;
  });
}

{
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
}
