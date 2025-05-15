import { Component, input, OnInit, output } from '@angular/core';

@Component({
    selector: 'country-search-input',
    templateUrl: 'search-input.component.html'
})

export class SearchInputComponent {
    placeholder = input<string>('');
    searchValue = output<string>();
}