import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CollectorComponent } from './collector.component';
import { CollectorListComponent } from './collector-list/collector-list.component';
import { CollectorDetailComponent } from './collectorDetail/collectorDetail.component';
import { CollectorPerformersComponent } from './collector-performers/collector-performers.component';
import { CollectorRoutingModule } from './collector-routing.module';
import { CollectorAlbumComponent } from './collector-album/collector-album.component';
import { CollectorPerformerComponent } from './collector-performer/collector-performer.component';
import { CollectorBandComponent } from './collector-band/collector-band.component';
import { CollectorMusicianComponent } from './collector-musician/collector-musician.component';

@NgModule({
  imports: [
    CommonModule,
    CollectorRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [CollectorComponent,
    CollectorListComponent,
    CollectorDetailComponent,
    CollectorPerformersComponent,
    CollectorAlbumComponent,
    CollectorPerformerComponent,
    CollectorBandComponent,
    CollectorMusicianComponent
  ],
  exports: [CollectorListComponent,
    CollectorDetailComponent,
    CollectorPerformersComponent,
    CollectorAlbumComponent,
    FormsModule,
    CollectorPerformerComponent,
    CollectorBandComponent,
    CollectorMusicianComponent
  ]
})
export class CollectorModule { }
