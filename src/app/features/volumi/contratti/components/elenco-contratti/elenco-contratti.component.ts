import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { ContrattiService } from '../../../../../services/contratti.service';
import { map } from 'rxjs/operators';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';

@Component({
  selector: 'dafne-elenco-contratti',
  template: `



  <div class="col-sm">
  <div class="card card-accent-primary">
    <div class="card-header">
      Elenco Contratti
    </div>
    <div class="card-body">

<br>


 <!-- <div *ngIf="formPeriodi.touched !== false">
  <pre><code>{{ formPeriodi.touched}}</code></pre>

  <pre><code>{{ formPeriodi.value | json}}</code></pre>
  </div> -->


<!--
  <mat-form-field>
  <mat-label><b>Ricerca nei dati...</b></mat-label>
    <input matInput (keyup)="applyFilter($event)" placeholder="...ricerca...">
  </mat-form-field>

  <mat-form-field>
  <mat-label>Periodi</mat-label>
  <mat-select [formControl]="formPeriodi" multiple>
    <mat-option *ngFor="let periodo of distinctPeriodo" [value]="periodo.volume_periodo">{{periodo.volume_periodo}}</mat-option>
  </mat-select>
  </mat-form-field>

  <button  (click)="exportToExcel()" mat-button color="primary">
  <mat-icon>download</mat-icon>Scarica in Excel
  </button>
-->

  <mat-table [dataSource]="dataLista" class="mat-elevation-z8" style="overflow-x:auto;" matSort>

  <ng-container matColumnDef="Id"  >
      <mat-header-cell *matHeaderCellDef > Id</mat-header-cell>
      <mat-cell *matCellDef="let element"> <b>{{element.ID_CONTR}}</b> </mat-cell>
  </ng-container>

  <ng-container matColumnDef="Nregistro">
      <mat-header-cell *matHeaderCellDef  > N.registro </mat-header-cell>
      <mat-cell *matCellDef="let element"> {{element.CONTR_N_REGISTRO}} </mat-cell>
  </ng-container>

  <ng-container matColumnDef="PeriodoRegistro">
      <mat-header-cell *matHeaderCellDef  > Periodo_registro </mat-header-cell>
      <mat-cell *matCellDef="let element"> {{element.CONTR_PERIODO_REGISTRO}} </mat-cell>
  </ng-container>

  <ng-container matColumnDef="Indice">
      <mat-header-cell *matHeaderCellDef > Indice </mat-header-cell>
      <mat-cell *matCellDef="let element"> {{element.CONTR_INDICE}} </mat-cell>
  </ng-container>

  <ng-container matColumnDef="Data">
      <mat-header-cell *matHeaderCellDef > Data </mat-header-cell>
      <mat-cell *matCellDef="let element"> {{element.CONTR_data}} </mat-cell>
  </ng-container>

  <ng-container matColumnDef="Argomento">
      <mat-header-cell *matHeaderCellDef > Argomento </mat-header-cell>
      <mat-cell *matCellDef="let element"> {{element.CONTR_ARGOMENTO}} </mat-cell>
  </ng-container>

  <ng-container matColumnDef="Luoghi">
      <mat-header-cell *matHeaderCellDef > Luoghi </mat-header-cell>
      <mat-cell *matCellDef="let element"> {{element.CONTR_LUOGHI}} </mat-cell>
  </ng-container>

  <ng-container matColumnDef="Soggetti">
      <mat-header-cell *matHeaderCellDef > Soggetti </mat-header-cell>
      <mat-cell *matCellDef="let element"> {{element.CONTR_SOGGETTI}} </mat-cell>
  </ng-container>

  <ng-container matColumnDef="Eventi">
      <mat-header-cell *matHeaderCellDef > Eventi </mat-header-cell>
      <mat-cell *matCellDef="let element"> {{element.CONTR_EVENTI}} </mat-cell>
  </ng-container>

  <ng-container matColumnDef="Note">
      <mat-header-cell *matHeaderCellDef > Note </mat-header-cell>
      <mat-cell *matCellDef="let element"> {{element.CONTR_NOTE}} </mat-cell>
  </ng-container>

  <ng-container matColumnDef="Indice file">
    <mat-header-cell *matHeaderCellDef > Indice file </mat-header-cell>
    <mat-cell *matCellDef="let element"><a *ngIf='element.CONTR_NOME_FILE_indice' href="http://interno.aterroma.it/dafne/contratti/indici/{{element.CONTR_NOME_FILE_indice}}.pdf" target="_blank"><i class="fa fa-file-pdf-o fa-lg text-danger"></i></a></mat-cell>
  </ng-container>

  <ng-container matColumnDef="Contratto">
    <mat-header-cell *matHeaderCellDef > Contratto </mat-header-cell>
    <mat-cell *matCellDef="let element"><a *ngIf='element.CONTR_NOME_FILE_INTEGRALE' href="http://interno.aterroma.it/dafne/contratti/volumi/{{element.CONTR_NOME_FILE_INTEGRALE}}.pdf" target="_blank"><i class="fa fa-file-pdf-o fa-lg text-danger"></i></a></mat-cell>
  </ng-container>

  <ng-container matColumnDef="EditRiga">
  <mat-header-cell *matHeaderCellDef > EDIT </mat-header-cell>
  <mat-cell *matCellDef="let element"> <!--<dafne-edit-modal (emitEditContenuti)="editContenuti($event)" [itemVista]="element"></dafne-edit-modal> --></mat-cell>
 </ng-container>

    <mat-header-row *matHeaderRowDef="displayedColumns"></mat-header-row>
    <mat-row *matRowDef="let row; columns: displayedColumns;"></mat-row>

  </mat-table >

  <mat-paginator [pageSizeOptions]="[10, 30, 50]" showFirstLastButtons> </mat-paginator>





    </div>
  </div>
</div>




  `,
  styleUrls: ['./elenco-contratti.component.css']
})
export class ElencoContrattiComponent implements OnInit {

