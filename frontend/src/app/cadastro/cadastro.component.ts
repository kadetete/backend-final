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
  mostrarDescricaoColheitas: number = 0;

  
  @ViewChild('estagiosSelect') estagiosSelect: any;
  @ViewChild('colheitasSelect') colheitasSelect: any;
  
  // Adicione um método para lidar com a alteração do valor selecionado
  onChangeEstagios() {
    this.mostrarDescricaoEstagios = +this.estagiosSelect.nativeElement.value;
  }
  onChangeColheitas() {
    this.mostrarDescricaoColheitas = +this.colheitasSelect.nativeElement.value;
  }
  
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
  handleImageUpload(element: any) {
    var inputElement = document.getElementById(element) as HTMLInputElement;
    var file = inputElement.files?.[0];
    var reader = new FileReader();

    reader.onloadend = function() {
      var img = new Image();
      img.src = reader.result as string;

      img.onload = function() {
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
        
        for (var i = 0; i < numParts; i++) {
          var partCanvas = document.createElement('canvas');
          var partCtx = partCanvas.getContext('2d')!;
          partCanvas.width = 48;
          partCanvas.height = 96;
          partCtx.drawImage(
            canvas,
            i * 48,
            0,
            48,
            96,
            0,
            0,
            48,
            96
          );
          
          var partImage = new Image();
          partImage.src = partCanvas.toDataURL();
          
          
          outputContainer.appendChild(partImage);
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
