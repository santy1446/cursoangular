import { Component, OnInit } from '@angular/core';
import { SearchInputComponent } from '../../components/search-input/search-input.component';
import { CountryListComponent } from '../../components/country-list/country-list.component';

@Component({
    templateUrl: 'by-country-page.component.html',
    imports:  [
        SearchInputComponent,
        CountryListComponent
    ]
})

export class ByCountryPageComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

    onSearch( value: string){
        console.log(value); 
    }
}