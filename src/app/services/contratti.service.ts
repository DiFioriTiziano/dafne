import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ContrattiService {

  API_URL: string = 'http://gcdoc.aterroma.it/dafne/api';

/*   private contrattiData = new Subject<any>(); */

      private subcontratti: BehaviorSubject<any> = new BehaviorSubject<any>(null);
      subjectContratti$ = this.subcontratti.asObservable();


  constructor(private http_client:HttpClient) {

  }

/*
/contratti/create/`
/contratti/read/`
/contratti/read/:id`
/contratti/update/:id`
/contratti/detail/:id`
/contratti/delete/:id`
*/

  contratti()  {
    this.http_client.get(`${this.API_URL}/contratti/read/`).subscribe( (data) => {
      let contratti = data

      this.subcontratti.next(contratti);
    });
  }


  updateSubjectContratti(dati) {
    this.subcontratti.next(dati);
  }

/*   filtraProva(filtrati)  {
      this.subcontratti.next(filtrati);
  } */

/*   getVerbaliDataObservable(): Observable<any> {
    return this.contrattiData.asObservable();
  }
 */

   updateContrattiData(Request) {
    this.http_client.post(`${this.API_URL}/contratti/update/`, JSON.stringify(Request)).subscribe((data) => {
    });
  }



}
