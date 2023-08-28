import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContrattiContainerComponent } from './contratti-container.component';


const routes: Routes = [

  {
    path: '',
    data: {
      title: 'Contratti'
    },

    children: [
      {
        path: '',
        redirectTo: 'elenco'
      },
      {
        path: 'elenco',
        component: ContrattiContainerComponent,
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
export class ContrattiRoutingModule { }
