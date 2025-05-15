import { Component, OnInit } from '@angular/core';
import { SearchInputComponent } from '../../components/search-input/search-input.component';
import { CountryListComponent } from '../../components/country-list/country-list.component';

@Component({
    templateUrl: 'by-capital-page.component.html',
    imports:  [
        SearchInputComponent,
        CountryListComponent
    ]
})

export class ByCapitalPageComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

    onSearch( value: string){
        console.log(value); 
    }
}