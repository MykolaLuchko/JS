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
  tex.hidden = true;//fall відкриває текст
}

{
  let inform = document.getElementById('mass');
  console.log(inform.value);// показує значення
}

{
  let ralf = document.querySelector('.text-ralf');
  console.log(ralf.textContent);// показує вміст
  ralf.textContent = "Somthing Wrong!!!";
  console.log(ralf.textContent);
}

{
  let btn = document.querySelector('.button');
  btn.style.background = 'green';// міняємо стилі
}

{
  const item = document.createElement('a');
  item.href='#';
  item.classList.add('btn');//додаємо клас
  item.textContent = 'HEAR'//додаємо зміст
  const nav = document.querySelector('.nav')
  nav.appendChild(item)// додаємо сам контент на сторінку в нав

  const h = document.createElement('h2')
  h.textContent = '!!!!!Hi!!!!'

  const tes = document.querySelector('.test');
  tes.insertBefore(h,nav);//додаємо сам контент на сторінку перед НАВ

  const giper = document.querySelector('.giper');
  //nav.removeChild(giper);//видаляє
  giper.remove();//видаляє
}

{
  const par = document.querySelector('.par');
  const ralf = document.querySelector('.ralf');
  const clon = ralf.cloneNode(true);// клонує
  par.appendChild(clon);// вставляє
}

{
  const inn = document.querySelector('.inn');
  const word = `<p>Hi. I like bear</p>`;
  inn.innerHTML = word;
}

{
  const lister = document.querySelector('.list');
  lister.insertAdjacentHTML('beforebegin', '<p>beforebegin</p>')
  lister.insertAdjacentHTML('afterbegin', '<p>afterbegin</p>')
  lister.insertAdjacentHTML('afterend', '<p>afterend</p>')
  lister.insertAdjacentHTML('beforeend','<p>beforeend</p>')


}