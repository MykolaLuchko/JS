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

document.forms.f3.login12.oninput = function () {
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
