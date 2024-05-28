import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Observable } from 'rxjs';
import { ContrattiService } from '../../../../../services/contratti.service';

import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { UtilityService } from '../../../../../services/utility.service';

@Component({
  selector: 'dafne-va-list',
  template: `
  <div class="animated fadeIn">
  <div class="col-sm">
  <div class="card card-accent-primary">
    <div class="card-header">
      Elenco Allegati
    </div>
    <div class="card-body">

<br>


<!--   <mat-form-field>
  <mat-label><b>Ricerca nei dati...</b></mat-label>
  <input matInput (keyup)="applyFilterContratti($event)" placeholder="...ricerca...">
  </mat-form-field>

  <button  (click)="exportToExcelContratti()" mat-button color="primary">
  <mat-icon>download</mat-icon>Scarica in Excel
  </button> -->


  <mat-table [dataSource]="dataLista" class="mat-elevation-z8" style="overflow-x:auto;" matSort>

  <ng-container matColumnDef="Nregistro">
    <mat-header-cell *matHeaderCellDef  > N.registro </mat-header-cell>
    <mat-cell *matCellDef="let element"> {{"element.CONTR_N_REGISTRO"}} </mat-cell>
  </ng-container>

  <ng-container matColumnDef="PeriodoRegistro">
    <mat-header-cell *matHeaderCellDef  > Periodo registro </mat-header-cell>
    <mat-cell *matCellDef="let element"> {{"element.CONTR_PERIODO_REGISTRO"}} </mat-cell>
  </ng-container>

  <ng-container matColumnDef="Indice">
    <mat-header-cell *matHeaderCellDef > Indice </mat-header-cell>
    <mat-cell *matCellDef="let element"> {{"element.CONTR_INDICE"}} </mat-cell>
  </ng-container>

  <ng-container matColumnDef="Data">
    <mat-header-cell *matHeaderCellDef > Data </mat-header-cell>
    <mat-cell *matCellDef="let element"> {{"element.CONTR_data"}} </mat-cell>
  </ng-container>

  <ng-container matColumnDef="Argomento">
    <mat-header-cell *matHeaderCellDef > Argomento </mat-header-cell>
    <mat-cell *matCellDef="let element"> {{"element.CONTR_ARGOMENTO"}} </mat-cell>
  </ng-container>

  <ng-container matColumnDef="Luoghi">
    <mat-header-cell *matHeaderCellDef > Luoghi </mat-header-cell>
    <mat-cell *matCellDef="let element"> {{"element.CONTR_LUOGHI"}} </mat-cell>
  </ng-container>

  <ng-container matColumnDef="Soggetti">
    <mat-header-cell *matHeaderCellDef > Soggetti </mat-header-cell>
    <mat-cell *matCellDef="let element"> {{"element.CONTR_SOGGETTI"}} </mat-cell>
  </ng-container>

  <ng-container matColumnDef="Eventi">
    <mat-header-cell *matHeaderCellDef > Eventi </mat-header-cell>
    <mat-cell *matCellDef="let element"> {{"element.CONTR_EVENTI"}} </mat-cell>
  </ng-container>

  <ng-container matColumnDef="Note">
    <mat-header-cell *matHeaderCellDef > Note </mat-header-cell>
    <mat-cell *matCellDef="let element"> {{"element.CONTR_NOTE"}} </mat-cell>
  </ng-container>

  <ng-container matColumnDef="IndiceFile">
  <mat-header-cell *matHeaderCellDef > Indice file </mat-header-cell>
  <mat-cell *matCellDef="let element"><a *ngIf='element.CONTR_NOME_FILE_indice' href="http://interno.aterroma.it/dafne/contratti/indici/{{element.CONTR_NOME_FILE_indice}}.pdf" target="_blank"><i class="fa fa-file-pdf-o fa-lg text-danger"></i></a></mat-cell>
  </ng-container>

  <ng-container matColumnDef="Contratto">
  <mat-header-cell *matHeaderCellDef > Contratto </mat-header-cell>
  <mat-cell *matCellDef="let element"><a *ngIf='element.CONTR_NOME_FILE_INTEGRALE' href="http://interno.aterroma.it/dafne/contratti/volumi/{{element.CONTR_NOME_FILE_INTEGRALE}}.pdf" target="_blank"><i class="fa fa-file-pdf-o fa-lg text-danger"></i></a></mat-cell>
  </ng-container>

  <!--   <ng-container matColumnDef="EditRiga">
  <mat-header-cell *matHeaderCellDef > EDIT </mat-header-cell>
  <mat-cell *matCellDef="let element"> <!--<dafne-edit-modal (emitEditContenuti)="editContenuti($event)" [itemVista]="element"></dafne-edit-modal> -- ></mat-cell>
  </ng-container> -->

  <mat-header-row *matHeaderRowDef="displayedColumns"></mat-header-row>
  <mat-row *matRowDef="let row; columns: displayedColumns;"></mat-row>

  </mat-table >

  <mat-paginator [pageSizeOptions]="[10, 30, 50]" showFirstLastButtons> </mat-paginator>





      </div>
    </div>
  </div>
    </div>
  `,
  styleUrls: ['./va-list.component.css']
})
export class VaListComponent implements OnInit {

