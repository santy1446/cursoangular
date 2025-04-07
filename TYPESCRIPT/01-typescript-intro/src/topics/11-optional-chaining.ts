export interface Passenger {
    name: string;
    children?: string[];
}

const passanger1: Passenger = {
    name: 'Fernando'
}

const passanger2: Passenger = {
    name: 'Melissa',
    children: ['Natalia', 'Gabriel']
}

const printChlidren = (passenger: Passenger): void => {
    const children = passenger.children?.length || 0;
    console.log(children);
}

printChlidren(passanger1);
printChlidren(passanger2); 