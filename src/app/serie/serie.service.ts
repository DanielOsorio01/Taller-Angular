import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Serie } from './serie'
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SerieService {


constructor(private http: HttpClient) { }

  private API_URL = environment.baseURL +  'series.json';

  getSeries() : Observable<Serie[]> {
      return this.http.get<Serie[]>(this.API_URL);
  }
}
