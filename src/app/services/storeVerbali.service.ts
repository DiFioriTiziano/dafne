import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, filter } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class StoreVerbaliService {

  API_URL: string;

  private verbaliData = new Subject<any>();

      private verbali: BehaviorSubject<any> = new BehaviorSubject<any>(null);
              verbali$ = this.verbali.asObservable();



  constructor(private http_client:HttpClient) {
    this.API_URL = 'http://gcdoc.aterroma.it/dafne/api';
  }

  getVerbali()  {
    this.http_client.get(`${this.API_URL}/verbali/getVerbali/`).subscribe( (data) => {
      let verbali = {
        data
        }
    console.log("dallo store!",verbali)
      this.verbali.next(verbali);
    });
  }







  testgetVerbali(): Observable<any> {
    return this.http_client.get<any>(`${this.API_URL}/verbali/getVerbali/`)
  }





  setVerbali_filtra(x)  {
    console.log(x)

    let filtrato = x.filter( filtro => filtro.odg_pag_numero === '4' )
    console.log("rimappato ",filtrato)
    let verbali = {
      data:filtrato
      }
      console.log("dal pulsante filtro!",verbali)
      this.verbali.next(verbali);
  }





  getVerbaliDataObservable(): Observable<any> {
    return this.verbaliData.asObservable();
  }


  getVerbaliData() {
    this.http_client.get(`${this.API_URL}/verbali/getVerbali/`).subscribe((data) => {
       this.verbaliData.next(data);
     });

   }


   updateVerbaliData(item) {
    this.http_client.post(`${this.API_URL}/verbali/editContenutiVerbale/`, JSON.stringify(item)).subscribe((data) => {



    //this.userData.next(data);

    //  this.usersSubject.next(this.users);


    });
  }


}


