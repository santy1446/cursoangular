
import { effect, Injectable, signal } from '@angular/core';
import { Character } from '../interfaces/character.interface';

const loadFromLocalStorage = (): Character[] => {
    const characters = localStorage.getItem('characters');
    return characters ? JSON.parse(characters) : [];
}

@Injectable({providedIn: 'root'})
export class DragonballService {

    characters = signal<Character[]>(loadFromLocalStorage());

    addCharacter(character: Character) {
        this.characters.update((list) => [...list, character]);
    }

    /**
     * Los efectos son funciones que se ejecutan cada vez que cambia una señal
     * se usa para ejecutar código secundario pero no devuelve un valor
     * en este caso se usa para guardar los personajes en el localStorage
     */
    saveToLocalStorage = effect(() => {
        localStorage.setItem('characters', JSON.stringify(this.characters()));
    });
    
}