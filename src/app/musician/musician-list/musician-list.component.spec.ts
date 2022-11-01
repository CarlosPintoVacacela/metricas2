/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { Musician } from '../musician';

import { MusicianListComponent } from './musician-list.component';
import { HttpClientModule } from '@angular/common/http';

describe('MusicianListComponent', () => {
  let component: MusicianListComponent;
  let fixture: ComponentFixture<MusicianListComponent>;
  let debug: DebugElement

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [MusicianListComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicianListComponent);
    component = fixture.componentInstance;
    component.musicians = [new Musician(1, "Ruben Blades", "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Ruben_Blades_by_Gage_Skidmore.jpg/800px-Ruben_Blades_by_Gage_Skidmore.jpg", 'Test', '1993-01-01', [], [])];
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("Should have an h1 tag", () => {
    expect(debug.query(By.css("h1")).nativeElement.innerText).toBe("Músicos");
  });
});
