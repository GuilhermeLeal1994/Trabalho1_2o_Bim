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
14 - Escreva um programa que solicite um número inteiro e exiba sua tabuada de 1 a 10.
*******************************************************************************/
import * as readline from "readline";

export function executar(proximo: () => void): void {
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  rl.question("Tabuada de qual número inteiro? ", (input) => {
    rl.close();
    const num = parseInt(input, 10);

    if (isNaN(num)) {
      console.log("Número inválido.");
    } else {
      for (let i = 1; i <= 10; i++) {
        console.log(`${num} x ${i} = ${num * i}`);
      }
    }
    proximo();
  });
}