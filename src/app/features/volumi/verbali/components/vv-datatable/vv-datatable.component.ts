import { Component, EventEmitter, Input, OnChanges, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { map, startWith,filter,find } from 'rxjs/operators';
import {  Observable } from 'rxjs';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { VerbaliService } from '../../../../../services/verbali.service';

import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';


@Component({
  selector: 'dafne-vv-datatable',
  template: `
  <div class="col-sm">
  <div class="card card-accent-primary">
    <div class="card-header">
      Elenco Verbali
    </div>

    <div class="card-body">

<br>

<!-- COMMENTO PARTE RICERCA AVANZATA

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

    <div class="card-body"
        (collapsed)="collapsed($event)"
        (expanded)="expanded($event)"
        [collapse]="!isCollapsed">

    <form [formGroup]="formAvanzata">
      <div class="row">
        <div class="form-group col-sm-3">
          <label for="volumePeriodo">Volume-Periodo</label>
          <select class="form-control" id="volumePeriodo" name="volumePeriodo" formControlName="volumePeriodo" >
            <option value="">Tutti</option>
            <option *ngFor="let volPeriodo of volume" value="{{volPeriodo.volume_num_registro}}" >{{volPeriodo.volume_num_registro}} - {{volPeriodo.volume_periodo}}</option>
          </select>
        </div>
        <div class="form-group col-sm-3">
          <label for="dataVerbale">DataVerbale</label>
          <select class="form-control" id="dataVerbale" name="dataVerbale" formControlName="dataVerbale" >
          <option value= "">Tutti</option>
            <option *ngFor="let data_verbale of dataVerbale" value="{{data_verbale.verbale_data}}" >{{data_verbale.verbale_data}}</option>
          </select>
        </div>
        <div class="form-group col-sm-3">
          <label for="odg">Ordine del giorno</label>
          <select class="form-control" id="odg" name="odg" formControlName="odg">
          <option value= "">Tutti</option>
          <option *ngFor="let odgiorno of odg" value="{{odgiorno.odg_numero}}" >{{odgiorno.odg_numero}}</option>
          </select>
        </div>
                <!--         <div class="col-sm-4">
                          <div class="form-group">
                            <label for="cvv">CVV/CVC</label>
                            <input type="text" class="form-control" id="cvv" placeholder="123">
                          </div>
                        </div>
                -- >
                <div class="form-group form-actions col-sm-3">
                <button type="submit" (click)="filtra('0')" class="btn btn-sm btn-success form-control">Filtra</button>
              <button type="submit" (click)="filtra('1')" class="btn btn-sm btn-danger  form-control">Reset</button>

            </div>

      </div>
    </form>
    </div>

    <button type="button" class="btn btn-primary" (click)="isCollapsed = !isCollapsed">
      Ricerca avanzata
    </button>
  <pre><code>{{ formAvanzata.value | json }}</code></pre>

  </div>

  -->


  <mat-form-field>
  <mat-label><b>Ricerca nei dati...</b></mat-label>
    <input matInput (keyup)="applyFilter($event)" placeholder="...ricerca...">
  </mat-form-field>

  <!--class="mat-elevation-z8" -->

  <mat-table [dataSource]="dataLista" class="mat-elevation-z8" style="overflow-x:auto;" matSort>

  <ng-container matColumnDef="NumeroVolumePeriodo"  >
      <mat-header-cell *matHeaderCellDef  > Numero Volume/Periodo </mat-header-cell>
      <mat-cell *matCellDef="let element"> Vol.&nbsp;<b>{{element.volume_num_registro}}</b>&nbsp;del {{element.volume_periodo}} </mat-cell>
  </ng-container>

  <ng-container matColumnDef="DataVerbale">
      <mat-header-cell *matHeaderCellDef  > Data Verbale </mat-header-cell>
      <mat-cell *matCellDef="let element"> {{element.verbale_data | date: 'dd/MM/yyyy'}} </mat-cell>
  </ng-container>

  <ng-container matColumnDef="Odg">
      <mat-header-cell *matHeaderCellDef  > Ogd </mat-header-cell>
      <mat-cell *matCellDef="let element"> {{element.odg_numero}} </mat-cell>
  </ng-container>

  <ng-container matColumnDef="Pagina">
      <mat-header-cell *matHeaderCellDef > Pagina </mat-header-cell>
      <mat-cell *matCellDef="let element"> {{element.odg_pag_numero}} </mat-cell>
  </ng-container>

  <ng-container matColumnDef="Testo">
      <mat-header-cell *matHeaderCellDef > Testo </mat-header-cell>
      <mat-cell *matCellDef="let element"> {{element.cont_testo}} </mat-cell>
  </ng-container>

  <ng-container matColumnDef="Luoghi">
      <mat-header-cell *matHeaderCellDef > Luoghi </mat-header-cell>
      <mat-cell *matCellDef="let element"> {{element.cont_luoghi}} </mat-cell>
  </ng-container>

  <ng-container matColumnDef="Note">
      <mat-header-cell *matHeaderCellDef > Note </mat-header-cell>
      <mat-cell *matCellDef="let element"> {{element.cont_note}} </mat-cell>
  </ng-container>

  <ng-container matColumnDef="Indice">
    <mat-header-cell *matHeaderCellDef > Indice </mat-header-cell>
    <mat-cell *matCellDef="let element"><a *ngIf='element.volume_nome_file_indice' href="http://interno.aterroma.it/dafne/verbali/indici/{{element.volume_nome_file_indice}}.pdf" target="_blank"><i class="fa fa-file-pdf-o fa-lg text-danger"></i></a></mat-cell>
  </ng-container>

  <ng-container matColumnDef="Volume">
    <mat-header-cell *matHeaderCellDef > Volume </mat-header-cell>
    <mat-cell *matCellDef="let element"><a *ngIf='element.volume_nome_file_integrale' href="http://interno.aterroma.it/dafne/verbali/volumi/{{element.volume_nome_file_integrale}}.pdf#page={{element.odg_pag_numero}}" target="_blank"><i class="fa fa-file-pdf-o fa-lg text-danger"></i></a></mat-cell>
  </ng-container>

    <mat-header-row *matHeaderRowDef="displayedColumns"></mat-header-row>
    <mat-row *matRowDef="let row; columns: displayedColumns;"></mat-row>

  </mat-table >

  <mat-paginator [pageSizeOptions]="[10, 30, 50]" showFirstLastButtons> </mat-paginator>













<!--       <table class="table table-bordered table-striped table-sm">

        <thead>
          <tr>
            <th>Numero Volume/Periodo</th>
            <th>Data Verbale</th>
            <th>Ordine del giorno</th>
            <th>Pagina</th>
            <th>Testo</th>
            <th>Luoghi</th>
            <th>Note</th>
            <th>Indice</th>
            <th>Volume</th>
          </tr>
        </thead>
        <tbody *ngIf="dataList">

          <tr *ngFor="let verbale of dataList">
            <td>Vol. <b>{{verbale.volume_num_registro}}</b> del {{verbale.volume_periodo}}</td>
            <td>{{verbale.verbale_data| date: 'dd/MM/yyyy'}}</td>
            <td>{{verbale.odg_numero}}</td>
            <td>{{verbale.odg_pag_numero}}</td>
            <td>{{verbale.cont_testo}}</td>
            <td>{{verbale.cont_luoghi}}</td>
            <td>{{verbale.cont_note}}</td>
            <td><a *ngIf='verbale.volume_nome_file_indice' href="{{verbale.volume_nome_file_indice}}" target="_blank"><i class="fa fa-file-pdf-o fa-lg text-danger"></i></a></td>
            <td><a *ngIf='verbale.volume_nome_file_integrale' href="{{verbale.volume_nome_file_integrale}}#page={{verbale.pag_numero}}" target="_blank"><i class="fa fa-file-pdf-o fa-lg text-danger"></i></a></td>
          </tr>

        </tbody>
      </table>
-->

<!--
      <div class="row">
        <div class="col-xs-12 col-12">
          <pagination
            [totalItems]="this.dataSource.data.length"
            [itemsPerPage]="100"
            (numPages)="smallnumPages = $event"
            (pageChanged)="pageChanged($event)">
          </pagination>
        </div>
      </div>
-->

    </div>
  </div>
</div>
  `,
  styleUrls: ['./vv-datatable.component.css']
})
export class VvDatatableComponent implements OnInit{

  displayedColumns: string[] = ['NumeroVolumePeriodo','DataVerbale','Odg','Pagina','Testo','Luoghi','Note','Indice','Volume'];
  dataLista: MatTableDataSource<any> ;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  @Input('dataSource') dataSource: any;
  @Input('volume') volume: any;
  @Input('dataVerbale') dataVerbale: any;
  @Input('odg') odg: any;
  @Output() emitFromDatatable: EventEmitter<any> = new EventEmitter<any>();

  //smallnumPages: number = 5;

  formGroup: FormGroup;
  formAvanzata: FormGroup;
  filteredVerbali$: Observable<any[]>;
  dataPagination:any;

  dataList: any;
  filtro: any;


  constructor(private formBuilder: FormBuilder, private srv: VerbaliService) {

  }

  isCollapsed: boolean = false;
    collapsed(event: any): void {
      console.log(event);
    }
      expanded(event: any): void {
        console.log(event);
      }



  ngOnInit(): void {
    this.dataLista = new  MatTableDataSource<any>(this.dataSource.data);

    if(this.dataLista){
      this.dataLista.paginator = this.paginator;
      this.dataLista.sort = this.sort;
    }

    this.dataList = this.dataSource.data.slice(0, 5);

    this.formGroup = this.formBuilder.group({ filter: [''] });

/*         this.filteredVerbali$ =
          this.formGroup.get('filter').valueChanges.pipe(startWith("")).pipe(
            map((val) =>
              !val
              ? this.dataSearch.slice(0, 100)
              : this.search(this.dataSource.data, val)
            )
          ) */



          this.formAvanzata = this.formBuilder.group({
            volumePeriodo: [''],
            dataVerbale: [''],
            odg: ['']
          });
  }



  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
      this.dataLista.filter = filterValue.trim().toLowerCase();
  }



filtra(reset){
  if(reset === '1'){
    //this.formAvanzata.reset();
     this.formAvanzata = this.formBuilder.group({
      volumePeriodo: [''],
      dataVerbale: [''],
      odg: ['']
    });

    this.formGroup.reset();

  }

  let volumePeriodo = reset === '0' ? this.formAvanzata.controls['volumePeriodo'].value : ""

  let dataConvert = this.formAvanzata.controls['dataVerbale'].value
  let dataVerbale = reset === '0' ? dataConvert.split("/").reverse().join("-"): ""

  let odg = reset === '0' ? this.formAvanzata.controls['odg'].value: ""
  let cerca = reset === '0' ? this.formGroup.controls['filter'].value: ""


  this.filteredVerbali$ = this.srv.getVerbali().pipe(
      map(
        dati =>
          dati.filter((verbali:any) =>
            (volumePeriodo ? verbali.volume_num_registro === volumePeriodo : verbali.volume_num_registro === verbali.volume_num_registro) &&
            (dataVerbale ? verbali.verbale_data === dataVerbale : verbali.verbale_data === verbali.verbale_data) &&
            (odg ? verbali.odg_numero === odg : verbali.odg_numero === verbali.odg_numero)
          )
      ),
      map(search => this.search(search, cerca))
  )
  this.filteredVerbali$.subscribe()

}


pageChanged(event: PageChangedEvent): void {
    console.log(event);
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
   // this.dataPagination = this.dataSource.data.slice(startItem, endItem);

    this.dataList = this.dataSource.data.slice(startItem, endItem);
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
