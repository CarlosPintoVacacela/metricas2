import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { TopAlbumesComponent } from './top-albumes/top-albumes.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
  ],
  declarations: [HomeComponent, TopAlbumesComponent],
  exports: [TopAlbumesComponent]

})
export class HomeModule { }
