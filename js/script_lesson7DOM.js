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
  tex.hidden = true;
}
