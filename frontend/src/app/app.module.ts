import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { CommonModule } from '@angular/common';
import { LavourasComponent } from './lavouras/lavouras.component';
import { DadosService } from './dados.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DetalhesComponent } from './detalhes/detalhes.component';
import { LoginComponent } from './login/login.component';

// primeng
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { UsuarionovoComponent } from './usuarionovo/usuarionovo.component'

@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    LavourasComponent,
    DetalhesComponent,
    LoginComponent,
    UsuarionovoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CommonModule,
    TableModule,
    HttpClientModule,
    FormsModule,
    ButtonModule
  ],
  providers: [DadosService],
  bootstrap: [AppComponent]
})
export class AppModule { }