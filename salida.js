var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
console.log('Hola Mundo');
// types
var myString = "Hello Word";
myString = 22 + "";
var myNumber = 22;
var myBool = true;
// Acepta cualquier tipo de Dato
var myVar = "Hello";
myVar = false;
// Arrays
var StringArray = ["item1", "item2", ""];
var NumberArray = [1, 2, 3];
var BooleanAray = [true, false, false];
var AnyArray = [1, 2, true, "hello", [], {}];
// tuple
var strNumTuple;
strNumTuple = ["Hello", 22];
function showTodo(todo) {
    console.log(todo.title + " - " + todo.text);
}
var myTodo = { title: 'Eat Dinner', text: 'lorem' };
showTodo(myTodo);
document.write();
//  Clases
var User = /** @class */ (function () {
    function User(name, email, age) {
        this.name = name;
        this.age = age;
        this.email = email;
    }
    User.prototype.register = function () {
        console.log(this.name + " is registered");
    };
    User.prototype.showMeAge = function () {
        return this.age;
    };
    User.prototype.AgeInYears = function () {
        return this.age + ' years';
    };
    User.prototype.payInvoce = function () {
        console.log(this.name + " paide invoice");
    };
    return User;
}());
var john = new User('John', 'alexander.ayras@gmail.com', 22);
console.log(john.AgeInYears());
document.write();
// Herencia
var Member = /** @class */ (function (_super) {
    __extends(Member, _super);
    function Member(id, name, email, age) {
        var _this = _super.call(this, name, email, age) || this;
        _this.id = id;
        return _this;
    }
    Member.prototype.payInvoce = function () {
        _super.prototype.payInvoce.call(this);
    };
    return Member;
}(User));
var gordon = new Member(1, 'Juan', 'juan@juan.com', 24);
gordon.payInvoce();
