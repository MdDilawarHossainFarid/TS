
class Person{
    name:string;
    surname:string;
    age:number;

    constructor(name:string,surname:string,age:number){
        this.name = name;
        this.surname = surname;
        this.age = age;
    }

    getFullName(){
        return `${this.name} and ${this.surname}`;
    }
    getAge(){
        return `${this.age}`;
    }
}

let farid = new Person("Farid","hossain",12345);
console.log(farid.name)
console.log(farid.getFullName(),farid.getAge());