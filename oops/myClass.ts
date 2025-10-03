
class MyClass{
    name:string;
    age:number;
    diaplay():void{
        console.log(`hi${this.name}`)
    }
}


let myCar = new MyClass();
myCar.name = "BMw";
myCar.age = 12;

myCar.diaplay()