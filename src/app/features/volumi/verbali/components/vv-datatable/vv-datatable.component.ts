import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';
import {  Observable } from 'rxjs';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';





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


      <table class="table table-sm">
        <thead>
          <tr>
            <th>Data verbale</th>
            <th>Anno verbale</th>
            <th>Utente</th>
            <th>Status</th>
            <th>Tool</th>
          </tr>
        </thead>
        <tbody >
          <tr *ngFor="let verbale of filteredVerbali$ | async">
            <td>{{verbale.verbale_data}}</td>
            <td>{{verbale.verbale_periodo}}</td>
            <td>{{verbale.verbale_utente}}</td>
            <td>
              <span class="badge badge-success">COMPLETO</span>
            </td>
            <td>
                <div class="row">
                <a [routerLink]="['/']"><div class="col-2 text-success"><i class="fa fa-pencil-square-o fa-lg"></i></div></a>
                <a [routerLink]="['/']"><div class="col-2 text-danger"><i class="fa fa-trash fa-lg"></i></div></a>
                </div>
            </td>
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


      <div class="row">
      <div class="col-xs-12 col-12">
      <button [routerLink]="['/']" type="button" class="btn btn-outline-primary btn-lg btn-block"><i class="fa fa-plus fa-lg"></i></button>
      </div>
    </div>

    </div>
  </div>
</div>
  `,
  styleUrls: ['./vv-datatable.component.css']
})
export class VvDatatableComponent implements OnInit {

  // this.dataSource.data.length

  @Input('dataSource') dataSource: any;

  currentPage: number = 4;
  smallnumPages: number = 2;

  formGroup: FormGroup;
  filteredVerbali$: Observable<any[]>;

  constructor(private formBuilder: FormBuilder) {}




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


/*
    this.filteredVerbali$ = combineLatest([
      this.formGroup.get('filter').valueChanges.pipe(startWith("")),
      this.verbaliList$
     ]).pipe(
        map( ([val, verbali]) =>
          !val
          ? verbali
          : verbali.filter(x =>   x.verbale_periodo.toLowerCase().includes(val), console.log(verbali) )
        )
      )
 */



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





}
