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
