var Person = /** @class */ (function () {
    function Person(name, surname, age) {
        this.name = name;
        this.surname = surname;
        this.age = age;
    }
    Person.prototype.getFullName = function () {
        return "".concat(this.name, " and ").concat(this.surname);
    };
    Person.prototype.getAge = function () {
        return "".concat(this.age);
    };
    return Person;
}());
var farid = new Person("Farid", "hossain", 12345);
console.log(farid.name);
console.log(farid.getFullName(), farid.getAge());
