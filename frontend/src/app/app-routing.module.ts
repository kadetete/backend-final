import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LavourasComponent } from './lavouras/lavouras.component';
import { DetalhesComponent } from './detalhes/detalhes.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: 'cadastro', component: CadastroComponent, canActivate: [AuthGuard] },
  { path: '', component: LavourasComponent, canActivate: [AuthGuard]},
  {path: 'detalhes/:Nome_cultivo', component: DetalhesComponent, canActivate: [AuthGuard]},
  {path: 'cadastro', component: CadastroComponent},
  {path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
