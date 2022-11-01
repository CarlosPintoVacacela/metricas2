import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CollectorDetail } from './collectorDetail';
import { environment } from '../../environments/environment';
import { Album } from '../albumes/album';
import { Band } from './band';
import { CollectorAlbum } from './collectorAlbum';
import { CollectorBand } from './collectorBand';

@Injectable({
  providedIn: 'root'
})
export class CollectorService {
  private apiUrl = environment.baseUrl + 'collectors';
  constructor(private http: HttpClient) { }

  getCollectors(): Observable<CollectorDetail[]> {
    return this.http.get<CollectorDetail[]>(this.apiUrl);
  }

  getCollectorDetail(collectorId): Observable<CollectorDetail> {
    return this.http.get<CollectorDetail>(`${this.apiUrl}/${collectorId}`);
  }

  getAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>(`${environment.baseUrl + 'albums'}`);
  }

  createClient(collectorAlbum, collector, idAlbum): Observable<CollectorAlbum> {
    return this.http.post<CollectorAlbum>(`${this.apiUrl}/` + collector.id + `/albums/` + idAlbum.id, collectorAlbum)
  }

  asignarMusico(collector, musician): Observable<CollectorAlbum> {
    return this.http.post<CollectorAlbum>(`${this.apiUrl}/` + collector.id + `/musicians/` + musician.id, '')
  }

  getBands(): Observable<Band[]> {
    return this.http.get<Band[]>(`${environment.baseUrl + 'bands'}`);
  }

  asignarBanda(newBand, collector, band): Observable<CollectorBand> {
    return this.http.post<CollectorBand>(`${this.apiUrl}/` + collector.id + `/bands/` + band.id, newBand)
  }

}
