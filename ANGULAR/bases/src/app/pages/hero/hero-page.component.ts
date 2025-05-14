import { UpperCasePipe } from "@angular/common";
import { ChangeDetectionStrategy, Component, computed, signal } from "@angular/core";


@Component({
    templateUrl: './hero-page.component.html',
    imports: [UpperCasePipe],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroPageComponent {
    name = signal('Ironman');
    age = signal(45);

    /**
     * Valor computado que se ejecuta cada vez que cambia una de las señales usadas para calcular un nuevo valor
     * A diferencia de un effect, un valor computado devuelve un valor
     */

    heroDescription = computed(() => {
        const description = `${this.name()} - ${this.age()}`;
        return description
    })

    capitalizedName = computed(() => this.name().toUpperCase())

    /*     getHeroDescription(): string {
            return `${ this.name() } - ${ this.age() }`;
        } */

    changeHero() {
        this.name.set('Spiderman');
        this.age.set(25);
    }

    resetForm() {
        this.name.set('Ironman');
        this.age.set(45);
    }

    changeAge() {
        this.age.set(60);
    }
}