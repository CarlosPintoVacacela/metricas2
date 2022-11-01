/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { TopAlbumesComponent } from './top-albumes.component';

describe('TopAlbumesComponent', () => {
  let component: TopAlbumesComponent;
  let fixture: ComponentFixture<TopAlbumesComponent>;
  let debug: DebugElement

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [TopAlbumesComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopAlbumesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("Should have an h2 tag", () => {
    expect(debug.query(By.css("h2")).nativeElement.innerText).toBe("TOP 5 Albumes");
  });
});
