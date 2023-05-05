import { Component } from '@angular/core';
import { Usuario } from 'src/app/shared/model/usuario';
import { usuarioslist } from 'src/app/shared/model/usuarioslist';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.scss']
})
export class CadastroUsuarioComponent {

  usuario: Usuario;
  usuarios: Array<Usuario>;

  constructor() {
    this.usuario = new Usuario();
    //this.usuarios = new Array<Usuario>();
    this.usuarios = usuarioslist;

  }

  cadastrar(): void {
    this.usuarios.push(this.usuario);
    this.usuario = new Usuario();
  }

}
