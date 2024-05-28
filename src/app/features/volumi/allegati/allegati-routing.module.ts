import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllegatiComponent } from './allegati.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Allegati'
    },

    children: [
      {
        path: '',
        redirectTo: 'elenco'
      },
      {
        path: 'elenco',
        component: AllegatiComponent,
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
export class AllegatiRoutingModule { }
