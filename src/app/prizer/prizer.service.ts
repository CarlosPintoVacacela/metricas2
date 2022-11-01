import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from, Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Prizer } from './prizer';
import { Musician } from '../musician/musician'
import { PrizerMusician } from './prizerMusician'

@Injectable({
  providedIn: 'root'
})
export class PrizerService {
  private apiUrl = environment.baseUrl + 'prizes';
  constructor(private http: HttpClient) { }

  getPrizers(): Observable<Prizer[]> {
    return this.http.get<Prizer[]>(this.apiUrl);
  }

  createPrizer(prizer: Prizer): Observable<Prizer> {
    return this.http.post<Prizer>(`${this.apiUrl}`, prizer)
  }

  assingPrizer(prizes, musician, prizerMusician): Observable<Musician> {
    return this.http.post<Musician>(`${this.apiUrl}/` + prizes.id + `/musicians/` + musician.id, prizerMusician)
  }
}
