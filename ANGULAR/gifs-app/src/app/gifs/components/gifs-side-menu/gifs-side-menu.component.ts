import { Component, OnInit } from '@angular/core';
import { GifsSideMenuOptionsComponent } from './gifs-side-menu-options/gifs-side-menu-options.component';
import { GifsSideMenuHeaderComponent } from './gifs-side-menu-header/gifs-side-menu-header.component';

@Component({
    selector: 'gifs-side-menu',
    templateUrl: 'gifs-side-menu.component.html',
    imports: [
        GifsSideMenuHeaderComponent,
        GifsSideMenuOptionsComponent
    ]
})

export class GifsSideMenuComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}