//______________________________STRING_____________________________________//

let a = 5;
console.log(typeof a);

let string = "I love my wife";
console.log(string[2], string[5]);

console.log(typeof toString(10));
console.log(+"100500");
console.log(parseInt("10564grgr"));
console.log(parseFloat("248.644efefe"));

console.log(!!100500);
console.log(!!0);

console.log(!!"asd");
console.log(!!"");

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
{ ///concat
let experiment = "I love my wife";
let ex = experiment.concat(' and my son!!!');
document.write(`${ex}`);
}

let experiment = "I love my wife";
console.log(experiment.startsWith('I love'))//true;
console.log(experiment.endsWith('ife'))//true;
console.log(experiment.substring(3, 8))// обрезает и возвращаєт
console.log(experiment.indexOf('v'));//видає индекс
console.log(experiment.charAt(2));//видає букву  по індексу
console.log(experiment.replace('wife', 'son'));//змінює
let split = experiment.split(" ");// повертає масив по роздільнику
console.log(split);

//_________________________________Arr_________________________________________________//

let fruts = [
    { id: 0, name: "Apple" },
    { id: 1, name: "Tomat" },
    { id: 2, name: "Cherry" },
    { id: 3, name: "Orange" },
    { id: 3, name: "Plum" },
  ];

  console.log(Array.isArray(fruts));//Чи массив

  fruts.push({name:"Max", age: 29}, [5,"value",63]);//Додає в кінець масиву
  console.log(fruts)

  let pop = fruts.pop();// Вирізає останній елемент з масиву та може його повернути 
  console.log(fruts);
  console.log(pop);

  fruts.unshift('!!!!');//Додає в початок масиву
  console.log(fruts);

  fruts.shift();// Вирізає перший елемент з масиву та може його повернути 
  console.log(fruts);

  let join = fruts.join();// перетворює в стрінгу ('роздільник');
  console.log(join);

  let mass = [2,8,57,48];
  let concat = fruts.concat(mass);// Приєднує один масив до іншого
  console.log(concat);

  let slice = concat.slice(0, 4); //Вирізає з 0 по 4 індекс не включно
  console.log(slice);
  console.log(concat);

  let splice = concat.splice(0, 4, {kj:587, jg:87987}, 645, 'khugyfy');////Видаляє з 0 по 4 індекс не включно та повертає новий concat  не змінюється
  console.log(splice);
  console.log(concat);
 

  let newSplice = concat.splice(concat.indexOf('khugyfy'), 1);
  console.log(newSplice);
  console.log(concat);
  
  let includes = concat.includes(645);// true  перевіряє на наявність;
  console.log(includes);


  //_______________!!!!!!!!!________________!!!!!!!!!!!!!_________________!!!!!!!!!!!!_________________!!!!!!!!!!!!!!!___________________!!!!!!!!!!//

  let users = [
    {name:'Nik', age: 21, status: true},
    {name:'Maks', age: 24, status: false},
    {name:'Olya', age: 75, status: true},
    {name:'Den', age: 15, status: true},
    {name:'Djek', age: 41, status: false},
    {name:'Djo', age: 45, status: false},
    {name:'Kate', age: 32, status: true},
    {name:'Cati', age: 23, status: false}
  ];

  let arr2 = [];
  users.forEach(value=>arr2.push(value.name))//_______________________________________________forEach
  console.log(arr2);

 
   let arr3 = users.filter(value=>value.age < 30);//___________________________________________filter
   console.log(arr3);

   let mapUsers = users.map((value, index) =>{return{name:value.name, id : index+1}});//___________________________________________map повертає видозмінений обєкт
   console.log(mapUsers);

   let find = users.find(value=> value.name === "Den");//___________________________________________find
   console.log(find);


 