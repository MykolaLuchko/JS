//___________________________Події___________________
//==========================----Клік----=============
let tar = document.querySelector(".target");

tar.onclick = function () {
  console.log("тиць");
};
tar.onclick = function (e) {
  console.log(e);
};

// АБО
tar.addEventListener("click", () => console.log("дищ"));

//==========================----Наведення----=============
tar.onmouseover = function () {
  console.log("over");
};

//==========================----Водіння----=============
tar.onmousemove = function () {
  console.log("move");
};

//==========================----input----=============

let inp = document.forms.f3.login12;
inp.oninput = function () {
  const value = this.value;
  if (value.includes("ass")) {
    alert("Wrong");
  }

  console.log(value);
  tar.innerText = this.value;
};
//==========================----submit----=============

document.forms.f3.onsubmit = function (e) {
  e.preventDefault();
  console.log(this.login12.value, "wrong");
};

document.forms.f3.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log(this.login12.value, "wrong2");
});

document.forms.f3.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log(this.login12.value, "wrong3");
});

//==========================----contextmenu права кнопка миші----=============
tar.addEventListener("contextmenu", () => console.log("contextmenu"));

//==========================----onmouseout----=============
tar.onmouseout = function () {
  console.log("onmouseout");
};
//==========================----на клавіатуру----=============
let btn = document.querySelector("#btn");
btn.onkeypress = function () {
  console.log("onkeypress");
};

//==========================----видалення----=============
let add = document.querySelector("#Add");
let remove = document.querySelector("#Remove");
let click = document.querySelector("#Click");

let great = () => console.log("Юху");

add.addEventListener("click", () => {
  click.addEventListener("click", great);
});
remove.addEventListener("click", () => {
  click.removeEventListener("click", great);
});

//=============================--------------------
const nav = document.querySelector("#NaVi");
function hendelClick(event) {
  // console.log(event.target);
  // event.target.classList.add('active')
  if (nav.querySelector("li.active")) {
    event.target.classList.remove("active");
  } else {
    event.target.classList.add("active");
  }
}
nav.onclick = hendelClick;

//========================----------Drag-and-drop--------==============
let ball = document.querySelector(".ball");
ball.onmousedown = function (event) {
  function move(pageX, pageY) {
    ball.style.left = pageX - ball.offsetWidth / 2 + "px";
    ball.style.top = pageY - ball.offsetWidth / 2 + "px";
  }
  function onMouse(event) {
    move(event.pageX, event.pageY);
  }
  document.addEventListener("mousemove", onMouse);

  ball.onmouseup = function () {
    document.removeEventListener("mousemove", onMouse);
  };
};
// Домашнє завдання
// -----1----
// Напишіть такий JavaScript, щоб після натискання на кнопку button, елемент
// <div id="text"> зникав.
let btn = document.querySelector('#butnn');
let sText = document.querySelector('#text');
btn.onclick = function () {
  sText.style.display = 'none';
}

// -----2----
// Напишіть такий код, щоб після натискання на кнопку, вона зникала.

// -----3----
// Створіть дерево, яке показує/приховує дочірні вузли при кліці