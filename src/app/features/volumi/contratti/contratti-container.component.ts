import { Component, OnInit } from '@angular/core';
import { VerbaliService } from '../../../services/verbali.service';
import { StoreVerbaliService } from '../../../services/storeVerbali.service';
import { ContrattiService } from '../../../services/contratti.service';

@Component({
  selector: 'dafne-contratti-container',
  template: `
    <dafne-elenco-contratti
      *ngIf="dataSource"
      [dataSource]="dataSource"
    >
    </dafne-elenco-contratti>
  `,
  styles: []
})
export class ContrattiContainerComponent  {

   dataSource:object;

/*   volume:any;
  dataVerbale:any;
  odg:any;
  datiModificati: any; */

  constructor(
   // private srv:VerbaliService,
    private srv: ContrattiService
  ) {

    //this.srv.contratti()

    this.dataSource = [
    {
      "ID_CONTR": "1",
      "CONTR_N_REGISTRO": "1",
      "CONTR_PERIODO_REGISTRO": "1905-1906",
      "CONTR_INDICE": "1",
      "CONTR_data": "20/03/1905",
      "CONTR_ARGOMENTO": "sdfgsdgfsdgfsdfgsdfgsdfgsdfg",
      "CONTR_LUOGHI": "roma",
      "CONTR_SOGGETTI": "lorenzo",
      "CONTR_EVENTI": "ref ",
      "CONTR_NOTE": "a firenze",
      "CONTR_NOME_FILE_indice": "CONTR_001_INDICE",
      "CONTR_NOME_FILE_INTEGRALE": "CONTR_001_INTEGRALE_N_1"
    },
    {
      "ID_CONTR": "2",
      "CONTR_N_REGISTRO": "1",
      "CONTR_PERIODO_REGISTRO": "1905-1906",
      "CONTR_INDICE": "1",
      "CONTR_data": "20/03/1905",
      "CONTR_ARGOMENTO": "sdfgsdgfsdgfsdfgsdfgsdfgsdfg",
      "CONTR_LUOGHI": "roma",
      "CONTR_SOGGETTI": "lorenzo",
      "CONTR_EVENTI": "ref ",
      "CONTR_NOTE": "a firenze",
      "CONTR_NOME_FILE_indice": "CONTR_001_INDICE",
      "CONTR_NOME_FILE_INTEGRALE": "CONTR_001_INTEGRALE_N_1"
    },
    {
      "ID_CONTR": "3",
      "CONTR_N_REGISTRO": "1",
      "CONTR_PERIODO_REGISTRO": "1905-1906",
      "CONTR_INDICE": "1",
      "CONTR_data": "20/03/1905",
      "CONTR_ARGOMENTO": "sdfgsdgfsdgfsdfgsdfgsdfgsdfg",
      "CONTR_LUOGHI": "roma",
      "CONTR_SOGGETTI": "lorenzo",
      "CONTR_EVENTI": "ref ",
      "CONTR_NOTE": "a firenze",
      "CONTR_NOME_FILE_indice": "CONTR_001_INDICE",
      "CONTR_NOME_FILE_INTEGRALE": "CONTR_001_INTEGRALE_N_1"
    }
  ]

    this.srv.updateSubjectContratti(this.dataSource)

    /* this.srv.group_periodi().subscribe((resp)=> {this.volume = resp});
    this.srv.distinct_verbali('verbale_data').subscribe((resp)=> {this.dataVerbale = resp});
    this.srv.distinct_verbali('odg_numero').subscribe((resp)=> {this.odg = resp}); */

  }



  ngOnInit(): void {
    // siamo in ascsolto della subject!
    this.srv.subjectContratti$.subscribe( (data)=> {
      this.dataSource = data
    })
  }


  salvaDatiVerba(itemModificato){

      this.srv.updateContrattiData(itemModificato)
          let Index = this.dataSource['data'].findIndex(lista => lista.cont_id === itemModificato.cont_id);
                          this.dataSource['data'][Index] = {...this.dataSource['data'][Index],...itemModificato}

              this.srv.updateSubjectContratti(this.dataSource)

  }

}
