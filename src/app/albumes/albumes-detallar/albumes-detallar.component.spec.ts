/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { Album } from '../../albumes/album';
import { AlbumesDetallarComponent } from './albumes-detallar.component';
import { HttpClientModule } from '@angular/common/http';

describe('AlbumesDetallarComponent', () => {
  let component: AlbumesDetallarComponent;
  let fixture: ComponentFixture<AlbumesDetallarComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [AlbumesDetallarComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumesDetallarComponent);
    component = fixture.componentInstance;
    component.albumDetalle = new Album(1, 'a', 'a', 'a', 'a', 'a', 'a', [{}], [{}]);
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
