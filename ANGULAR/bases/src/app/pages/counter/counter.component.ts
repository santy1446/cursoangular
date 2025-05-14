import { ChangeDetectionStrategy, Component, signal } from "@angular/core";

@Component({
    templateUrl: './counter.component.html',
    styleUrl: './counter.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterComponent {
    counter = 10;
    counterSignal = signal(10);

    constructor() {}

    increseBy(value: number) {
        this.counter += value;
        this.counterSignal.update( current => current + value); //Actualizar una señal haciendo uso de su valor actual
    }

    resetCounter() {
        this.counter = 0;
        this.counterSignal.set(0); //Actualizar una señal sobre escribiendo su valor
    }
}