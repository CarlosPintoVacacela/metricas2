import { Component, OnInit } from '@angular/core';
import { Album } from '../album';
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-albumes-listar',
  templateUrl: './albumes-listar.component.html',
  styleUrls: ['./albumes-listar.component.css']
})
export class AlbumesListarComponent implements OnInit {

  constructor(private albumService:AlbumService) { }
  albumes:Array<Album>;

  selectedAlbum:Album;
  selected:boolean = false;

  onSelected(al:Album):void{
    this.selected = true;
    this.selectedAlbum = al;
  }

  getAlbumes():void{
    this.albumService.getAlbumes().subscribe(albumes => {
      this.albumes = albumes;
    })
  }

  ngOnInit() {
    this.getAlbumes();
  }

}
