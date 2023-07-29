import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, switchMap, forkJoin } from 'rxjs';
import { Dados } from './dados';

@Injectable({
  providedIn: 'root'
})
export class DadosService {

  constructor(private http: HttpClient) { }

  getLavouras(): Observable<any> {
    return this.http.get('http://localhost:3000/lavouras');
  }

  getLavourasPeloNome(Nome_cultivo: string): Observable<any> {
    return this.http.get(`http://localhost:3000/lavouras/${Nome_cultivo}`);
  }

  addLavouras(dado: Dados): Observable<any> {
    let reqLavouras = {
      Nome_muda: dado.Nome_muda,
      Nome_cultivo: dado.Nome_cultivo,
      desc_cultivo_1: dado.desc_cultivo_1,
      desc_cultivo_2: dado.desc_cultivo_1,
      Preco_de_venda_cultivo: dado.desc_cultivo_1,
      Imagem_muda: dado.desc_cultivo_1,
      Imagem_cultivo: dado.desc_cultivo_1,
      Imagem_estagios_1: dado.desc_cultivo_1,
      Imagem_estagios_2: dado.desc_cultivo_1,
      Imagem_estagios_3: dado.desc_cultivo_1,
      Imagem_estagios_4: dado.desc_cultivo_1,
      Imagem_estagios_5: dado.desc_cultivo_1,
      Imagem_colheita_1: dado.desc_cultivo_1,
      Imagem_colheita_2: dado.desc_cultivo_1,
      Estagio_1_descricao: dado.desc_cultivo_1,
      Estagio_2_descricao: dado.desc_cultivo_1,
      Estagio_3_descricao: dado.desc_cultivo_1,
      Estagio_4_descricao: dado.desc_cultivo_1,
      Estagio_5_descricao: dado.desc_cultivo_1,
      Colheita_1_descricao: dado.desc_cultivo_1,
      Colheita_2_descricao: dado.desc_cultivo_1,
      Estacao: dado.desc_cultivo_1,
      Energia: dado.desc_cultivo_1
    }
    let addLavouras = this.http.post('http://localhost:3000/lavouras', reqLavouras);
    return addLavouras
  }
}
