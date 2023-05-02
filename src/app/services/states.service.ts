import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class StatesService {

  API_URL: string;

  private verbaliData = new Subject<any>();


  constructor(private http_client:HttpClient) {
    this.API_URL = 'http://gcdoc.aterroma.it/dafne/api';
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


