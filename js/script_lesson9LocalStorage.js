function onchan() {
  let inpUTS = document.getElementsByName("sex");
  if (inpUTS[0].checked) {
    console.log("жінка");
  } else {
    console.log("чоловік");
  }
}

let fort = document.getElementsByClassName("formgt");
let inputName = document.getElementsByClassName("inputName");
let inputLastName = document.getElementsByClassName("inputLastName");
let age = document.getElementById("age");

function dehendClick(event) {
  event.preventDefault();
  let user = {
    name: inputName.value,
    LastName: inputLastName.value,
    age: age.value,
    male: inpUTS[0].checked,
  };
  console.log(user);
}

fort.addEventListener("submit", dehendClick);
