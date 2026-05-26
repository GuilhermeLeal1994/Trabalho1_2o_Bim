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
11 - Escreva um programa que defina uma classe Pessoa com atributos nome e idade, e 
métodos para exibir esses atributos.
*******************************************************************************/
class Pessoa {
  constructor(public nome: string, public idade: number) {}
  exibir(): void {
    console.log(`Objeto Pessoa -> Nome: ${this.nome} | Idade: ${this.idade} anos`);
  }
}

export function executar(proximo: () => void): void {
  const p = new Pessoa("Guilherme Leal", 20);
  p.exibir();
  proximo();
}