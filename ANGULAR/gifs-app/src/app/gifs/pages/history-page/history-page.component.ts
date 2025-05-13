import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';

@Component({
    templateUrl: 'history-page.component.html'
})

export default class HistoryPageComponent {
    /* query = inject(ActivatedRoute).params.subscribe(params => {
        console.log(params['query']);

        
    }); */

    query = toSignal(
        inject(ActivatedRoute).params.pipe(
            map(params => params['query'])
        )
    )
}