import { Component } from '@angular/core';
import {Observable} from 'rxjs';
import {Country, State} from './types';
import {CountryService} from './country.service';
import {FormControl} from '@angular/forms';
import {map, withLatestFrom} from 'rxjs/operators';

@Component({
  selector: 'app-solution3',
  templateUrl: './solution4.component.html',
  styleUrls: ['./solution4.component.css']
})
export class Solution4Component {

  countries$: Observable<Country[]>;
  states$: Observable<State[]>;
  state: State;
  countryControl = new FormControl('');

  constructor(private service: CountryService) {
    this.countries$ = this.countryControl.valueChanges.pipe(
      withLatestFrom(this.service.getCountries()),
      map(([userInput, countries]) => countries.filter(c => c.description.toLowerCase().indexOf(userInput.toLowerCase()) !== -1))
    );
  }

  updateStates(country: Country) {
    this.countryControl.setValue(country.description);
    this.states$ = this.service.getStatesFor(country.id);
  }
}
