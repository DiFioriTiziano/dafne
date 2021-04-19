import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VerbaliComponent } from './verbali.component';


const routes: Routes = [

  {
    path: '',
    data: {
      title: 'Verbali'
    },

    children: [
      {
        path: '',
        redirectTo: 'elenco'
      },
      {
        path: 'elenco',
        component: VerbaliComponent,
        data: {
          title: 'Elenco'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VerbaliRoutingModule { }
