import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DadosService } from '../dados.service';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent implements OnInit{
  formularioCadastro!: FormGroup;
  mostrarDescricaoEstagios: number = 0;
  mostrarDescricao: number = 0;
  listImage: string[] = [];
  IdCultivo = '';
  Nome_muda = '';
  Nome_cultivo = '';
  Imagem_muda = '';
  Imagem_cultivo = '';
  Imagem_estagios_1 = '';
  Imagem_estagios_2 = '';
  Imagem_estagios_3 = '';
  Imagem_estagios_4 = '';
  Imagem_estagios_5 = '';
  Imagem_colheita_1 = '';
  Imagem_colheita_2 = '';
  desc_cultivo_1 = '';
  desc_cultivo_2 = '';
  Estacao = '';
  Energia = '';
  Preco_de_venda_cultivo = '';
  Estagio_1_descricao = '';
  Estagio_2_descricao = '';
  Estagio_3_descricao = '';
  Estagio_4_descricao = '';
  Estagio_5_descricao = '';
  Colheita_1_descricao = '';
  Colheita_2_descricao = '';
  
  @ViewChild('estagiosSelect') estagiosSelect: any;
  @ViewChild('descricaoSelect') descricaoSelect: any;
  // Adicione um método para lidar com a alteração do valor selecionado

  onChangeDescricao() {
    if(this.listImage.length != 8){
      if (this.descricaoSelect.nativeElement.value == 0){
        this.mostrarDescricaoEstagios = 0;
        this.mostrarDescricao = 0;
      }
      else{
        this.mostrarDescricaoEstagios = this.listImage.length -1 -this.descricaoSelect.nativeElement.value;
        this.mostrarDescricao = +this.descricaoSelect.nativeElement.value;
      }
      for (var i = 1; i <= 7; i++) {
        var outputImagem = document.getElementById(`imagem_${i}`) as HTMLInputElement;
        if (i < (this.listImage.length  - this.mostrarDescricao)) {
          outputImagem.src = this.listImage[i];
        }
        else {
          outputImagem.removeAttribute('src');
        }
        if (i == 6){
          outputImagem.src = this.listImage[this.listImage.length - (this.mostrarDescricao == 1 ? 1 : 2)];
        }
        else if (i == 7 && this.mostrarDescricao == 2){
          outputImagem.src = this.listImage[this.listImage.length -1]
        }
      }
    }
  }

  /*var partImage = new Image();
  this.listImage.push(partCanvas.toDataURL())
  partImage.src = this.listImage[i-1];   
  
  outputContainer.appendChild(partImage);*/
  Editar_Descricao(id: string) {
    var inputElement = document.getElementById(`descricao_${id}`) as HTMLInputElement;
    var valor = inputElement.valueAsNumber
    if (inputElement.id.includes('Estagio'))
      var valorManipulado = valor + (valor == 1 ? " Dia" : " Dias")
    else
      if (this.mostrarDescricao == 2)	
        var valorManipulado = (valor == 1 ? "Continua a produzir todo dia." : "Continua a produzir a cada " + valor + "dias");
      else
        var valorManipulado = "Total:" + valor + " Dias";
    // Atualizar o modelo de dados com o valor manipulado
    this.formularioCadastro.patchValue({[`${id}_descricao`]: valorManipulado});
  }

  constructor(private formBuilder: FormBuilder,
              private elementRef: ElementRef, 
              private renderer: Renderer2,
              private activaRoute: ActivatedRoute,
              private dadoServico: DadosService) {}

  ngOnInit(): void{
    this.activaRoute.paramMap.subscribe({
      next: (rota: any) => {
        this.IdCultivo = rota.params.IdCultivo;
        this.dadoServico.getLavourasPeloID(this.IdCultivo).subscribe({
          next: (retorno: any) => {
            this.Nome_muda = retorno.Nome_muda;
            this.Nome_cultivo = retorno.Nome_cultivo;
            this.Imagem_muda = retorno.Imagem_muda;
            this.Imagem_cultivo = retorno.Imagem_cultivo;
            this.Imagem_estagios_1 = retorno.Imagem_estagios_1;
            this.Imagem_estagios_2 = retorno.Imagem_estagios_2;
            this.Imagem_estagios_3 = retorno.Imagem_estagios_3;
            this.Imagem_estagios_4 = retorno.Imagem_estagios_4;
            this.Imagem_estagios_5 = retorno.Imagem_estagios_5;
            this.Imagem_colheita_1 = retorno.Imagem_colheita_1;
            this.Imagem_colheita_2 = retorno.Imagem_colheita_2;
            this.desc_cultivo_1 = retorno.desc_cultivo_1;
            this.desc_cultivo_2 = retorno.desc_cultivo_2;
            this.Estacao = retorno.Estacao;
            this.Energia = retorno.Energia;
            this.Preco_de_venda_cultivo = retorno.Preco_de_venda_cultivo;
            this.Estagio_1_descricao = retorno.Estagio_1_descricao;
            this.Estagio_2_descricao = retorno.Estagio_2_descricao;
            this.Estagio_3_descricao = retorno.Estagio_3_descricao;
            this.Estagio_4_descricao = retorno.Estagio_4_descricao;
            this.Estagio_5_descricao = retorno.Estagio_5_descricao;
            this.Colheita_1_descricao = retorno.Colheita_1_descricao;
            this.Colheita_2_descricao = retorno.Colheita_2_descricao;
          },
          error: (erro: any) => console.log(erro),
          complete: () => console.log('completo')
        });
      }
    })
  }
  
  ngAfterViewInit() {
    const desContainerElements = this.elementRef.nativeElement.querySelectorAll('.des_container');
    const fieldsetWidth = desContainerElements.length * 256;
  
    this.renderer.setStyle(this.elementRef.nativeElement.querySelector('#fieldsetPromocional'), 'width', `${(desContainerElements.length == 0 ? 256: fieldsetWidth)}px`);
  }
  
}

