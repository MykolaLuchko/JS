{
  for (let index = 0; index < document.body.childNodes.length; index++) {
    console.log(document.body.childNodes[index]);
  }
}

{
  let elem = document.getElementById("elem"); //or querySelector
  elem.style.background = "red";
}

{
  let elements = document.querySelectorAll("ul>li:last-child"); // повертає останний єлемент всих ul з li
  for (const iterator of elements) {
    console.log(iterator);
  }
}

{
  let tex = document.getElementById("texhidden");
  tex.hidden = true; //fall відкриває текст
}

{
  let inform = document.getElementById("mass");
  console.log(inform.value); // показує значення input, select, textarea.
}

{
  let ralf = document.querySelector(".text-ralf");
  console.log(ralf.textContent); // показує вміст
  ralf.textContent = "Somthing Wrong!!!";
  console.log(ralf.textContent);
}

{
  let btn = document.querySelector(".button");
  btn.style.background = "green"; // міняємо стилі
}

{
  const item = document.createElement("a");
  item.href = "#";
  item.classList.add("btn"); //додаємо клас
  item.textContent = "HEAR"; //додаємо зміст
  const nav = document.querySelector(".nav");
  nav.appendChild(item); // додаємо сам контент на сторінку в нав

  const h = document.createElement("h2");
  h.textContent = "!!!!!Hi!!!!";

  const tes = document.querySelector(".test");
  tes.insertBefore(h, nav); //додаємо сам контент на сторінку перед НАВ

  const giper = document.querySelector(".giper");
  //nav.removeChild(giper);//видаляє
  giper.remove(); //видаляє
}

{
  const par = document.querySelector(".par");
  const ralf = document.querySelector(".ralf");
  const clon = ralf.cloneNode(true); // клонує
  par.appendChild(clon); // вставляє
}

{
  const inn = document.querySelector(".inn");
  const word = `<p>Hi. I like bear</p>`;
  inn.innerHTML = word;
}

{
  const lister = document.querySelector(".list");
  lister.insertAdjacentHTML("beforebegin", "<p>beforebegin</p>");
  lister.insertAdjacentHTML("afterbegin", "<p>afterbegin</p>");
  lister.insertAdjacentHTML("afterend", "<p>afterend</p>");
  lister.insertAdjacentHTML("beforeend", "<p>beforeend</p>");

  let m = lister.parentNode;
  console.log(m);
  let e = lister.previousSibling;
  console.log(e);
}

// Домашнє завдання
// -----1-----
// Напишіть код, щоб вибрати елемент з атрибутом data-widget-name з документа
// та прочитати його значення.
// <!DOCTYPE html>
// <html>
// <body>
// <div data-widget-name="menu">Виберіть жанр</div>
// <script>/* ваш код */</script>
// </body>
// </html>

// отримаємо його
let elem = document.querySelector("[data-widget-name]");

// прочитаємо значення
//alert(elem.dataset.widgetName);
// чи
//alert(elem.getAttribute("data-widget-name"));

//--------------------------------------------DOM----------------
//------------------------------------------Пошук
console.log(document.head.children);

//console.log(document.body.innerHTML);
{
  //id
  document.getElementById;
}

{
  //clacc
  let menu = document.getElementsByClassName("menu");
  for (const iterator of menu) {
    console.log(iterator);
  }
}

{
  //tag
  let tag = document.getElementsByTagName("li");
  console.log(tag);

  let list1 = document.getElementById("list-1");
  let li = list1.getElementsByTagName("li");
  console.log(li);
}

{
  let qs = document.querySelector(".menu");
  console.log(qs);
  let qsa = document.querySelectorAll(".menu");
  console.log(qsa);
  let li = document.querySelectorAll("#list-2 > li");
  console.log(li);
  for (const iterator of li) {
    console.log(iterator);
  }
}
//-----------------------------------Маніпуляція-------------------
{
  let target = document.querySelector('#target');
  console.log(target.innerText);// доступ до тексту можна мінювати
  target.innerHTML = `I like JS <span></span>`;
  console.log(target.innerText);
  target.classList.add('foo');
  target.classList.toggle('res');// перемикач (додає або видаляє класс) 
  console.log(target.getAttribute('xxx'));// показує значення атрибуту, класу та ін
  console.log(target.getAttribute('id'));
  console.log(target.getAttribute('class'));
  //setAttribute - змінює
  console.log(target.previousElementSibling);// показуєє елемент який стоїть перед
  console.log(target.nextElementSibling);// показуєє елемент який стоїть після
  console.log(target.childNodes);//Nods вузли
  console.log(target.children);// html
  console.log(target.outerHTML);//вид ззовні
}