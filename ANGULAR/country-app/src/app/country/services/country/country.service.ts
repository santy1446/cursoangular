import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { RESTCountryResponse } from '../../interfaces/rest-countries.interfaces';
import { catchError, map, Observable, throwError } from 'rxjs';
import { CountryMapper } from '../../mapper/country.mapper';
import { Country } from '../../interfaces/country.interface';

const API_URL = 'https://restcountries.com/v3.1';

@Injectable({providedIn: 'root'})
export class CountryService {

    private http = inject(HttpClient);

    constructor() { }

    searchByCapital( query: string): Observable<Country[]> {
        const lowerCaseQuery = query.toLowerCase();
        return this.http.get<RESTCountryResponse[]>(`${API_URL}/capital/${lowerCaseQuery}`)
        .pipe(
            map(items => CountryMapper.mapToCountries(items)),
            catchError(error => {
                console.error('Error fetching countries by capital:', error);
                return throwError(() => new Error('Failed to fetch countries by capital'));
            })
        );
    }
    
}