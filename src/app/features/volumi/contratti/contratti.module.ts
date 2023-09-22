import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContrattiRoutingModule } from './contratti-routing.module';
import { ContrattiContainerComponent } from './contratti-container.component';
import { ElencoContrattiComponent } from './components/elenco-contratti/elenco-contratti.component';

//for datatable material
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule } from '@angular/material/button';
import {MatIconModule } from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
//import { EditModalComponent } from './components/edit-modal/edit-modal.component';


@NgModule({
  declarations: [ContrattiContainerComponent, ElencoContrattiComponent],
  imports: [
    CommonModule,
    ContrattiRoutingModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule
  ]
})
export class ContrattiModule { }
