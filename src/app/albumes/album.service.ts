import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Album } from './album';
import { environment } from '../../environments/environment';
import { AlbumCreate } from './albumCreate';
import { AlbumTrack } from './albumTrack';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  private apiUrl: string = environment.baseUrl + 'albums';
  constructor(private http: HttpClient) { }

  getAlbumes(): Observable<Album[]> {
    return this.http.get<Album[]>(this.apiUrl);
  }

  createAlbum(newAlbum): Observable<AlbumCreate> {

    return this.http.post<AlbumCreate>(this.apiUrl, newAlbum);
  }

  asignarTrack(newAlbum, track): Observable<AlbumTrack> {

    return this.http.post<AlbumTrack>(`${this.apiUrl}/` + newAlbum.id + `/tracks`, track);
  }

}


