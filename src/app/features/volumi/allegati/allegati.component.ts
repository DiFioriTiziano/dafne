import { Component, OnInit } from '@angular/core';
import { AllegatiService } from '../../../services/allegati.service';

@Component({
  selector: 'dafne-allegati',
  template: `
    <dafne-va-list
    *ngIf="dataSource"
    [dataSource]="dataSource"
    >

    </dafne-va-list>
  `,
  styleUrls: ['./allegati.component.css']
})
export class AllegatiComponent implements OnInit {

  dataSource:any
  x:any


  constructor( private srv: AllegatiService) {
      this.srv.allegati()
  }



  ngOnInit(): void {
     this.srv.subjectAllegati$.subscribe( (data)=> {
      this.dataSource = data
    })
  }

}
