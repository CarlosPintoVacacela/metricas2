/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { Musician } from '../../musician/musician';
import { MusicianDetailComponent } from './musician-detail.component';
import { HttpClientModule } from '@angular/common/http';
import faker from 'faker';

describe('MusicianDetailComponent', () => {
  let component: MusicianDetailComponent;
  let fixture: ComponentFixture<MusicianDetailComponent>;
  let debug: DebugElement

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [MusicianDetailComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicianDetailComponent);
    component = fixture.componentInstance;
    component.musicianDetail = new Musician(1, faker.lorem.sentence(), faker.lorem.sentence(), faker.lorem.sentence(), '2000-01-01', [], []);
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create m', () => {
    expect(component).toBeTruthy();
  });
});
