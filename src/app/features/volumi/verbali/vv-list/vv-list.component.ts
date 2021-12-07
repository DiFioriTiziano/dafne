import { Component, OnInit } from '@angular/core';
import { VerbaliService } from '../../../../services/verbali.service';




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
      (emitFromDatatable)="datiVerba($event)">
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

  constructor(private srv:VerbaliService) {

    this.srv.distinct_verbali('volume_num_registro').subscribe((resp)=> {this.volume = resp});
    this.srv.distinct_verbali('verbale_data').subscribe((resp)=> {this.dataVerbale = resp});
    this.srv.distinct_verbali('odg_numero').subscribe((resp)=> {this.odg = resp});

  }

  ngOnInit(): void {
    this.srv.getVerbali().subscribe((resp)=> {
          this.dataSource = {
          data : resp
        }
    });

  }


  datiVerba($event){
    console.log("Dati arrivati al container ",$event);
  }

}

