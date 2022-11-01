import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MusicianModule } from './musician/musician.module'
import { HomeModule } from './home/home.module';
import { CollectorModule } from './collector/collector.module';
import { AlbumesModule } from './albumes/albumes.module';
import { AppRoutingModule } from './app-routing.module';
import { PrizerModule } from './prizer/prizer.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CollectorModule,
    AlbumesModule,
    MusicianModule,
    AppRoutingModule,
    HomeModule,
    PrizerModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
