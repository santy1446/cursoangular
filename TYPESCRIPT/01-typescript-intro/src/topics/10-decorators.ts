function classDecorator<T extends { new (...args:any[]): {}}>(
    constructor: T
) {
    return class extends constructor {
        newProperty: string = 'New Property';
        hello: string = 'Hello World';
    }
}

@classDecorator
export class SuperClass {
    public myProperty: string = 'Hello World';

    print() {
        console.log('SuperClass print method');
    }
}

console.log(SuperClass);


const myClass = new SuperClass();
console.log(myClass);
