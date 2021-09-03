import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VerbaliService {

API_URL: string;

  constructor(private http_client:HttpClient) {
    //this.API_URL = 'http://interno.aterroma.it/dafne/api';
    this.API_URL = 'http://gcdoc.aterroma.it/dafne/api';
  }


  getVerbali(): Observable<any> {
    return this.http_client.get<any>(`${this.API_URL}/verbali/getverbali/`)
  }


  addVerbale(): Observable<any> {
    return this.http_client.get<any>(`${this.API_URL}/verbali/addverbale/`)
  }


  login(user:string, password:string ) {

    return this.http_client.post<any>(`${this.API_URL}/auth/login`,{user, password})



/*     return this.http_client.post<any>(`${this.API_URL}/verbali/login`,{user, password}).pipe(
       tap(res =>  {
         this.setSession(res,user),
         this.loggedIn.next(true)
        } ),
        shareReplay()
    ) */
}

}
