/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CollectorBandComponent } from './collector-band.component';
import { CollectorDetail } from '../collectorDetail';
import { FormsModule } from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';

describe('CollectorBandComponent', () => {
  let component: CollectorBandComponent;
  let fixture: ComponentFixture<CollectorBandComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, ReactiveFormsModule,
        FormsModule, ToastrModule.forRoot(),],
      declarations: [CollectorBandComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectorBandComponent);
    component = fixture.componentInstance;
    component.collector = new CollectorDetail(1, "Carlos Pinto", "0992626973", "c.pintov@uniandes.edu.co", [], []);
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
