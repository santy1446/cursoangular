export class Person {

    constructor(
        public name: string,
        public address: string) {
    }

    public sayHello() {
        console.log(`Hello ${this.name} from ${this.address}`);
    }
}

/* export class Hero extends Person {
    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
    ) 
    {
        super(realName, 'NY')
    }
} */

export class Hero {

    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
        public person: Person
    ) { }
}


const person = new Person('Tony', 'NY');
const ironMan = new Hero('IronMan', 40, 'Tony Stark', person);
const { person: personObject } = ironMan;
personObject.sayHello();
console.log(ironMan); 