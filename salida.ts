console.log('Hola Mundo');

// types

var myString: string = "Hello Word";
myString=22 +"";

var myNumber: number = 22;
var myBool: boolean = true;

// Acepta cualquier tipo de Dato
var myVar: any = "Hello";
myVar = false;

// Arrays

var StringArray: string[] = ["item1", "item2", ""];
var NumberArray: number[] = [1,2,3];
var BooleanAray: boolean[] = [true, false, false];
var AnyArray: any[] = [1, 2, true, "hello", [], {}];

// tuple
var strNumTuple: [string, number];
strNumTuple = ["Hello", 22];
// strNumTuple = ["world", 245, "", 45];

// void, undefined, null

// let myVoid: void = undefined;
// let myNull: null = null;
// let myUndefined: undefined = undefined;

// Funciones

/*function getSum(num1: number, num2: number): number {
  return num1 + num2;
}*/
/*
let mySum = function(
  num1: number | string,
  num2: number | string): number {
    if(typeof(num1) === 'string'){
      num1 = parseInt(num1);
    }
    if(typeof(num2) === 'string'){
      num2 = parseInt(num2);
    }
    return num1 + num2;
}*/
/*
function getName(
  firstName: string,
  lastName?: string): string {
    if(lastName === undefined){
      return firstName
    }
  return `${firstName} ${lastName}`
}*/

/*
function myVoidFunction():void {
  return;
}*/

// Interfaces

interface ITodo {
  title: string;
  text: string;
}

function showTodo(todo: ITodo) {
  console.log(`${todo.title} - ${todo.text}`);
}

let myTodo: ITodo = {title: 'Eat Dinner', text: 'lorem'}

showTodo(myTodo)

document.write()


//  Clases

class User {
  
  name: string;
  email: string;
  age: number;
  
  constructor(name, email, age){
    this.name = name;
    this.age = age;
    this.email = email;
  }
  
  register() {
    console.log(`${this.name} is registered`);
  }

  showMeAge(){
    return this.age;
  }

  public AgeInYears(){
    return this.age + ' years'
  }
  payInvoce() {
    console.log(`${this.name} paide invoice`); 
  }
}

var john = new User('John', 'alexander.ayras@gmail.com', 22);

console.log(john.AgeInYears());


document.write();

// Herencia

class Member extends User {
  id: number;

  constructor(id, name, email, age) {
    super(name, email, age);
    this.id = id;
  }

  payInvoce() {
    super.payInvoce();
  }
}

var gordon = new Member(1, 'Juan', 'juan@juan.com', 24);
gordon.payInvoce();