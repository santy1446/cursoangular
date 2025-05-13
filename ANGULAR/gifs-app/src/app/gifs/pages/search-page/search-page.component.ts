import { Component, inject, OnInit, signal } from '@angular/core';
import { GifListComponent } from "../../components/gif-list/gif-list.component";
import { GifService } from '../../services/gifs.service';
import { Gif } from '../../interfaces/gif.interface';

@Component({
    templateUrl: 'search-page.component.html',
    imports: [GifListComponent]
})

export default class SearchPageComponent {
    private gifService = inject(GifService);

    gifs = signal<Gif[]>([]);

    onSearch(value: string) {
        this.gifService.searchGifs(value).subscribe((response) => {
            this.gifs.set(response);
        })
    }
}