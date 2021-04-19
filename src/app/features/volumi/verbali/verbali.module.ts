import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VerbaliRoutingModule } from './verbali-routing.module';
import { VerbaliComponent } from './verbali.component';
import { VvListComponent } from './vv-list/vv-list.component';
import { HttpClientModule } from '@angular/common/http';
import { VerbaliService } from '../../../services/verbali.service';
import { VvDatatableComponent } from './components/vv-datatable/vv-datatable.component';
import { ReactiveFormsModule } from '@angular/forms';

import { PaginationModule } from 'ngx-bootstrap/pagination';


@NgModule({
  declarations: [VerbaliComponent, VvListComponent, VvDatatableComponent],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    VerbaliRoutingModule,
    PaginationModule.forRoot()

  ],
  providers: [VerbaliService]
})
export class VerbaliModule { }
