import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dafne-verbali',
  template: `
    <dafne-vv-create></dafne-vv-create>
  `,
  styleUrls: ['./verbali.component.css']
})
export class VerbaliComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
