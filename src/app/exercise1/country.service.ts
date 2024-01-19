import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country } from './type';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable ({
  providedIn: 'root',
})

export class CountryService {

  private countries$: Observable<Country[]>;

  constructor(private http: HttpClient) {
    this.countries$ = http.get<Country[]>('http://localhost:3000/countries');
  }

  getCountries(): Observable<Country[]> {
    return this.countries$;
  }

}
