let inpUTS = document.getElementsByName("sex");
function onchan() {
  if (inpUTS[0].checked) {
    console.log("жінка");
  } else {
    console.log("чоловік");
  }
}

let fort = document.querySelector(".formgt");
let inputName = document.querySelector(".inputName");
let inputLastName = document.querySelector(".inputLastName");
let age = document.getElementById("age");

fort.addEventListener("submit", dehendClick);

function dehendClick(event) {
  event.preventDefault();
  let user = {
    name: inputName.value,
    LastName: inputLastName.value,
    age: age.value,
    male: inpUTS[0].checked,
  };
  console.log(user);
  localStorage.setItem("key", JSON.stringify(user));
}
let a = localStorage.getItem("key");
console.log(JSON.parse(a));
