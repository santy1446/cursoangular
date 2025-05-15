import { Component, OnInit } from '@angular/core';
import { CountryListComponent } from '../../components/country-list/country-list.component';

@Component({
    templateUrl: 'by-region-page.component.html',
    imports: [
        CountryListComponent
    ]
})

export class ByRegionComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}