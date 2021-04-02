import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dafne-volumi',
  template: `

  <dafne-volume-create></dafne-volume-create>

  `,
  styleUrls: ['./volumi.component.css']
})
export class VolumiComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
