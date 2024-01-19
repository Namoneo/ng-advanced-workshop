import { Component } from '@angular/core';
import { CountryService } from './country.service';
import { FormControl } from '@angular/forms';
import { Country } from './type';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-exercise1',
  templateUrl: './exercise1.component.html',
  styleUrls: ['./exercise1.component.css']
})
export class Exercise1Component {

  countries$: Observable<Country[]> = this.countryService.getCountries();
  countryDropdown = new FormControl<Country['id']>(null);

  constructor(
    public countryService: CountryService) {
    this.countries$.pipe(
      tap((data: Country[]) => console.log('data', data))
    )
  }

}
