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
        redirectTo: 'inserimento'
      },
      {
        path: 'inserimento',
        component: VerbaliComponent,
        data: {
          title: 'Inserimento'
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
