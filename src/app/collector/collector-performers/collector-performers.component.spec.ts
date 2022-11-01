/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { Musician } from '../../musician/musician';
import { CollectorPerformersComponent } from './collector-performers.component';
import { HttpClientModule } from '@angular/common/http';

describe('CollectorPerformersComponent', () => {
  let component: CollectorPerformersComponent;
  let fixture: ComponentFixture<CollectorPerformersComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [CollectorPerformersComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectorPerformersComponent);
    component = fixture.componentInstance;
    component.collectorPerformers = [new Musician(1, "Carlos Pinto", "test1", "test2", "1993-11-11", [], [])];
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("Should have an h5 tag", () => {
    expect(debug.query(By.css(".h4")).nativeElement.innerText).toBe("Artistas Favoritos");
  });

  it("Should have a div tag", () => {
    const tag = debug.query(By.css("div")).nativeElement.children;

    expect(tag.length).toBe(2);

  });

  it("Should have a a tag", () => {
    const tag = debug.query(By.css("a")).nativeElement.children;
    expect(tag.length).toBe(1);
    expect(tag[0].children.length).toBe(2);

  });

});
