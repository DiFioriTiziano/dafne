import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VolumeCreateComponent } from './components/volume-create/volume-create.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Volumi'
    },

    children: [
      {
        path: '',
        redirectTo: 'inserimento'
      },
      {
        path: 'inserimento',
        component: VolumeCreateComponent,
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
export class VolumiRoutingModule { }
