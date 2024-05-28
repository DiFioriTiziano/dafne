import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AllegatiService {

  API_URL: string = 'http://gcdoc.aterroma.it/dafne/api';

  private subAllegati: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  subjectAllegati$ = this.subAllegati.asObservable();

  constructor(private http_client:HttpClient) { }


  allegati()  {
    this.http_client.get(`${this.API_URL}/allegati/read/`).subscribe( (data) => {
      let allegati = data

      this.subAllegati.next(allegati);
    });
  }


}
