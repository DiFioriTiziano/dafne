import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContrattiRoutingModule } from './contratti-routing.module';
import { ContrattiContainerComponent } from './contratti-container.component';
import { ElencoContrattiComponent } from './components/elenco-contratti/elenco-contratti.component';


@NgModule({
  declarations: [ContrattiContainerComponent, ElencoContrattiComponent],
  imports: [
    CommonModule,
    ContrattiRoutingModule
  ]
})
export class ContrattiModule { }
