import { ScrollStateService } from './../../../shared/services/scroll-state.service';
import { AfterViewInit, Component, ElementRef, inject, OnInit, signal, viewChild } from '@angular/core';
import { GifService } from '../../services/gifs.service';

@Component({
    templateUrl: 'trending-page.component.html',
})

export default class TrendingPageComponent implements AfterViewInit {
    gifService = inject(GifService);
    scrollService = inject(ScrollStateService);

    scrollDivRef = viewChild<ElementRef<HTMLDivElement>>('groupDiv');

    ngAfterViewInit(): void {
        const scrollDiv = this.scrollDivRef()?.nativeElement;
        if (!scrollDiv) return;

        scrollDiv.scrollTop = this.scrollService.trendingScrollState(); //Establece la posición del scroll al valor guardado en el servicio
    }

    onScroll(event: Event) {
        const scrollDiv = this.scrollDivRef()?.nativeElement;
        if (!scrollDiv) return;
        
        const scrollTop = scrollDiv.scrollTop; //Equivalencia en pixeles de la distancia que se ha desplazado el scroll
        const clientHeight = scrollDiv.clientHeight; //Equivalencia en pixeles de lo que puede ver el usuario
        const scrollHeight = scrollDiv.scrollHeight; //Equivalencia en pixeles de la altura total del elemnto que se le ha aplicado el scroll
        //console.log({total: scrollTop + clientHeight, scrollHeight});

        const isABottom = scrollTop + clientHeight + 300 >= scrollHeight;
        this.scrollService.trendingScrollState.set(scrollTop);
        
        if (isABottom) {
            this.gifService.loadTrendingGifs();
        }
    }
}