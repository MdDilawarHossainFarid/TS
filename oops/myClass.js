var MyClass = /** @class */ (function () {
    function MyClass() {
    }
    MyClass.prototype.diaplay = function () {
        console.log("hi".concat(this.name));
    };
    return MyClass;
}());
var myCar = new MyClass();
myCar.name = "BMw";
myCar.age = 12;
myCar.diaplay();
