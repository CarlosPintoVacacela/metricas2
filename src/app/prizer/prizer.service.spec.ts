/* tslint:disable:no-unused-variable */

import { TestBed, async, inject, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpTestingController } from '@angular/common/http/testing';

import { PrizerService } from './prizer.service';
import { Prizer } from './prizer';
import faker from "faker";

describe('Service: Prizer', () => {

  let injector: TestBed;
  let service: PrizerService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PrizerService]
    });

    injector = getTestBed();
    service = injector.get(PrizerService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should create service', inject([PrizerService], (service: PrizerService) => {
    expect(service).toBeTruthy();
  }));
});
