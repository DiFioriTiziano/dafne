import { Component, OnInit, ViewChild, Input } from '@angular/core';
import {ModalDirective} from 'ngx-bootstrap/modal';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'dafne-edit-modal',
  template: `<div class="row">
  <div class="col-xs-12 col-12">
  <!-- <button data-toggle="modal" (click)="successModal.show()" type="button" class="btn btn-outline-primary btn-lg btn-block"><i class="fa fa-plus fa-lg"></i></button> -->
  <button data-toggle="modal" (click)="successModal.show()" type="button" class="btn btn-sm btn-primary"><i class="cui-pencil icons font-2sm d-block"></i></button>
  </div>
</div>
<div bsModal #successModal="bs-modal" class="modal fade"  tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-success modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title">Modifica Dati</h4>
        <button type="button" class="close" (click)="successModal.hide()" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div><!-- /.modal-header -->
      <div class="modal-body">


<!--       {{itemVista | json}} -->


      <div class="card">
      <div class="card-body">

      <div class="container text-left">
        <div class="row">

          <div class="col-4">
            <div class="h6 m-0">Volume/Periodo</div>
            <div>{{itemVista.volume_num_registro}}/{{itemVista.volume_periodo}}</div>
          </div>

          <div class="col-4">
            <div class="h6 m-0">Data Verbale</div>
            <div>{{itemVista.verbale_data}}</div>
          </div>

          <div class="col-2">
            <div class="h6 m-0">Ogd</div>
            <div>{{itemVista.odg_numero}}</div>
          </div>

          <div class="col-2">
            <div class="h6 m-0">Pagina</div>
            <div>{{itemVista.odg_pag_numero}}</div>
          </div>

        </div>
      </div>

          <div class="progress progress-xs my-3">
            <div class="progress-bar bg-success" role="progressbar" style="width: 100%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <small class="text-muted">Riepilogo dati (non modificabili)</small>
        </div>
      </div>





      <div class="card">
        <div class="card-header">
          <strong>Dati modificabili</strong>
        </div>
        <div class="card-body">
          <form [formGroup]="reactiveForm" class="form-horizontal">

            <div class="form-group row">
            <label class="col-md-3 col-form-label" for="cont_testo">Testo</label>
              <div class="col-md-9">
                <textarea formControlName="cont_testo" value="{{this.itemVista.cont_testo}}" id="cont_testo" name="cont_testo" rows="4" class="form-control" placeholder=""></textarea>
              </div>
            </div>

            <div class="form-group row">
            <label class="col-md-3 col-form-label" for="cont_luoghi">Luoghi</label>
              <div class="col-md-9">
                <textarea formControlName="cont_luoghi" value="{{this.itemVista.cont_luoghi}}" id="cont_luoghi" name="cont_luoghi" rows="4" class="form-control" placeholder=""></textarea>
              </div>
            </div>

            <div class="form-group row">
            <label class="col-md-3 col-form-label" for="cont_note">Note</label>
              <div class="col-md-9">
                <textarea formControlName="cont_note" value="{{this.itemVista.cont_note}}" id="cont_note" name="cont_note" rows="4" class="form-control" placeholder=""></textarea>
              </div>
            </div>



          </form>
        </div>
        <div class="card-footer">
<!--           <button type="submit" class="btn btn-sm btn-primary"><i class="fa fa-dot-circle-o"></i> Submit</button>
          <button type="reset" class="btn btn-sm btn-danger"><i class="fa fa-ban"></i> Reset</button> -->
        </div>
</div>


data- <b>{{ reactiveForm.value | json  }}</b>

<!--             <pre>
                  <code>
                    data- <b>{{ reactiveForm.value | json  }}</b>
                    status- <b>{{ reactiveForm.status }}</b>
                    valid- <b>{{ reactiveForm.valid }}</b>
                    invalid- <b>{{ reactiveForm.invalid }}</b>
                    pristine- <b>{{ reactiveForm.pristine }}</b>
                    dirty- <b>{{ reactiveForm.dirty }}</b>
                    touched- <b>{{ reactiveForm.touched }}</b>
                    untouched- <b>{{ reactiveForm.untouched }}</b>
                  </code>
                </pre> -->

        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" (click)="successModal.hide()">Annulla</button>
          <button    type="button" class="btn btn-success">Salva</button>
        </div><!-- /.modal-footer -->


        </div><!-- /.modal-body -->
      </div><!-- /.modal-content -->
    </div><!-- /.modal-dialog -->
</div><!-- /.modal -->`,

  styleUrls: ['./edit-modal.component.css']
})
export class EditModalComponent implements OnInit {

  @Input('itemVista') itemVista: any;

  @ViewChild('successModal') public successModal: ModalDirective;

  reactiveForm: FormGroup;

  constructor(private fb:FormBuilder) {

    this.reactiveForm = this.fb.group({
        cont_testo: [''],
        cont_luoghi: [''] ,
        cont_note: ['']
    });

  }

  ngOnInit(): void {
    console.log(this.itemVista)
  }

  saveItem() {

  }

}
