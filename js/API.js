//==================---------API--------============
fetch("https://jsonplaceholder.typicode.com/users")
  .then((info) => info.json())
  .then((jsonUsers) => {
    for (const user of jsonUsers) {
      let div = document.createElement("div");
      div.innerText = `${user.id} ${user.name}`;
      document.body.appendChild(div);
    }
  });
//================-------COOKI----------============
let cook = document.cookie;
cook = "name - Nik";
console.log(cook);
cook = "id - 195";
console.log(cook);
cook = "lastId-75";
console.log(cook);

let cookies = cook.split(";");
console.log(cookies);
let users = {};
for (let index = 0; index < cookies.length; index++) {
  const element = cookies[index];
  let elem = element.split("-");
  users[elem[0]] = elem[1];
}
console.log(users);
