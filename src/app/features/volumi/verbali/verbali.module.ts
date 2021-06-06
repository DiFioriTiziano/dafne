import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { VerbaliRoutingModule } from './verbali-routing.module';
import { VerbaliComponent } from './verbali.component';
import { VvListComponent } from './vv-list/vv-list.component';
import { HttpClientModule } from '@angular/common/http';
import { VerbaliService } from '../../../services/verbali.service';
import { VvDatatableComponent } from './components/vv-datatable/vv-datatable.component';


import { PaginationModule } from 'ngx-bootstrap/pagination';
import { VvAddverbaleModalComponent } from './components/vv-addverbale-modal/vv-addverbale-modal.component';

import { ModalModule } from 'ngx-bootstrap/modal';


@NgModule({
  declarations: [VerbaliComponent, VvListComponent, VvDatatableComponent, VvAddverbaleModalComponent],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    VerbaliRoutingModule,
    ModalModule.forRoot(),
    PaginationModule.forRoot()

  ],
  providers: [VerbaliService]
})
export class VerbaliModule { }
