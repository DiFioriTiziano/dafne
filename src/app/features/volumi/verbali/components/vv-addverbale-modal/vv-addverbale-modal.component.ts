import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ModalDirective} from 'ngx-bootstrap/modal';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'dafne-vv-addverbale-modal',
  template: `<div class="row">
  <div class="col-xs-12 col-12">
  <button data-toggle="modal" (click)="successModal.show()" type="button" class="btn btn-outline-primary btn-lg btn-block"><i class="fa fa-plus fa-lg"></i></button>
  </div>
</div>
<div bsModal #successModal="bs-modal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-success" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title">Aggiungi Verbale</h4>
        <button type="button" class="close" (click)="successModal.hide()" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form [formGroup]="reactiveForm">
                <div class="form-group row">
                  <label class="col-md-6 col-form-label" for="data_verbale">Data verbale</label>
                    <div class="col-md-6">
                      <input formControlName="data_verbale" class="form-control" id="data_verbale" type="date" name="data_verbale" placeholder="date">
                    </div>
                </div>

                <div class="form-group row">
                <label class="col-md-6 col-form-label" for="periodo_verbale">Periodo</label>
                  <div class="col-md-6">
                    <input formControlName="periodo_verbale"  type="text" id="periodo_verbale" name="periodo_verbale" class="form-control" placeholder="Text">
                  </div>
                </div>
<!--               <pre>
                <code>
                  status- <b>{{ reactiveForm.status }}</b>
                  valid- <b>{{ reactiveForm.valid }}</b>
                  invalid- <b>{{ reactiveForm.invalid }}</b>
                  pristine- <b>{{ reactiveForm.pristine }}</b>
                  dirty- <b>{{ reactiveForm.dirty }}</b>
                  touched- <b>{{ reactiveForm.touched }}</b>
                  untouched- <b>{{ reactiveForm.untouched }}</b>
                </code>
              </pre>
-->

              <pre><code>{{ reactiveForm.value | json }}</code></pre>
        </form>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" (click)="successModal.hide()">Close</button>
        <button (click)="addVerbale(reactiveForm.value)" [disabled]="reactiveForm.invalid"  type="button" class="btn btn-success">Aggiungi</button>
      </div>
    </div><!-- /.modal-content -->
  </div><!-- /.modal-dialog -->
</div><!-- /.modal -->`,
  styleUrls: ['./vv-addverbale-modal.component.css']
})
export class VvAddverbaleModalComponent implements OnInit {

  @ViewChild('successModal') public successModal: ModalDirective;

  @Output() emitFromVerbale: EventEmitter<any> = new EventEmitter<any>();


  reactiveForm: FormGroup;

  constructor(private fb:FormBuilder) {

    this.reactiveForm = this.fb.group({
      data_verbale: ['',Validators.required],
      periodo_verbale: ['',[Validators.required,Validators.maxLength(20)]]
    });

  }

  ngOnInit(): void {}


  addVerbale(datiForm){
    console.log("Dati emessi dal modal", datiForm)
    this.emitFromVerbale.emit(datiForm);
  }




}
