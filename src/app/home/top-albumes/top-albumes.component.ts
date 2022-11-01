import { Component, OnInit } from '@angular/core';
import { Album } from '../../albumes/album';
import { AlbumService } from '../../albumes/album.service';
@Component({
  selector: 'app-top-albumes',
  templateUrl: './top-albumes.component.html',
  styleUrls: ['./top-albumes.component.scss']
})
export class TopAlbumesComponent implements OnInit {

  constructor(private albumService: AlbumService) { }
  albumes: Array<Album>;
  ngOnInit() {
    this.getAlbumes();
  }
  getAlbumes(): void {
    this.albumService.getAlbumes().subscribe(albumes => {
      var leng = 0;
      var alb = [];
      if (albumes.length < 5) {
        leng = albumes.length;
      }
      else {
        leng = 5;
      }
      for (let i = 0; i < leng; i++) {
        alb.push(albumes[i]);
      }
      this.albumes = alb;
    })
  }

}
