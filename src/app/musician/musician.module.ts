import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MusicianListComponent } from './musician-list/musician-list.component';
import { MusicianDetailComponent} from './musician-detail/musician-detail.component'
import { MusicianRoutingModule } from './musician-routing.module';
import { PrizerModule } from '../prizer/prizer.module';
import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  imports: [
    CommonModule,
    MusicianRoutingModule,
    PrizerModule,
    NgbModule
  ],
  declarations: [MusicianListComponent, MusicianDetailComponent],
  exports: [MusicianListComponent]
})
export class MusicianModule { }
