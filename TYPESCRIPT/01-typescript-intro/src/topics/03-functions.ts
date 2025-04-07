/* function addNumbers(a: number, b: number) {
    return a + b;
} */

const addNumbers = (a: number, b: number): number => {
    return a + b;  
}

const result: number = addNumbers(5, 10);

console.log(result);

interface Character {
    name: string;
    hp: number;
    showHp: () => void
}
const healCharacter = (character: Character, amount: number) => {
    character.hp += amount;
}

const stride: Character = {
    name: 'Stride',
    hp: 50,
    showHp() {
        console.log(`HP: ${this.hp}`);
    } 
}   

healCharacter(stride, 20);
stride.showHp();



export {}