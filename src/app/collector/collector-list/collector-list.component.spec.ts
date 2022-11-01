/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { CollectorDetail } from '../collectorDetail';

import { CollectorListComponent } from './collector-list.component';
import { HttpClientModule } from '@angular/common/http';

describe('CollectorListComponent', () => {
  let component: CollectorListComponent;
  let fixture: ComponentFixture<CollectorListComponent>;
  let debug: DebugElement

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [CollectorListComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectorListComponent);
    component = fixture.componentInstance;
    component.collectors = [new CollectorDetail(1, "Carlos Pinto", "0992626973", "c.pintov@uniandes.edu.co", [])];
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("Should have an h1 tag", () => {
    expect(debug.query(By.css("h1")).nativeElement.innerText).toBe("Lista de Coleccionistas");
  });

  it("Should have a div tag", () => {
    const tag = debug.query(By.css("tbody")).nativeElement.children;

    expect(tag.length).toBe(1);
    expect(tag[0].children.length).toBe(3);
    expect(tag[0].children[1].innerText).toContain("Carlos Pinto");
    expect(tag[0].children[2].innerText).toContain("0");
  });

});
