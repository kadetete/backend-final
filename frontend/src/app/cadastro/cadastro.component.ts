import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit{
  formularioCadastro!: FormGroup;
  mostrarDescricaoEstagios!: number;
  mostrarDescricaoColheitas!: number;

  Editar_Descricao(id: string) {
    var inputElement = document.getElementById(`descricao_${id}`) as HTMLInputElement;
    var valor = inputElement.valueAsNumber
    if (inputElement.id.includes('Estagio'))
      var valorManipulado = valor + (valor == 1 ? " Dia" : " Dias")
    else
      if (this.mostrarDescricaoColheitas == 2)	
        var valorManipulado = (valor == 1 ? "Continua a produzir todo dia." : "Continua a produzir a cada " + valor + "dias");
      else
        var valorManipulado = "Total:" + valor + " Dias";
    // Atualizar o modelo de dados com o valor manipulado
    this.formularioCadastro.patchValue({[`${id}_descricao`]: valorManipulado});
  }
  enviarFormulario(){
    
  }
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.formularioCadastro = this.formBuilder.group({
      IdCrescimento:        [null],
      Nome:                 [null],
      Estagio_1_imagem:     [null],
      Estagio_2_imagem:     [null],
      Estagio_3_imagem:     [null],
      Estagio_4_imagem:     [null],
      Estagio_5_imagem:     [null],
      Colheita_1_imagem:    [null],
      Colheita_2_imagem:    [null],
      Estagio_1_descricao:  [null],
      Estagio_2_descricao:  [null],
      Estagio_3_descricao:  [null],
      Estagio_4_descricao:  [null],
      Estagio_5_descricao:  [null],
      Colheita_1_descricao: [null],
      Colheita_2_descricao: [null]
    });
  }
}
