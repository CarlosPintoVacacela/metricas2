/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { Prizer } from '../prizer';
import { PrizerCreateComponent } from '../prizer-create/prizer-create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule } from '@angular/forms'


describe('PrizerCreateComponent', () => {
  let component: PrizerCreateComponent;
  let fixture: ComponentFixture<PrizerCreateComponent>;
  let injector: TestBed;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, ReactiveFormsModule,
        FormsModule, ToastrModule.forRoot()],
      declarations: [PrizerCreateComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrizerCreateComponent);
    component = fixture.componentInstance;
    component.prizers = [new Prizer(1, "Nuevo premio", "Descripción de nuevo premio", "Organización de nuevo premio", [])];
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
