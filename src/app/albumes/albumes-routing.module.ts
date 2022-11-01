import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlbumesListarComponent } from './albumes-listar/albumes-listar.component';
import { AlbumesDetallarComponent } from './albumes-detallar/albumes-detallar.component';


const routes: Routes = [{
  path: 'albumes',
  children: [
    {
      path: 'list',
      component: AlbumesListarComponent
    },
    {
      path: ':id',
      component: AlbumesDetallarComponent
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlbumesRoutingModule { }
