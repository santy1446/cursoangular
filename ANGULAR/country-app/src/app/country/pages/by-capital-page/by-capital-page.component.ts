import { Component, inject, signal } from '@angular/core';
import { SearchInputComponent } from '../../components/search-input/search-input.component';
import { CountryListComponent } from '../../components/country-list/country-list.component';
import { CountryService } from '../../services/country/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
    templateUrl: 'by-capital-page.component.html',
    imports:  [
        SearchInputComponent,
        CountryListComponent
    ]
})

export class ByCapitalPageComponent {
    countryService = inject(CountryService);

    isLoading = signal<boolean>(false);
    isError = signal<string|null>(null);
    countries = signal<Country[]>([]);

    onSearch( query: string){
        if (this.isLoading()) return; 

        this.isLoading.set(true);
        this.isError.set(null);
        this.countryService.searchByCapital(query).subscribe({
            next: (response) => {
                this.isLoading.set(false);
                this.countries.set(response);
            },
            error: (err) => {
                this.isLoading.set(false);
                this.countries.set([]);
                this.isError.set(err);
            },
        })
    }
}