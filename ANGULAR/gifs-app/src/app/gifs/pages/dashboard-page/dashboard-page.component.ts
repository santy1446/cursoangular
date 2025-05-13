import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GifsSideMenuComponent } from '../../components/gifs-side-menu/gifs-side-menu.component';

@Component({
    templateUrl: 'dashboard-page.component.html',
    imports: [
        RouterOutlet,
        GifsSideMenuComponent
    ]
})

export default class DashboardPageComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}