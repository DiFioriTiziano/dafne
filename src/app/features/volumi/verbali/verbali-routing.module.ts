import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VerbaliComponent } from './verbali.component';
import { VvListComponent } from './vv-list/vv-list.component';


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
        component: VvListComponent,
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
