
import { Component, OnInit } from '@angular/core';
import { VerbaliService } from '../../../../services/verbali.service';
import { StoreVerbaliService } from '../../../../services/storeVerbali.service';



//container
@Component({
  selector: 'dafne-vv-list',
  template: `
  <div class="animated fadeIn">
    <dafne-vv-datatable
      *ngIf="dataSource"
        [dataSource]="dataSource"
        [volume]="volume"
        [dataVerbale]="dataVerbale"
        [odg]="odg"
        (emitFromDatatable)="salvaDatiVerba($event)"
    >
    </dafne-vv-datatable>

  </div>
  `,
  styleUrls: ['./vv-list.component.css']
})


//(filtraProva)="filtraProva($event)" -- tolto in output dal componente


export class VvListComponent implements OnInit {

  dataSource:object;
  volume:any;
  dataVerbale:any;
  odg:any;
  datiModificati: any;

  constructor(
    private srv:VerbaliService,
    private storeVerbali: StoreVerbaliService
  ) {

    this.storeVerbali.getVerbali()

  //this.srv.distinct_verbali('volume_num_registro').subscribe((resp)=> {this.volume = resp});
    this.srv.group_periodi().subscribe((resp)=> {this.volume = resp});
    this.srv.distinct_verbali('verbale_data').subscribe((resp)=> {this.dataVerbale = resp});
    this.srv.distinct_verbali('odg_numero').subscribe((resp)=> {this.odg = resp});

  }



  ngOnInit(): void {

    // siamo in ascsolto della subject!
    this.storeVerbali.verbali$.subscribe( (data)=> {
      console.log("in ascolto su container list!",data)
      this.dataSource = data
    })






/*         this.srv.getVerbali().subscribe((data) => {
              this.dataSource = {
                data
              }
        }) */


  }


/*   filtraProva(dati){
    let filtrato = dati.filter( filtro => filtro.odg_pag_numero === '4' )

    let verbali = {
      data:filtrato
    }

    this.dataSource = verbali
     console.log("cazzo di dati",verbali)
     this.storeVerbali.filtraProva(verbali)
  }
 */

  salvaDatiVerba(itemModificato){

/*     console.log("Dati arrivati al container ",item);
    this.srv.editVerbale(item).subscribe((resp)=> {
    this.datiModificati = resp
    console.log(resp)
    }) */


  this.storeVerbali.updateVerbaliData(itemModificato)


   let Index = this.dataSource['data'].findIndex(lista => lista.cont_id === itemModificato.cont_id);
   console.log("indice array ",Index)
                  this.dataSource['data'][Index] = {...this.dataSource['data'][Index],...itemModificato}

      console.log("nuovi",this.dataSource['data'])

      this.storeVerbali.setVerbali(this.dataSource)


  }

}

