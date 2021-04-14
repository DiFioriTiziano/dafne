import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dafne-vv-create',
  template: `

    <div class="col-sm">
      <div class="card card-accent-info">
        <div class="card-header">
          Elenco Verbali
        </div>
        <div class="card-body">
        <form action="" method="post" class="form-horizontal">

            <div class="form-group row">
              <label class="col-sm-5 col-form-label" for="input-normal">Normal Input</label>
              <div class="col-sm-6">
                <input type="text" id="input-normal" name="input-normal" class="form-control" placeholder="Normal">
              </div>
            </div>

          </form>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./vv-create.component.css']
})
export class VvCreateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
