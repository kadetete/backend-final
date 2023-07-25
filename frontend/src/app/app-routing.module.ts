import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LavourasComponent } from './lavouras/lavouras.component';

const routes: Routes = [
  { path: 'cadastro', component: CadastroComponent },
  { path: '', component: LavourasComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