  displayedColumns: string[] = ['Id','Nregistro','PeriodoRegistro','Indice','Data','Argomento','Luoghi','Soggetti','Eventi','Note','Indice file','Contratto','EditRiga'];
  dataLista: MatTableDataSource<any> ;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  @Input('dataSource') dataSource: any;
  //@Input('volume') volume: any;
  //@Input('dataVerbale') dataVerbale: any;
  //@Input('odg') odg: any;
  //@Output() emitFromDatatable: EventEmitter<any> = new EventEmitter<any>();

  formPeriodi = new FormControl();


  //smallnumPages: number = 5;

 // formGroup: FormGroup;
 // formAvanzata: FormGroup;
  filteredVerbali$: Observable<any[]>;
  dataPagination:any;

  dataList: any;
  filtro: any;
  dataExcel: any;
  dataRegistroPeriodo: any;
  distinctPeriodo: any;

  constructor(
    private formBuilder: FormBuilder,
    //private srv: VerbaliService,
    //private utilityService: UtilityService,
    private srvContratti: ContrattiService
  ) {




    // this.srvContratti.subjectContratti$.subscribe( (data)=> {
       // this.dataSource = data

/*           let x = new  MatTableDataSource<any>(this.dataSource);
          this.dataLista = x

            if(this.dataLista){
              this.dataLista.paginator = this.paginator;
              this.dataLista.sort = this.sort;
            }

          this.dataList = this.dataSource.slice(0, 5); */
    //})

  }

  isCollapsed: boolean = false;
    collapsed(event: any): void {
      console.log(event);
    }
      expanded(event: any): void {
        console.log(event);
      }


  ngOnInit(): void {

    console.log(this.dataSource)
          this.dataLista = new  MatTableDataSource<any>(this.dataSource);

            if(this.dataLista){
              this.dataLista.paginator = this.paginator;
              this.dataLista.sort = this.sort;
            }

          //this.dataList = this.dataSource.slice(0, 5);
          this.dataList = this.dataSource

/*           this.formGroup = this.formBuilder.group({ filter: [''] });
                this.formAvanzata = this.formBuilder.group({
                  volumePeriodo: [''],
                  dataVerbale: [''],
                  odg: ['']
                }); */
  }


/*       applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
          this.dataLista.filter = filterValue.trim().toLowerCase();
      } */



pageChanged(event: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;

    //this.dataList = this.dataSource.slice(startItem, endItem);
    this.dataList = this.dataSource
  }


/*   search(array, keyword) {

    const regExp = new RegExp(keyword,"gi");
    const check = obj => {
      if (obj !== null && typeof obj === "object") { return Object.values(obj).some(check) }
      if (Array.isArray(obj)) { return obj.some(check) }
      return (typeof obj === "string" || typeof obj === "number") && regExp.test(''+obj);
    }
    return array.filter(check);
  } */


/*   exportToExcel() {
    this.dataExcel = this.dataLista.filteredData;

      let filterExcel = this.dataExcel.map((resp) => {

        let newDate = new Date(resp.verbale_data),
          options = { day: '2-digit', month: '2-digit', year: 'numeric' };

        let dataIta = newDate.toLocaleDateString('it', options);

        return {
          Numero_Registro: resp.volume_num_registro,
          Periodo_Registro: resp.volume_periodo,
          Data_Verbale: dataIta,
          Odg_Numero: resp.odg_numero,
          Odg_Pagina: resp.odg_pag_numero,
          Testo: resp.cont_testo,
          Luoghi: resp.cont_luoghi,
          Note: resp.cont_note
        }
      })

    this.utilityService.exportAsExcelFile(filterExcel, 'verbali');
  } */

/*   editContenuti(datiModificati){
    this.emitFromDatatable.emit(datiModificati);
  } */


}
