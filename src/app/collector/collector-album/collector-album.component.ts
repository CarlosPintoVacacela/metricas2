import { Component, OnInit, Input } from '@angular/core';
import { CollectorService } from '../collector.service';
import { Album } from '../../albumes/album';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { CollectorAlbum } from '../collectorAlbum';
import { CollectorDetail } from '../collectorDetail';
import { ToastrService } from "ngx-toastr";


@Component({
  selector: 'app-collector-album',
  templateUrl: './collector-album.component.html',
  styleUrls: ['./collector-album.component.scss']
})
export class CollectorAlbumComponent implements OnInit {

  @Input() collector: CollectorDetail;

  clientForm: FormGroup;
  albums: Album[];
  clientes: CollectorAlbum[];
  idAlbum: Album;

  constructor(
    private formBuilder: FormBuilder,
    private collectorService: CollectorService,
    private toastr: ToastrService
  ) {

  }

  getAlbumsList() {
    this.collectorService.getAlbums().subscribe(cs => {
      this.albums = cs;
    });
  }


  createClient(newClient: CollectorAlbum) {

    this.collectorService.createClient(newClient, this.collector, this.idAlbum).subscribe(client => {

      this.showSuccess(this.idAlbum);
    });

    this.clientForm.reset();

  }

  showSuccess(c: Album) {
    this.toastr.success('Asignado exitosamente!', `Album ${c.name}`, { "progressBar": true, timeOut: 4000 });
  }

  cancelAlbum() {
    this.toastr.error('Cancelado!', '', { "progressBar": true, timeOut: 4000 });
    this.clientForm.reset();
  }

  ngOnInit() {
    this.getAlbumsList();
    this.clientForm = this.formBuilder.group({
      price: ["", Validators.required],
      status: ["", Validators.required]

    });
  }
}