  displayedColumns: string[] = ['Nregistro','PeriodoRegistro','Indice','Data','Argomento','Luoghi','Soggetti','Eventi','Note','IndiceFile','Contratto'];
  dataLista: MatTableDataSource<any> ;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  @Input('dataSource') dataSource: any;


  filteredVerbali$: Observable<any[]>;
  dataPagination:any;

  dataList: any;
  filtro: any;
  dataExcel: any;
  dataRegistroPeriodo: any;
  distinctPeriodo: any;

  constructor(
    private utilityService: UtilityService,
    private srvContratti: ContrattiService
  ){  }

  isCollapsed: boolean = false;
    collapsed(event: any): void {
      console.log(event);
    }
      expanded(event: any): void {
        console.log(event);
      }


    ngOnInit(): void {
      console.log("dati arrivati... ",this.dataSource)
            this.dataLista = new  MatTableDataSource<any>(this.dataSource);

              if(this.dataLista){
                this.dataLista.paginator = this.paginator;
                this.dataLista.sort = this.sort;
              }

            this.dataList = this.dataSource


            /*
            applyFilterContratti(event: Event) {
              const filterValue = (event.target as HTMLInputElement).value;
                this.dataLista.filter = filterValue.trim().toLowerCase();
            } */



/*           pageChanged(event: PageChangedEvent): void {
              const startItem = (event.page - 1) * event.itemsPerPage;
              const endItem = event.page * event.itemsPerPage;
              this.dataList = this.dataSource
            } */


  /*     exportToExcelContratti() {
        this.dataExcel = this.dataLista.filteredData;

          let filterExcel = this.dataExcel.map((resp) => {

            let newDate = new Date(resp.verbale_data),
              options = { day: '2-digit', month: '2-digit', year: 'numeric' };

            let dataIta = newDate.toLocaleDateString('it', options);

            return {

              Contr_Numero_Registro: resp.CONTR_N_REGISTRO,
              Contr_Periodo_Registro: resp.CONTR_PERIODO_REGISTRO,
              Contr_Indice: resp.CONTR_INDICE,
              Contr_Data: resp.CONTR_data,
              Contr_Argomento: resp.CONTR_ARGOMENTO,
              Contr_Luoghi: resp.CONTR_LUOGHI,
              Contr_Soggetti: resp.CONTR_SOGGETTI,
              Contr_Eventi: resp.CONTR_EVENTI,
              Contr_Note: resp.CONTR_NOTE
            }
          })

        this.utilityService.exportAsExcelFile(filterExcel, 'contratti');
      } */

    }

}
