import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit{
  formularioCadastro!: FormGroup;
  mostrarDescricaoEstagios: number = 0;
  mostrarDescricao: number = 0;
  listImage: string[] = [];
  
  
  @ViewChild('estagiosSelect') estagiosSelect: any;
  @ViewChild('descricaoSelect') descricaoSelect: any;
  
  // Adicione um método para lidar com a alteração do valor selecionado

  onChangeDescricao() {
    if(this.listImage.length != 8){
      if (this.descricaoSelect.nativeElement.value == 0){
        this.mostrarDescricaoEstagios = 0;
        this.mostrarDescricao = 0;
      }
      this.mostrarDescricaoEstagios = this.listImage.length -1 -this.descricaoSelect.nativeElement.value;
      this.mostrarDescricao = +this.descricaoSelect.nativeElement.value;
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
  
  enviarFormulario(){
    
  }
  handleImageUpload(element: any) {
    var inputElement = document.getElementById(element) as HTMLInputElement;
    var file = inputElement.files?.[0];
    var inputNome = document.getElementById(`nome`) as HTMLInputElement;
    inputNome.value = file?.name.split('.')[0]!;
    var reader = new FileReader();

    reader.onloadend = () => {
      var img = new Image();
      img.src = reader.result as string;

      img.onload = () => {
        // Limitar a altura e largura da imagem
        var canvas = document.createElement('canvas');
        var ctx = canvas.getContext('2d');
        var maxImageWidth = 384;
        var maxImageHeight = 96;
        var resizedWidth, resizedHeight;
        
        if (img.width > maxImageWidth) {
          resizedWidth = maxImageWidth;
          resizedHeight = (img.height * maxImageWidth) / img.width;
        } else {
          resizedWidth = img.width;
          resizedHeight = img.height;
        }
        
        if (resizedHeight > maxImageHeight) {
          resizedHeight = maxImageHeight;
          resizedWidth = (img.width * maxImageHeight) / img.height;
        }
        
        canvas.width = resizedWidth;
        canvas.height = resizedHeight;
        ctx!.drawImage(img, 0, 0, resizedWidth, resizedHeight);
        
        // Dividir a imagem em partes de 96x48
        var numParts = Math.floor(resizedWidth / 48);
        var outputContainer = document.getElementById('outputContainer') as HTMLInputElement;
        outputContainer.innerHTML = ''; // Limpar o conteúdo anterior
        this.listImage = []
        for (var i = 0; i < numParts; i++) {
          var partCanvas = document.createElement('canvas');
          var partCtx = partCanvas.getContext('2d')!;
          partCanvas.width = 48;
          partCanvas.height = 96;
          partCtx.drawImage(canvas, i * 48, 0, 48, 96, 0, 0,  48, 96);
          var partImage = new Image();
          this.listImage.push(partCanvas.toDataURL())
          partImage.src = this.listImage[i];   
          outputContainer.appendChild(partImage);
        }
        if (this.listImage.length == 8) {
          this.mostrarDescricaoEstagios = 5;
          this.mostrarDescricao = 2;
          for (var y = 1; y <= 7; y++) {
            var outputImagem = document.getElementById(`imagem_${y}`) as HTMLInputElement;
            outputImagem.src = this.listImage[y];
          }
        }
        else{
          this.mostrarDescricaoEstagios = 0;
          this.mostrarDescricao = 0;
          for (var y = 1; y <= 7; y++) {
            var outputImagem = document.getElementById(`imagem_${y}`) as HTMLInputElement;
            outputImagem.removeAttribute('src');
          }
        }
      };
    };
    reader.readAsDataURL(file!);
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
