import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// modules material:

import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';


import { AllegatiRoutingModule } from './allegati-routing.module';
import { AllegatiComponent } from './allegati.component';
import { VaCreateComponent } from './components/va-create/va-create.component';
import { VaListComponent } from './components/va-list/va-list.component';



@NgModule({
  declarations: [AllegatiComponent, VaCreateComponent, VaListComponent],
  imports: [
    CommonModule,
    AllegatiRoutingModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule
  ]
})
export class AllegatiModule { }
