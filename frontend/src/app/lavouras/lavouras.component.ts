import { Component, Inject, OnInit } from '@angular/core';
import { DadosService } from '../dados.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lavouras',
  templateUrl: './lavouras.component.html',
  styleUrls: ['./lavouras.component.css']
})
export class LavourasComponent implements OnInit{
  dadosLavouras: any[] = [];
  dadoSelecionado?: any;

  constructor(private dadosService: DadosService, private router: Router) {}

  ngOnInit(): void {
    this.onListar();
  }

  onListar(): void {
    this.dadosService.getLavouras().subscribe({
      next: (resultado: any) => {(this.dadosLavouras = resultado), console.log(resultado)},
      error: (erro: any) => console.log(erro),
      complete: () => console.log('completo')
    });
  }


  onSelecionar(): void {
    this.router.navigate([`/detalhes/${this.dadoSelecionado.IdCultivo}`])
  }

  irCadastro(): void {
    this.router.navigate(['/usuarionovo']);
  }
}
