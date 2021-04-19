import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { VerbaliService } from '../../../../services/verbali.service';




@Component({
  selector: 'dafne-vv-list',
  template: `
  <div class="animated fadeIn">
    <dafne-vv-datatable *ngIf="dataSource" [dataSource]="dataSource"></dafne-vv-datatable>
  </div>
  `,
  styleUrls: ['./vv-list.component.css']
})


export class VvListComponent implements OnInit {

  //verbali$: Observable<any[]>;
  data: any;

  dataSource:object;



  constructor(private srv:VerbaliService) {}

  ngOnInit(): void {

   // this.verbali$ = this.srv.getVerbali();

    this.srv.getVerbali().subscribe((resp)=> { this.data = resp

        this.dataSource = {
          data : this.data
        }

    });








  }




}

