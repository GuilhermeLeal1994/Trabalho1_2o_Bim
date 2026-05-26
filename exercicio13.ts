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
13 -  Escreva um programa que defina uma interface Veiculo com métodos acelerar() e frear(), 
e implemente essa interface em uma classe Carro.
*******************************************************************************/
interface Veiculo {
  acelerar(): void;
  frear(): void;
}

class Carro implements Veiculo {
  constructor(private modelo: string) {}
  acelerar(): void { console.log(`O ${this.modelo} está ganhando velocidade.`); }
  frear(): void { console.log(`O ${this.modelo} parou completamente.`); }
}

export function executar(proximo: () => void): void {
  const m = new Carro("Civic");
  m.acelerar();
  m.frear();
  proximo();
}