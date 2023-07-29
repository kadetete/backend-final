import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  login = '';
  senha = '';

  constructor(private login2: LoginService, private router: Router) {}

  fazerLogin(): void {
    this.login2.login(this.login, this.senha).subscribe(
      (response) => {
        if (response.auth == true) {
          this.login2.autenticado = true;
          this.router.navigate(['/']);
        } else {
          console.log('Falha no login');
        }
      }
    )
  }
}
