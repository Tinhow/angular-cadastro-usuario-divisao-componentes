export class Usuario {
  nome?: string;
  cpf?: string;
  idade?: string;

  constructor(nome?: string, cpf?: string, idade?: string) {
      this.nome = nome;
      this.cpf = cpf;
      this.idade = idade;
  }
}
