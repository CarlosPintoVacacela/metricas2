/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { CollectorDetail } from '../collectorDetail';

import { CollectorDetailComponent } from './collectorDetail.component';
import { HttpClientModule } from '@angular/common/http';

describe('CollectorDetailComponent', () => {
  let component: CollectorDetailComponent;
  let fixture: ComponentFixture<CollectorDetailComponent>;
  let debug: DebugElement

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [CollectorDetailComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectorDetailComponent);
    component = fixture.componentInstance;
    component.collectorDetail = new CollectorDetail(1, "Carlos Pinto", "0992626973", "c.pintov@uniandes.edu.co", [], []);
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("Should have an p tag", () => {
    expect(debug.query(By.css("p")).nativeElement.innerText).toBe("Carlos Pinto");
  });

  it("Should have a div tag", () => {
    const tag = debug.query(By.css("div")).nativeElement.children;

    expect(tag.length).toBe(3);
    expect(tag[0].children.length).toBe(0);


  });
});
