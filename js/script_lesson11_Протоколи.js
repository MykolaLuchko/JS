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
