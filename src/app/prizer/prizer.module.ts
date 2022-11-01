import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { PrizerCreateComponent } from './prizer-create/prizer-create.component';
import { PrizerMusicianComponent } from './prizer-musician/prizer-musician.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule, ReactiveFormsModule, FormsModule
  ],
  declarations: [PrizerCreateComponent, PrizerMusicianComponent],
  exports: [PrizerCreateComponent, PrizerMusicianComponent],
  providers: []
})
export class PrizerModule { }
