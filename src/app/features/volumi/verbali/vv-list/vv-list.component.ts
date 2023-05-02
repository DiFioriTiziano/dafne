
import { Component, OnInit } from '@angular/core';
import { VerbaliService } from '../../../../services/verbali.service';
import { StatesService } from '../../../../services/states.service';




@Component({
  selector: 'dafne-vv-list',
  template: `
  <div class="animated fadeIn">
    <dafne-vv-datatable
      *ngIf="dataSource"
      [dataSource]="dataSource"
      [volume]="volume"
      [dataVerbale]="dataVerbale"
      [odg]="odg"
      (emitFromDatatable)="salvaDatiVerba($event)">
    </dafne-vv-datatable>

  </div>
  `,
  styleUrls: ['./vv-list.component.css']
})


export class VvListComponent implements OnInit {

  dataSource:object;
  volume:any;
  dataVerbale:any;
  odg:any;
  datiModificati: any;

  constructor(private srv:VerbaliService, private stateVerbali: StatesService) {

  //this.srv.distinct_verbali('volume_num_registro').subscribe((resp)=> {this.volume = resp});
    this.srv.group_periodi().subscribe((resp)=> {this.volume = resp});
    this.srv.distinct_verbali('verbale_data').subscribe((resp)=> {this.dataVerbale = resp});
    this.srv.distinct_verbali('odg_numero').subscribe((resp)=> {this.odg = resp});

  }

  ngOnInit(): void {

    this.stateVerbali.getVerbaliData();
    this.stateVerbali.getVerbaliDataObservable().subscribe((data) => {
      this.dataSource = {
        data
      }
    });

  }


  salvaDatiVerba(item){

/*     console.log("Dati arrivati al container ",item);
    this.srv.editVerbale(item).subscribe((resp)=> {
    this.datiModificati = resp
    console.log(resp)
    }) */


  this.stateVerbali.updateVerbaliData(item)


   let Index = this.dataSource['data'].findIndex(lista => lista.cont_id === item.cont_id);
                  this.dataSource['data'][Index] = {...this.dataSource['data'][Index],...item}

      console.log("nuovi",this.dataSource['data'])


  }

}

