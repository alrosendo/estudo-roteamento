import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(  private loginService: LoginService,  private router: Router){}
  email: string = '';
  senha: string = '';

  login(){
    const logado = this.loginService.login(this.email,this.senha);
    if(logado){
      this.router.navigate(['/']);
    }
  }
}
