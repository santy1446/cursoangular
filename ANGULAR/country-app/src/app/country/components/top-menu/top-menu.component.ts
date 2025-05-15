import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
    selector: 'country-top-menu',
    templateUrl: 'top-menu.component.html',
    imports: [
        RouterLink,
        RouterLinkActive
    ]
})

export class TopMenuComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}