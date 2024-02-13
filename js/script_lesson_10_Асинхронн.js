//-------------------------------------Timeout-----------------------

let log = () => console.log("Асинхронність");
let timeout = setTimeout(log, 5000); //Виводить функцію через 5 сек
clearTimeout(timeout); //прибирає функцію

//-------------------------------------Interval----------------------

// let logA = () => console.log("Interval");
// let interval = setInterval(logA, 3000);
// clearInterval(interval);
// Exemple

let st = document.querySelector("#start1");
let stop1 = document.querySelector("#stop1");
let time;

st.addEventListener("click", () => {
  time = setInterval(() => {
    console.log("Interval");
  }, 1000);
});

stop1.addEventListener("click", () => {
  clearInterval(time);
  console.log("Stop");
});

//-----------------------------------------Date------------------
const data = new Date();
console.log(data);

const dates = new Date(2023, 8, 23, 8, 46, 0);
console.log(dates);

let dat = new Date();
console.log(dat.getDate());
console.log(dat.getMonth());
console.log(dat.getFullYear());
console.log(dat.getMinutes()); // і тд...

//-----------------------------------------Promise------------------

{
  function load(src) {
    return new Promise((resolve, reject) => {
      let img = document.createElement("img");
      img.src = src;

      img.onload = () => resolve(img);
      img.onerror = () => reject(new Error(`ErroR ${img}`));

      document.body.append(img);
    });
  }

  let pro = load(
    "https://i.pinimg.com/originals/12/e0/7d/12e07dd8d48be0564c80313fded6c7bc.jpg"
  );

  pro.then(
    (script) => console.log(`Download ${script}`),
    (error) => console.log(`Error ${error.message}`)
  );
}

{
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(2), 1000);
  })
    .then(function (result) {
      console.log(result);
      return new Promise((resolve, reject) => {
        setTimeout(() => resolve(result + 10), 1000);
      });
    })
    .then(function (result) {
      console.log(result);
    });
}
