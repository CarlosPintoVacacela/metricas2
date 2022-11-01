import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { AlbumCreate } from '../albumCreate';
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-albumes-crear',
  templateUrl: './albumes-crear.component.html',
  styleUrls: ['./albumes-crear.component.scss']
})
export class AlbumesCrearComponent implements OnInit {

  albumForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private albumService: AlbumService,
    private toastr: ToastrService) { }

  createAlbum(newAlbum: AlbumCreate) {
    this.albumService.createAlbum(newAlbum).subscribe(client => {
      this.showSuccess(newAlbum);
    });
    this.albumForm.reset();
  }
  showSuccess(c: AlbumCreate) {
    this.toastr.success('Asignado exitosamente!', `Album ${c.name}`, { "progressBar": true, timeOut: 4000 });
  }
  cancelAlbum() {
    this.toastr.error('Cancelado!', '', { "progressBar": true, timeOut: 4000 });
    this.albumForm.reset();
  }
  ngOnInit() {
    this.albumForm = this.formBuilder.group({
      name: ["", Validators.required],
      cover: ["", Validators.required],
      releaseDate: ["", Validators.required],
      description: ["", Validators.required],
      genre: ["", Validators.required],
      recordLabel: ["", Validators.required]
    });
  }

}
