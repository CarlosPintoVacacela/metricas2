/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CollectorAlbumComponent } from './collector-album.component';
import { HttpClientModule } from '@angular/common/http';
import { CollectorDetail } from '../collectorDetail';
import { FormsModule } from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';

describe('CollectorAlbumComponent', () => {
  let component: CollectorAlbumComponent;
  let fixture: ComponentFixture<CollectorAlbumComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, ReactiveFormsModule,
        FormsModule, ToastrModule.forRoot()],
      declarations: [CollectorAlbumComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectorAlbumComponent);
    component = fixture.componentInstance;
    component.collector = new CollectorDetail(1, "Carlos Pinto", "0992626973", "c.pintov@uniandes.edu.co", [], []);
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
