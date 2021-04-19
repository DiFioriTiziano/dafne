import { Component, OnInit } from '@angular/core';
import { VerbaliService } from '../../../services/verbali.service';

@Component({
  selector: 'dafne-verbali',
  template: `
    <dafne-vv-list></dafne-vv-list>

  `,
  styleUrls: ['./verbali.component.css']
})
export class VerbaliComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

}
