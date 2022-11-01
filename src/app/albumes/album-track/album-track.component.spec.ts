/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AlbumTrackComponent } from './album-track.component';
import { FormsModule } from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { Album } from '../album';

describe('AlbumTrackComponent', () => {
  let component: AlbumTrackComponent;
  let fixture: ComponentFixture<AlbumTrackComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, ReactiveFormsModule,
        FormsModule, ToastrModule.forRoot()],
      declarations: [AlbumTrackComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumTrackComponent);
    component = fixture.componentInstance;
    component.albumSelected = new Album(1, 'a', 'a', 'a', 'a', 'a', 'a', [{}], [{}]);
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
