/* tslint:disable:no-unused-variable */

import { TestBed, async, inject, getTestBed } from '@angular/core/testing';
import { AlbumService } from './album.service';
import { HttpTestingController, HttpClientTestingModule } from "@angular/common/http/testing";
import { Album } from "./album";
import { environment } from "../../environments/environment";
import { Observable } from 'rxjs';

describe('Service: Album', () => {

  let injector: TestBed;
  let service: AlbumService;
  let httpMock: HttpTestingController;
  let apiUrl = environment.baseUrl + "albums";


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AlbumService]
    });
    injector = getTestBed();
    service = injector.get(AlbumService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should return valid object', inject([AlbumService], (service: AlbumService) => {
    expect(service).toBeTruthy();
  }));

  it("getAlbumes() should return 10 records", () => {
    let mockAlbumes: Album[] = [];

    for (let i = 1; i < 11; i++) {
      let album = new Album(i, 'a', 'a', 'a', 'a', 'a', 'a', [{}], [{}]);

      mockAlbumes.push(album);
    }

    service.getAlbumes().subscribe((mockAlbumes) => {
      expect(mockAlbumes.length).toBe(10);
    });

    const req = httpMock.expectOne(apiUrl);
    expect(req.request.method).toBe("GET");
    req.flush(mockAlbumes);
  });

  it("getAlbumes() should return 0 records", () => {
    let mockAlbumes: Album[] = [];

    service.getAlbumes().subscribe((mockAlbumes) => {
      expect(mockAlbumes.length).toBe(0);
    });

    const req = httpMock.expectOne(apiUrl);
    expect(req.request.method).toBe("GET");
    req.flush(mockAlbumes);
  });

  it("getAlbumes() should return id's of type number", () => {
    let mockAlbumes:Observable<Album[]> = service.getAlbumes();

    service.getAlbumes().subscribe((mockAlbumes) => {
      for (let i = 0; i < mockAlbumes.length; i++) {
        expect(typeof mockAlbumes[i].id === (typeof 3)).toBeTruthy();
      }

    });

    const req = httpMock.expectOne(apiUrl);
    expect(req.request.method).toBe("GET");
    req.flush(mockAlbumes);
  });



});
