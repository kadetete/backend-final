import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
  autenticado = false;

  login(user: string, password:string): Observable<any> {
    return this.http.post('http://localhost:3000/login', {login: user, senha: password})
    .pipe(
      tap((response: any) => {
        if (response.token) {
          localStorage.setItem('authToken', response.token);
          localStorage.setItem('tokenExpiration', response.expiraEm);
        }
      })
    );
  }

  logout(): void {
    localStorage.clear;
    this.autenticado = false;
  }

  isAutenticado(): boolean {
    const authToken = localStorage.getItem('authToken');
    if (authToken) {
      const expiraEm = localStorage.getItem('tokenExpiration') || '';
      const tempoExpiraEm = new Date(Number(expiraEm)).getDate();
      const agora = new Date().getDate();
      if (agora > tempoExpiraEm) {
        this.autenticado = true;
        return true;
      }
    }

    this.autenticado = false;
    this.logout();
    return false;
  }

  cadastro(user: string, pass: string): Observable<any> {
    return this.http.post('http/localhost:3000/novo', {login: user, senha: pass})
  }
}
