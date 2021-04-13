import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VerbaliRoutingModule } from './verbali-routing.module';
import { VerbaliComponent } from './verbali.component';
import { VvCreateComponent } from './components/vv-create/vv-create.component';
import { HttpClientModule } from '@angular/common/http';
import { VerbaliService } from '../../../services/verbali.service';


@NgModule({
  declarations: [VerbaliComponent, VvCreateComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    VerbaliRoutingModule,
  ],
  providers: [VerbaliService]
})
export class VerbaliModule { }
