import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VerbaliRoutingModule } from './verbali-routing.module';
import { VerbaliComponent } from './verbali.component';
import { VvCreateComponent } from './components/vv-create/vv-create.component';


@NgModule({
  declarations: [VerbaliComponent, VvCreateComponent],
  imports: [
    CommonModule,
    VerbaliRoutingModule
  ]
})
export class VerbaliModule { }
