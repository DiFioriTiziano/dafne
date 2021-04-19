import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VolumiRoutingModule } from './volumi-routing.module';
import { VolumiComponent } from './volumi.component';
import { VolumeCreateComponent } from './components/volume-create/volume-create.component';





@NgModule({
  declarations: [VolumiComponent, VolumeCreateComponent],
  imports: [
    CommonModule,
    VolumiRoutingModule
  ]
})
export class VolumiModule { }
