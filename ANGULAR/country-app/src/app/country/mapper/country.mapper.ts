import { Country } from "../interfaces/country.interface";
import { RESTCountryResponse } from "../interfaces/rest-countries.interfaces";

export class CountryMapper {
    static mapToCountry(data: RESTCountryResponse): Country {
        return {
            cca2: data.cca2,
            flag: data.flag,
            flagSvg: data.flags.svg,
            name: data.translations['spa'].official,
            capital: data.capital.join(', '),
            population: data.population
        };
    }

    static mapToCountries(data: RESTCountryResponse[]): Country[] {
        return data.map(this.mapToCountry);
    }
}