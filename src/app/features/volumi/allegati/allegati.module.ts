import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllegatiRoutingModule } from './allegati-routing.module';
import { AllegatiComponent } from './allegati.component';
import { VaCreateComponent } from './components/va-create/va-create.component';


@NgModule({
  declarations: [AllegatiComponent, VaCreateComponent],
  imports: [
    CommonModule,
    AllegatiRoutingModule
  ]
})
export class AllegatiModule { }
