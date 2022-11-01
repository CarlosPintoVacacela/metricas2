import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrizerCreateComponent } from './prizer-create/prizer-create.component';


const routes: Routes = [{
  path: 'prizers',
  children: [
    {
      path: 'create',
      component: PrizerCreateComponent
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrizerRoutingModule { }
