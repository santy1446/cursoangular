import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopMenuComponent } from '../../components/top-menu/top-menu.component';

@Component({
    selector: 'selector-name',
    templateUrl: 'country-layout.component.html',
    imports: [RouterOutlet, TopMenuComponent]
})

export class CountryLayoutComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}