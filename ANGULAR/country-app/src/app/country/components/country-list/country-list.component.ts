import { Component, input, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { DecimalPipe } from '@angular/common';

@Component({
    selector: 'country-list',
    templateUrl: 'country-list.component.html',
    imports: [
        DecimalPipe
    ]
})

export class CountryListComponent implements OnInit {

    countries = input.required<Country[]>();
    constructor() { }

    ngOnInit() { }
}