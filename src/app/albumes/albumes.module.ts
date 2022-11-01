import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumesListarComponent } from './albumes-listar/albumes-listar.component';
import { AlbumesDetallarComponent } from './albumes-detallar/albumes-detallar.component';
import { AlbumesRoutingModule } from './albumes-routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlbumesCrearComponent } from './albumes-crear/albumes-crear.component';
import { AlbumTrackComponent } from './album-track/album-track.component'

@NgModule({
  imports: [
    CommonModule,
    AlbumesRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [AlbumesListarComponent, AlbumesDetallarComponent, AlbumesCrearComponent, AlbumTrackComponent],
  exports: [AlbumesListarComponent, FormsModule, AlbumesCrearComponent]
})
export class AlbumesModule { }
