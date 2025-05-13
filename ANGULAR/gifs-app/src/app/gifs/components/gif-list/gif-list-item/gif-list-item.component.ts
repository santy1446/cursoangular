import { Component, input, OnInit } from '@angular/core';

@Component({
    selector: 'gif-list-item',
    templateUrl: 'gif-list-item.component.html'
})

export class GifListItemComponent implements OnInit {
    image = input<string>('');

    constructor() { }

    ngOnInit() { }
}