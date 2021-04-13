import { Component, OnInit } from '@angular/core';
import { VerbaliService } from '../../../services/verbali.service';

@Component({
  selector: 'dafne-verbali',
  template: `
    <dafne-vv-create></dafne-vv-create>

  `,
  styleUrls: ['./verbali.component.css']
})
export class VerbaliComponent implements OnInit {

  dataVerbali : any;

  constructor(private srv:VerbaliService) { }

  ngOnInit(): void {
    this.srv.getVerbali().subscribe( (resp) => console.log(resp));
  }

}
