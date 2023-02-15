import { Component, OnInit, ViewChild } from '@angular/core';
import {ModalDirective} from 'ngx-bootstrap/modal';

@Component({
  selector: 'dafne-edit-modal',
  template: `<div class="row">
  <div class="col-xs-12 col-12">
  <!-- <button data-toggle="modal" (click)="successModal.show()" type="button" class="btn btn-outline-primary btn-lg btn-block"><i class="fa fa-plus fa-lg"></i></button> -->
  <button data-toggle="modal" (click)="successModal.show()" type="button" class="btn btn-sm btn-primary"><i class="cui-pencil icons font-2sm d-block"></i></button>
  </div>
</div>
<div bsModal #successModal="bs-modal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-success" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title">Modifica Dati</h4>
        <button type="button" class="close" (click)="successModal.hide()" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">

      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" (click)="successModal.hide()">Annulla</button>
        <button    type="button" class="btn btn-success">Salva</button>



      </div>
    </div><!-- /.modal-content -->
  </div><!-- /.modal-dialog -->
</div><!-- /.modal -->`,

  styleUrls: ['./edit-modal.component.css']
})
export class EditModalComponent implements OnInit {

  @ViewChild('successModal') public successModal: ModalDirective;

  constructor() { }

  ngOnInit(): void {
  }

}