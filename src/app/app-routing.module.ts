import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroUsuarioComponent } from './usuario/cadastro-usuario/cadastro-usuario.component';
import { ListagemUsuarioComponent } from './usuario/listagem-usuario/listagem-usuario.component';

const routes: Routes = [
  {
    path: 'cadastrousuario',
    component: CadastroUsuarioComponent
  },
  {
    path: 'editausuario/:id',
    component: CadastroUsuarioComponent
  },
  {
    path: 'listagemusuario',
    component: ListagemUsuarioComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
