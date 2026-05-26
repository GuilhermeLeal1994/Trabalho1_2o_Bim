/******************************************************************************
Curso: Tecnologia em Análise e Desenvolvimento de Sistemas
Disciplina: Programação Front-End
Professor: José Carlos Flores
Turma: ADS3A
Componentes:
25216067-2 - Guilherme Leal de Deus
25340355-2 - João Vitor Melo Figueiredo

Data: 05 de Maio de 2026
Descritivo: 1 - Escreva um programa que receba dois números inteiros e exiba a soma deles.
******************************************************************************/
import * as readline from "readline";

export function executar(proximo: () => void): void {
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  rl.question("Digite o primeiro número inteiro: ", (n1) => {
    rl.question("Digite o segundo número inteiro: ", (n2) => {
      rl.close();
      const numero1 = parseInt(n1, 10);
      const numero2 = parseInt(n2, 10);

      if (isNaN(numero1) || isNaN(numero2)) {
        console.log("Erro: Por favor, insira números inteiros válidos.");
      } else {
        console.log(`A soma de ${numero1} + ${numero2} = ${numero1 + numero2}`);
      }
      proximo();
    });
  });
}