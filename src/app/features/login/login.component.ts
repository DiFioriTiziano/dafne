import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { VerbaliService } from '../../services/verbali.service';
import { Router } from '@angular/router';
import { AlertConfig } from 'ngx-bootstrap/alert';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html',
  providers: [{ provide: AlertConfig }]
})
export class LoginComponent {

  formLogin: FormGroup;
  messErrorLogin: string;



  constructor(private fb:FormBuilder, private srv:VerbaliService, private router:Router){

    this.formLogin = this.fb.group({
      user: ['',[Validators.required]],
      password: ['',Validators.required]
    });
  }



  login(){
    this.messErrorLogin = "";
    const val = this.formLogin.value;

      if (val.user && val.password) {
           this.srv.login(val.user, val.password)
              .subscribe(
                  (res) =>  {
                    if(res.length !== 0){this.router.navigateByUrl('/dashboard')}else{
                      this.messErrorLogin = "Nome utente o password errati... riprovare!"
                    }
                  },
                  (e) => this.messErrorLogin = "Nome utente o password errati... riprovare!"
              );
      }else{
        this.messErrorLogin = "Digitare le credenziali!";
      }


  }

}
