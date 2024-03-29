{
  let monoBtn = document.querySelector("#mono");
  monoBtn.addEventListener("click", requestMoNo);
  function requestMoNo() {
    return fetch("https://api.monobank.ua/bank/currency");
  }
  requestMoNo()
    .then((info) => info.json())
    .then((jsonArrObj) => {
      for (const Obj of jsonArrObj) {
        let div = document.createElement("div");
        div.innerText = `${Obj.currencyCodeA} ${Obj.currencyCodeB} ${Obj.date} ${Obj.rateCross} ${Obj.rateSell}`;
        document.body.appendChild(div);
        // console.log(jsonArrObj);
      }
    });
}
const mono = async () => {
  let resp = await fetch("https://api.monobank.ua/bank/currency");
  if (resp.ok) {
    console.log("Ok");
  } else {
    console.log("Err", resp.status);
  }
};
mono();

{
  async function someFun() {
    return true;
  }
  someFun().then(console.log);
}

{
  async function someFun2() {
    let gretting = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Hiiiiiiiii");
      }, 2000);
    });
    let result = await gretting;
    console.log(result);
  }
  someFun2();
}

let post = async () => {
  let user = {
    name: "Nik",
    age: 26,
  };

  let respo = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "aplication/json",
    },
  });
};
//------------------------------------------try-catch-----------
try {
  conole.log("Norm");
} catch (error) {
  console.log("Err");
}

setTimeout(function () {
  try {
    conole.log("Norm");
  } catch (error) {
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);

    console.log("Err_function");
  }
}, 1000);
//------------------------------------------Exemples---
let json = `{"name":"Ann"}`;
try {
  let user = JSON.parse(json);
  if (!user.city) {
    throw new SyntaxError("Немає міста");
  }
} catch (error) {
  console.log(error, "Зовсім немає міста");
}

//------------------------------------------WebSocket-----------
let socket = new WebSocket(
  "wss://javascript.info/article/websocket/demo/hello"
);

socket.onopen = function (e) {
  alert("[open] Connection established");
  alert("Sending to server");
  socket.send("My name is John");
};

socket.onmessage = function (event) {
  alert(`[message] Data received from server: ${event.data}`);
};

socket.onclose = function (event) {
  if (event.wasClean) {
    alert(
      `[close] Connection closed cleanly, code=${event.code} reason=${event.reason}`
    );
  } else {
    // e.g. server process killed or network down
    // event.code is usually 1006 in this case
    alert("[close] Connection died");
  }
};

socket.onerror = function (error) {
  alert(error);
};
