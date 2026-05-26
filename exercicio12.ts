/******************************************************************************
Curso: Tecnologia em Análise e Desenvolvimento de Sistemas
Disciplina: Programação Front-End
Professor: José Carlos Flores
Turma: ADS3A
Componentes: 
             25216067-2 -  Guilherme Leal de Deus
             25340355-2 -  João Vitor Melo Figueiredo

Data: 05 de Maio de 2026
Descritivo: 
12 - Escreva um programa que use herança para criar uma classe Aluno que herda de 
Pessoa e adiciona um atributo matricula.
*******************************************************************************/
class Pessoa {
  constructor(public nome: string, public idade: number) {}
}

class Aluno extends Pessoa {
  constructor(nome: string, idade: number, public matricula: string) {
    super(nome, idade);
  }
  exibirFicha(): void {
    console.log(`Ficha Aluno -> R.A: ${this.matricula} | Nome: ${this.nome} | Idade: ${this.idade}`);
  }
}

export function executar(proximo: () => void): void {
  const a = new Aluno("João Vitor", 21, "25340355-2");
  a.exibirFicha();
  proximo();
}