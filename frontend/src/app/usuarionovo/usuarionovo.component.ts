import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service'

@Component({
  selector: 'app-usuarionovo',
  templateUrl: './usuarionovo.component.html',
  styleUrls: ['./usuarionovo.component.css']
})
export class UsuarionovoComponent {
  login = '';
  senha = '';

  constructor(private loginServico: LoginService, private router: Router) {}

  cadastro() {
    this.loginServico.cadastro(this.login, this.senha).subscribe(
      (response) => {
        console.log(response);
        this.router.navigate(['/']);
      }
    )
  }
}
