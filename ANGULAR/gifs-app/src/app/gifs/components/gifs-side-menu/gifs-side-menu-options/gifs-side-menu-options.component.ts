import { Component, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { GifService } from '../../../services/gifs.service';

interface ManuOption {
    lable: string;
    subLabel: string;
    icon: string,
    router: string
}

@Component({
    selector: 'gifs-side-menu-options',
    templateUrl: 'gifs-side-menu-options.component.html',
    imports: [
        RouterLink,
        RouterLinkActive
    ]
})
export class GifsSideMenuOptionsComponent {

    gifService = inject(GifService);

    menuOptions = signal<ManuOption[]>([
        {
            icon: 'fa-solid fa-chart-line',
            lable: 'Trending',
            subLabel: 'Gifs populares',
            router: '/dashboard/trending'
        },
        {
            icon: 'fa-solid fa-magnifying-glass',
            lable: 'Buscador',
            subLabel: 'Buscar gifs',
            router: '/dashboard/search'
        }
        
    ]);

}