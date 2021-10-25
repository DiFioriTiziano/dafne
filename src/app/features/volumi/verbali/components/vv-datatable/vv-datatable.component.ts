import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';
import {  Observable } from 'rxjs';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { VerbaliService } from '../../../../../services/verbali.service';




@Component({
  selector: 'dafne-vv-datatable',
  template: `

  <div class="col-sm">
  <div class="card card-accent-primary">
    <div class="card-header">
      Elenco Verbali
    </div>
    <div class="card-body">

    <form [formGroup]="formGroup">

      <div class="form-group row">
        <div class="col-md-12">
          <div class="input-group">
            <span class="input-group-prepend">
              <button type="button" class="btn btn-primary"><i class="fa fa-search"></i> Search</button>
            </span>

            <input
            type="text"
            name="filter"
            class="form-control"
            placeholder="Ricerca nei dati..."
            formControlName="filter"
            >

        </div>
      </div>
    </div>

    </form>


    <div class="card">

    <div class="card-body">
    <form [formGroup]="formAvanzata">
      <div class="row">
        <div class="form-group col-sm-4">
          <label for="volumePeriodo">Volume-Periodo</label>
          <select class="form-control" id="volumePeriodo" name="volumePeriodo" formControlName="volumePeriodo" >
          <option>Tutti</option>
            <option>14</option>
            <option>1</option>
            <option>2</option>
          </select>
        </div>
        <div class="form-group col-sm-4">
          <label for="dataVerbale">Data Verbale</label>
          <select class="form-control" id="dataVerbale" name="dataVerbale" formControlName="dataVerbale" >
            <option>12/04/1944</option>
            <option>17/03/1906</option>
            <option>10/02/1906</option>
          </select>
        </div>
        <div class="form-group col-sm-4">
          <label for="odg">Ordine del giorno</label>
          <select class="form-control" id="odg" name="odg" formControlName="odg">
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
        </div>
<!--         <div class="col-sm-4">
          <div class="form-group">
            <label for="cvv">CVV/CVC</label>
            <input type="text" class="form-control" id="cvv" placeholder="123">
          </div>
        </div>
-->
      </div>
    </form>
    </div>


    <button type="button" class="btn btn-primary" (click)="isCollapsed = !isCollapsed">
      Ricerca avanzata
    </button>


    <pre>
    <code>
      status- <b>{{ formAvanzata.status }}</b>
      valid- <b>{{ formAvanzata.valid }}</b>
      invalid- <b>{{ formAvanzata.invalid }}</b>
      pristine- <b>{{ formAvanzata.pristine }}</b>
      dirty- <b>{{ formAvanzata.dirty }}</b>
      touched- <b>{{ formAvanzata.touched }}</b>
      untouched- <b>{{ formAvanzata.untouched }}</b>
    </code>
  </pre>

  <pre><code>{{ formAvanzata.value | json }}</code></pre>


  </div>


      <table class="table table-bordered table-striped table-sm">
      <!--"table table-sm"> -->
        <thead>
          <tr>
            <th>Numero Volume/Periodo</th>
            <th>Data Verbale</th>
            <th>Ordine del giorno</th>
            <th>Pagina</th>
            <th>Testo</th>
            <th>Luoghi</th>
            <th>Note</th>
          </tr>
        </thead>
        <tbody >
          <tr *ngFor="let verbale of filteredVerbali$ | async">
            <td>Vol. <b>{{verbale.volume_num_registro}}</b> del {{verbale.volume_periodo}}</td>
            <td>{{verbale.verbale_data| date: 'dd/MM/yyyy'}}</td>
            <td>{{verbale.odg_numero}}</td>
            <td>{{verbale.pag_numero}}</td>
            <td>{{verbale.cont_testo}}</td>
            <td>{{verbale.cont_luoghi}}</td>
            <td>{{verbale.cont_note}}</td>
          </tr>
        </tbody>
      </table>


      <div class="row">
        <div class="col-xs-12 col-12">
          <pagination
            [totalItems]="22"
            (numPages)="smallnumPages = $event"
            (pageChanged)="pageChanged($event)">
          </pagination>
        </div>
      </div>

      <!-- <dafne-vv-addverbale-modal (emitFromVerbale)="datiVerbale($event)"></dafne-vv-addverbale-modal> -->

    </div>
  </div>
</div>
  `,
  styleUrls: ['./vv-datatable.component.css']
})
export class VvDatatableComponent implements OnInit {

  @Input('dataSource') dataSource: any;
  @Output() emitFromDatatable: EventEmitter<any> = new EventEmitter<any>();

  currentPage: number = 4;
  smallnumPages: number = 2;

  formGroup: FormGroup;
  formAvanzata: FormGroup;
  filteredVerbali$: Observable<any[]>;

  constructor(private formBuilder: FormBuilder, private srv: VerbaliService) {}



/*   (collapsed)="collapsed($event)"
  (expanded)="expanded($event)"
  [collapse]="isCollapsed" */



  isCollapsed: boolean = false;

  collapsed(event: any): void {
     console.log(event);
  }

  expanded(event: any): void {
     console.log(event);
  }

  ngOnInit(): void {

    this.formGroup = this.formBuilder.group({ filter: [''] });

        this.filteredVerbali$ =
          this.formGroup.get('filter').valueChanges.pipe(startWith("")).pipe(
            map((val) =>
              !val
              ? this.dataSource.data
              : this.search(this.dataSource.data, val)
            )
          )


          this.formAvanzata = this.formBuilder.group({
            volumePeriodo: [''],
            dataVerbale: [''],
            odg: ['']
          });


//console.log(this.isCollapsed)

  }



pageChanged(event: PageChangedEvent): void {
    console.log(event);
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.dataSource.data = this.dataSource.data.slice(startItem, endItem);
  }

  search(array, keyword) {
    const regExp = new RegExp(keyword,"gi");
    const check = obj => {
      if (obj !== null && typeof obj === "object") { return Object.values(obj).some(check) }
      if (Array.isArray(obj)) { return obj.some(check) }
      return (typeof obj === "string" || typeof obj === "number") && regExp.test(''+obj);
    }
    return array.filter(check);
  }


   datiVerbale($event){
    console.log("dati emessi dal datatable: ",$event);
    this.emitFromDatatable.emit($event);
  }



}
