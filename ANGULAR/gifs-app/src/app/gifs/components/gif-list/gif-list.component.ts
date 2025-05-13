import { Component, input, OnInit } from '@angular/core';
import { GifListItemComponent } from './gif-list-item/gif-list-item.component';
import { Gif } from '../../interfaces/gif.interface';

@Component({
    selector: 'gif-list',
    templateUrl: 'gif-list.component.html',
    imports: [
        GifListItemComponent
    ]
})

export class GifListComponent implements OnInit {
    gifs = input<Gif[]>([]);

    constructor() { }

    ngOnInit() { }
}