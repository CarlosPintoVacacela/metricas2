import { Component, OnInit } from '@angular/core';
import { Musician } from '../musician';
import { MusicianService } from '../musician.service';

@Component({
  selector: 'app-musician-list',
  templateUrl: './musician-list.component.html',
  styleUrls: ['./musician-list.component.css']
})
export class MusicianListComponent implements OnInit {

  constructor(private musicianService: MusicianService) { }
  musicians: Array<Musician>;
  selectedMusician: Musician;
  selected:boolean = false;

  onSelected(m: Musician): void {
    this.selected = true;
    this.selectedMusician = m;
  }

  getMusicians(): void {
    this.musicianService.getMusicians()
      .subscribe(musicians => {
        this.musicians = musicians;
      })
  }

  ngOnInit() {
    this.getMusicians();
  }
}
