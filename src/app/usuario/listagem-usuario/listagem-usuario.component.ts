import { Component } from '@angular/core';
import { Usuario } from 'src/app/shared/model/usuario';
import { usuarioslist } from 'src/app/shared/model/usuarioslist';

@Component({
  selector: 'app-listagem-usuario',
  templateUrl: './listagem-usuario.component.html',
  styleUrls: ['./listagem-usuario.component.scss']
})
export class ListagemUsuarioComponent {

  //usuarios = [
  //  {nome: 'walter', cpf: '12234', idade: '22'},
  //  {nome: 'will', cpf: '33234', idade: '33'},
  //  {nome: 'Bor', cpf: '345234', idade: '27'},
  //];

  usuarios = usuarioslist;

  constructor() {
  }


  ngOnInit(): void {}

  editar(usuario: Usuario): void {
    usuario.nome += ' - Editado';

  }

  excluir(usuario: Usuario): void {
    const index = this.usuarios.findIndex(u => u.cpf === usuario.cpf);
    if(index > -1)
    this.usuarios.splice(index, 1);
  }

}


