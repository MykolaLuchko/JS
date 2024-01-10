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

//________________________________________Porototype в конструкторе
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
// Домашнє завдання
// Створити телефонну книгу
// створити початковий клас Abonent, де зберігатимуться ім*я і номер створити set який прийматиме телефон і номер
// створити get який виводитиме данні про абонента
// створити три різних юзери
// вивести данні
