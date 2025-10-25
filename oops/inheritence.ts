
class Animal {
    name: string;

    constructor(name:string){
        this.name = name;
    }
    display(): void {
        console.log(`${this.name} !`)
    }
}

class Dog extends Animal{
    breed: string;
    constructor(name: string, breed: string){
        super(name);
        this.breed = breed;
    }
     display1(): void {
        console.log(`${this.breed}`)
    }
}

class Cat extends Animal{
    breed: string;
    constructor(name: string, breed: string){
        super(name);
        this.breed = breed;
    }
     display1(): void {
        console.log(`${this.breed}`)
    }
}

const myDog = new Dog("Buddy", "Golden Retriever");
const myCat = new Cat("Mirza", "Persian cat");
myDog.display();
myDog.display1();
myCat.display();
myCat.display1();


