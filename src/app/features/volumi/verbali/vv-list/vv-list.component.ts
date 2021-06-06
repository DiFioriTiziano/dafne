import { Component, OnInit } from '@angular/core';
import { VerbaliService } from '../../../../services/verbali.service';




@Component({
  selector: 'dafne-vv-list',
  template: `
  <div class="animated fadeIn">
    <dafne-vv-datatable *ngIf="dataSource" [dataSource]="dataSource" (emitFromDatatable)="datiVerba($event)"></dafne-vv-datatable>

  </div>
  `,
  styleUrls: ['./vv-list.component.css']
})


export class VvListComponent implements OnInit {

  dataSource:object;

  constructor(private srv:VerbaliService) {}

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

