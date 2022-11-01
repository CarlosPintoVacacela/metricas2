/* tslint:disable:no-unused-variable */

import { TestBed, async, inject, getTestBed } from '@angular/core/testing';
import { CollectorService } from './collector.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpTestingController } from '@angular/common/http/testing';
import { CollectorDetail } from './collectorDetail';
import { Album } from '../albumes/album';

import faker from "faker";


describe('Service: Collector', () => {
  let injector: TestBed;
  let service: CollectorService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CollectorService]
    });

    injector = getTestBed();
    service = injector.get(CollectorService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should create service', inject([CollectorService], (service: CollectorService) => {
    expect(service).toBeTruthy();
  }));

  it('getPost() should return 10 records', () => {

    let mockPosts: CollectorDetail[] = [];

    for (let i = 1; i < 11; i++) {
      let post = new CollectorDetail(i, faker.lorem.sentence(), faker.lorem.sentence(), faker.lorem.sentence(), []);
      mockPosts.push(post);
    }

    service.getCollectors().subscribe((collectors) => {

      expect(collectors.length).toBe(10);
    });

    const req = httpMock.expectOne(() => true);
    expect(req.request.method).toBe('GET');
    req.flush(mockPosts);
  });

  it('getPost() should return records which are Collector', () => {

    let mockPosts: CollectorDetail[] = [];

    for (let i = 1; i < 11; i++) {
      let post = new CollectorDetail(i, faker.lorem.sentence(), faker.lorem.sentence(), faker.lorem.sentence(), []);
      mockPosts.push(post);
    }

    service.getCollectors().subscribe((collectors) => {
      for (let i = 0; i < collectors.length; i++) {
        expect(collectors[i] instanceof CollectorDetail).toBeTruthy();
      }
    });

    const req = httpMock.expectOne(() => true);
    expect(req.request.method).toBe('GET');
    req.flush(mockPosts);
  });


  it('getAlbums() should return 10 records', () => {

    let mockPosts: Album[] = [];

    for (let i = 1; i < 11; i++) {
      let post = new Album(i, faker.lorem.word(), faker.lorem.word(), faker.lorem.word(), faker.lorem.word(), faker.lorem.word(), faker.lorem.word(), [{}], [{}]);
      mockPosts.push(post);
    }

    service.getAlbums().subscribe((albums) => {

      expect(albums.length).toBe(10);
    });

    const req = httpMock.expectOne(() => true);
    expect(req.request.method).toBe('GET');
    req.flush(mockPosts);
  });

  it('getAlbums() should return records which are Album', () => {

    let mockPosts: Album[] = [];

    for (let i = 1; i < 11; i++) {
      let post = new Album(i, faker.lorem.word(), faker.lorem.word(), faker.lorem.word(), faker.lorem.word(), faker.lorem.word(), faker.lorem.word(), [{}], [{}]);
      mockPosts.push(post);
    }

    service.getAlbums().subscribe((albums) => {
      for (let i = 0; i < albums.length; i++) {
        expect(albums[i] instanceof Album).toBeTruthy();
      }
    });

    const req = httpMock.expectOne(() => true);
    expect(req.request.method).toBe('GET');
    req.flush(mockPosts);
  });

});
