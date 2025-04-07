import { Component, output, signal } from "@angular/core";
import { Character } from "../../../interfaces/character.interface";

@Component({
    selector: 'dragonball-character-add',
    templateUrl: './character-add.component.html',
})
export class CharacterAddComponent {
    name = signal('Trunks');
    power = signal(10);

    newCharacter = output<Character>();

    characters = signal<Character[]>([
        {
            id: 1,
            name: 'Goku',
            power: 9001
        },
        {
            id: 2,
            name: 'Vegeta',
            power: 1400
        }
    ])
    
    addCharacter() {
        if (!this.name() || !this.power() || this.power() <= 0) {
            return;
        }

        const newCharacter: Character = {
            id: Math.floor(Math.random() * 1000),
            name: this.name(),
            power: this.power()
        }
        
        this.newCharacter.emit(newCharacter);
        this.resetFields();
    }

    resetFields() {
        this.name.set('');
        this.power.set(0);
    }
    

}