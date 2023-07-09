import { Injectable } from '@angular/core';
import { Dados } from './dados';
import { HttpClient } from '@angular/common/http';
import { Observable, switchMap, forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DadosService {

  constructor(private http: HttpClient) { }

  getDados(): Observable<any> {
    return this.http.get('http://localhost:3000/alunocarro');
  }
}
