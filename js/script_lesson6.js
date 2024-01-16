//_____________________________Конструктор
{
  function User(FIO, age, adress) {
    this.name = FIO;
    this.age = age;
    this.adress = adress;
  }
  const nik = new User("Luchko Mykola", 26, true);
  console.log(nik);
  const lom = new User("Lesya", 32);
  console.log(lom);

  function Custom(FIO, age, adress, summ) {
    User.apply(this, arguments);
    this.summ = summ;
  }
  const nameCustom = new Custom("Bond", 34, "poltava", 25757568);
  console.log(nameCustom);
}

{
  function User2(FIO, age, adress, wife) {
    this.name = FIO;
    this.age = age;
    this.adress = adress;
    this.wife = wife;
  }
  const wife1 = new User2("kol", 23, true, { name: "jbh", age: 154 });
  console.log(wife1);
}

{
  function User3(FIO, age, adress, nameW, ageW) {
    this.name = FIO;
    this.age = age;
    this.adress = adress;
    this.wife = { name: nameW, age: ageW };
  }
  const wife2 = new User3("kol", 23, true, "Olya", 35);
  console.log(wife2);
}

//________________________________________Porototype в конструкторе (добавляє щось в конструктор" "можна зробити як посилання")
{
  function UserBL(name, age, status) {
    this.name = name;
    this.age = age;
    this.status = status;
  }
  const Kate = new UserBL("Kate", 36, true);
  console.log(Kate);

  UserBL.prototype.greeting = function () {
    return `hello my name is ${this.name}`;
  };

  const Kate2 = new UserBL("Kate2", 16, false);
  console.log(Kate2.greeting());
}

//____________________________________________________apply
{
  function BestCity(name, people, road) {
    this.name = name;
    this.people = people;
    this.road = road;
  }

  const newYork = new BestCity("New York", 14256421, true);
  console.log(newYork);

  newYork.gardens = function (numb) {
    document.write(`${this.name} have gardens ${numb}----`);
  };
  newYork.gardens(89);

  const Kyiv = new BestCity("Kyiv", 3421136, true, 3);
  newYork.gardens.apply(Kyiv, [341]); ///////////////////////////
  newYork.gardens.call(Kyiv, 162); //________________________ call
  let qwer = newYork.gardens.bind(Kyiv); //__________________bind
  qwer(54);
}
//__________________________________________________Класи
{
  class Bank {
    static type = 'Privat';
    constructor(options) {
      this.summ = options.summ;
      this.month = options.month;
      this.p = options.p;
    }
    credit() {
      return console.log(this.summ + this.p * this.month);
    }
  }

  userBank = new Bank({
    summ: 3000,
    month: 5,
    p: 500,
  });

  userBank.credit();
}

{
  class Users {
    constructor(name, age, wife) {
      this.name = name;
      this.age = age;
      this.wife = wife;
    }
    /*static*/ sms() {
      //   може бути статичним
      return `Hi!!! My name is ${this.name}`;
    }
  }

  const makar = new Users("Makar", 22, "qween");
  console.log(makar.sms());

  //________________________створення нового (розширеного) клвсу на основі наявного  extends!!!!!
  class UserApdate extends Users {
    constructor(name, age, wife, children) {
      super(name, age, wife);
      this.children = children;
    }
  }

  const Mykola = new UserApdate("Mykola", 26, "lesya", "Makar");
  console.log(Mykola);
  console.log(Mykola.sms());
  
}


//_________________________________________________get (для зчитування) & set (для зміни)
{
class WebUser {
    constructor (name, age){
        this.name = name;
        this.age = age;

    }
firstName = '';
lastName = '';
age = '';
city = '';

set name(nameValue){
    const nameRow = nameValue.split(' ');
    this.firstName = nameRow[0];
    this.lastName = nameRow[1];
}

get name(){
    return `First name -${firstName}, Last name -${lastName}`
}
}

const Webus = new WebUser('Mykola Lychko', 25);
console.log(Webus);

}

// Домашнє завдання
// Створити телефонну книгу
// створити початковий клас Abonent, де зберігатимуться ім*я і номер створити set який прийматиме телефон і номер
// створити get який виводитиме данні про абонента
// створити три різних юзери
// вивести данні

class Abonent{
    constructor(name, number){
        this.name=name;
        this.number=number;     
}
pp=""
set number(df){
  let som = 'Номер ' + df;
    this.pp = som;
}

get num(){
    document.write(`<div> ${ this.name} - ${this.pp}</div>`)
}

}
const efef = new Abonent('Mak', 548487484);
console.log(efef);
efef.number = 3265689;
console.log(efef);
//efef.num();


{
  class Circle {
    constructor(selector){
this.$el=document.querySelector(selector)
    }

    hide (){
      this.$el.style.display = 'none';

    }
    show(){
      this.$el.style.display = 'block';

    }
  }

  class CircleItem extends Circle{
    constructor(options){
      super(options.selector);
      this.$el.style.width = options.size+'px' ;
      this.$el.style.height = options.size+'px' ;
      this.$el.style.borderRadius = '50%';
      this.$el.style.background = options.color;
    }
  }
  const CircleRed = new CircleItem({
    selector:'#circleItem',
    color: 'red',
    size: 50
  });


  const Circleyellow = new CircleItem({
    selector:'#circleyellow',
    color: 'yellow',
    size: 80
  });
  
  const Circlgreen= new CircleItem({
    selector:'#circlegreen',
    color: 'green',
    size: 30
  });


Circleyellow.hide();
}


{
  function Car(name, color) {
    this.name = name;
    this.color = color;
      }

      Car.prototype.sms = function () {
        document.write (`<h3>${this.name} is ${this.color}</h3>`)
      }

const BMW = new Car('BMW','RED');
const Opel = new Car('Opel','Green', 200);

BMW.sms();
Opel.sms();
console.log(Opel);
}

//______________________________________________MIXIN
{
let someMix = {
  sayHi(){
    console.log(`Hi ${this.name}`);
  },

  sayBye(){
    console.log(`By ${this.name}`);
  },
};
class User{
  constructor(name){
this.name = name;
  }
}

Object.assign(User.prototype, someMix);
const Iv = new User('Ivan');
Iv.sayHi();
} 
// Домашнє завдання
// ----1----
// Створіть функцію-конструктор Calculator, який створює об’єкти з трьома
// методами:
// read() запитує два значення за допомогою prompt і запам’ятовує їх у
// властивостях об’єкта.
// sum() повертає суму цих властивостей.
// mul() повертає результат множення даних властивостей


function Calculator() {
  this.read = function() {
    this. velue1 = +prompt('velue1?' );
    this. velue2 = +prompt('velue2?' )
  }
  this.sum = function() {
    return this. velue1 + this. velue2
    
  }
  this. mul = function() {
    return this. velue1 * this. velue2
}
}
const qwerty = new Calculator();
qwerty.read();
alert(qwerty.sum())

