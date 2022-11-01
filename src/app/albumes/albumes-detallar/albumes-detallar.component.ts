import { Component, Input, OnInit } from '@angular/core';
import { Album } from '../album';

@Component({
  selector: 'app-albumes-detallar',
  templateUrl: './albumes-detallar.component.html',
  styleUrls: ['./albumes-detallar.component.css']
})
export class AlbumesDetallarComponent implements OnInit {

  @Input() albumDetalle:Album;

  constructor() { }

  ngOnInit() {
    console.log(this.albumDetalle.id);
    console.log(this.albumDetalle.performers);
    console.log(this.albumDetalle.tracks);
  }

}
