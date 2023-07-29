import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Dados } from './dados';
import { delay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DadosService {

  constructor(private http: HttpClient) { }

  getLavouras(): Observable<any> {
    return this.http.get('http://localhost:3000/lavouras');
  }

  getLavourasPeloID(IdCultivo: any): Observable<any> {
    return this.http.get(`http://localhost:3000/lavouras/${IdCultivo}`).pipe(delay(2000));
  }

  addLavouras(dado: Dados): Observable<any> {
    let reqLavouras = {
      Nome_muda: dado.Nome_muda,
      Nome_cultivo: dado.Nome_cultivo,
      desc_cultivo_1: dado.desc_cultivo_1,
      desc_cultivo_2: dado.desc_cultivo_2,
      Preco_de_venda_cultivo: dado.Preco_de_venda_cultivo,
      Imagem_muda: dado.Imagem_muda,
      Imagem_cultivo: dado.Imagem_cultivo,
      Imagem_estagios_1: dado.Imagem_estagios_1,
      Imagem_estagios_2: dado.Imagem_estagios_2,
      Imagem_estagios_3: dado.Imagem_estagios_3,
      Imagem_estagios_4: dado.Imagem_estagios_4,
      Imagem_estagios_5: dado.Imagem_estagios_5,
      Imagem_colheita_1: dado.Imagem_colheita_1,
      Imagem_colheita_2: dado.Imagem_colheita_2,
      Estagio_1_descricao: dado.Estagio_1_descricao,
      Estagio_2_descricao: dado.Estagio_2_descricao,
      Estagio_3_descricao: dado.Estagio_3_descricao,
      Estagio_4_descricao: dado.Estagio_4_descricao,
      Estagio_5_descricao: dado.Estagio_5_descricao,
      Colheita_1_descricao: dado.Colheita_1_descricao,
      Colheita_2_descricao: dado.Colheita_2_descricao,
      Estacao: dado.Estacao,
      Energia: dado.Energia
    }
    return this.http.post('http://localhost:3000/lavouras', reqLavouras);
  }
}
