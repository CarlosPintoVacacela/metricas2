import { Component, OnInit, Input } from '@angular/core';
import { Album } from '../album';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { AlbumService } from '../album.service';
import { AlbumTrack } from '../albumTrack';

@Component({
  selector: 'app-album-track',
  templateUrl: './album-track.component.html',
  styleUrls: ['./album-track.component.scss']
})
export class AlbumTrackComponent implements OnInit {
  @Input() albumSelected: Album;

  constructor(private formBuilder: FormBuilder,
    private albumService: AlbumService,
    private toastr: ToastrService) { }

  albumTrackForm: FormGroup;


  createAlbum(newAlbum: AlbumTrack) {
    console.log(newAlbum);
    this.albumService.asignarTrack(this.albumSelected, newAlbum).subscribe(client => {
      this.showSuccess(newAlbum);
    });
    this.albumTrackForm.reset();
  }
  showSuccess(c: AlbumTrack) {
    this.toastr.success('Asignado exitosamente!', `Album ${c.name}`, { "progressBar": true, timeOut: 4000 });
  }
  cancelAlbum() {
    this.toastr.error('Cancelado!', '', { "progressBar": true, timeOut: 4000 });
    this.albumTrackForm.reset();
  }
  ngOnInit() {
    this.albumTrackForm = this.formBuilder.group({
      name: ["", Validators.required],
      duration: ["", Validators.required]

    });
  }


}
