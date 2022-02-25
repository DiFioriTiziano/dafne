import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { VerbaliRoutingModule } from './verbali-routing.module';
import { VerbaliComponent } from './verbali.component';
import { VvListComponent } from './vv-list/vv-list.component';
import { HttpClientModule } from '@angular/common/http';
import { VerbaliService } from '../../../services/verbali.service';
import { VvDatatableComponent } from './components/vv-datatable/vv-datatable.component';
import { CollapseModule } from 'ngx-bootstrap/collapse';

import { PaginationModule, PaginationConfig } from 'ngx-bootstrap/pagination';
import { VvAddverbaleModalComponent } from './components/vv-addverbale-modal/vv-addverbale-modal.component';

import { ModalModule } from 'ngx-bootstrap/modal';

// for dtata tabler
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';


@NgModule({
  declarations: [VerbaliComponent, VvListComponent, VvDatatableComponent, VvAddverbaleModalComponent],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    VerbaliRoutingModule,
    CollapseModule.forRoot(),
    ModalModule.forRoot(),
    PaginationModule.forRoot(),
    MatTableModule,
    MatSortModule,
    MatPaginatorModule

  ],
  providers: [VerbaliService,
    PaginationConfig
  ]
})
export class VerbaliModule { }
