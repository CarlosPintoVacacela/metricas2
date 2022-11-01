/* tslint:disable:no-unused-variable */
import { TestBed, inject, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpTestingController } from '@angular/common/http/testing';
import { MusicianService } from './musician.service';
import { Musician } from './musician';
import faker from 'faker';

describe('Service: Musician', () => {
  let injector: TestBed;
  let service: MusicianService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MusicianService]
    });

    injector = getTestBed();
    service = injector.get(MusicianService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should ...', inject([MusicianService], (service: MusicianService) => {
    expect(service).toBeTruthy();
  }));

  it('getMusician() should return 10 records', () => {

    let mockMusicians: Musician[] = [];

    for (let i = 1; i < 11; i++) {
      let musician = new Musician(i, faker.lorem.sentence(), faker.lorem.sentence(), faker.lorem.sentence(), '2000-01-01', [], []);
      mockMusicians.push(musician);
    }

    service.getMusicians().subscribe((Musicians) => {
      expect(Musicians.length).toBe(10);
    });

    const req = httpMock.expectOne(() => true);
    expect(req.request.method).toBe('GET');
    req.flush(mockMusicians);
  });

  it("getMusician() should return 0 records", () => {
    let mockMusicians: Musician[] = [];

    service.getMusicians().subscribe((mockMusicians) => {
      expect(mockMusicians.length).toBe(0);
    });

    const req = httpMock.expectOne(() => true);
    expect(req.request.method).toBe('GET');
    req.flush(mockMusicians);
  });
});
