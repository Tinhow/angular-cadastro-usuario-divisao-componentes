import { usuarioslist } from './../../shared/model/usuarioslist';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/shared/model/usuario';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.scss']
})
export class CadastroUsuarioComponent {

  usuarioDeManutencao: Usuario;
  estahCadastrando = true;
  nomeBotaoManutencao = 'Cadastrar';

  usuarios = usuarioslist;

  constructor(private rotaAtual: ActivatedRoute, private roteador: Router) {
    this.usuarioDeManutencao = new Usuario();
    const idParaEdicao = this.rotaAtual.snapshot.paramMap.get('id');
    if (idParaEdicao) {
      // editando
      const usuarioEncontrado = this.usuarios.find(
        usuario => usuario.cpf === idParaEdicao);
      if (usuarioEncontrado) {
        this.estahCadastrando = false;
        this.nomeBotaoManutencao = 'Salvar';
        this.usuarioDeManutencao = usuarioEncontrado;
      }
    } else {
      this.nomeBotaoManutencao = 'Cadastrar';
    }
  }

  cadastrar(): void {
    if (this.estahCadastrando && this.usuarioDeManutencao) {
      this.usuarios.push(this.usuarioDeManutencao);
    }
    this.usuarioDeManutencao = new Usuario();
    this.nomeBotaoManutencao = 'Cadastrar';
    this.roteador.navigate(['listagemusuario']);
  }


}
