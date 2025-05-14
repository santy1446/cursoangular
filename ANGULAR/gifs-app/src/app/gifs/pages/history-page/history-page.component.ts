import { Component, computed, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { GifService } from '../../services/gifs.service';
import { GifListComponent } from "../../components/gif-list/gif-list.component";
import { Gif } from '../../interfaces/gif.interface';

@Component({
    templateUrl: 'history-page.component.html',
    imports: [GifListComponent]
})

export default class HistoryPageComponent {
    /* query = inject(ActivatedRoute).params.subscribe(params => {
        console.log(params['query']);

        
    }); */

    gifService = inject(GifService);

    /**
     * El método toSignal convierte un observable en una señal.
     * Esto es útil para poder usar el observable
     */
    query = toSignal(
        inject(ActivatedRoute).params.pipe(
            map(params => params['query'])
        )
    );

    gifsByKey = computed<Gif[]>(() => this.gifService.getHistoryGifs(this.query()));


}