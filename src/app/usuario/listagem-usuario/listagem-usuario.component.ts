import { Component } from '@angular/core';
import { Usuario } from 'src/app/shared/model/usuario';
import { usuarioslist } from 'src/app/shared/model/usuarioslist';

@Component({
  selector: 'app-listagem-usuario',
  templateUrl: './listagem-usuario.component.html',
  styleUrls: ['./listagem-usuario.component.scss']
})
export class ListagemUsuarioComponent {

  usuarios = usuarioslist;

  excluir(usuarioARemover: Usuario): void {
    const index = this.usuarios.findIndex(usuario =>
      usuario.cpf === usuarioARemover.cpf);

    this.usuarios.splice(index, 1);
  }

}


