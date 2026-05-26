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
2 - Escreva um programa que leia um número inteiro e informe se ele é par ou ímpar.
*******************************************************************************/
import * as readline from "readline";

export function executar(proximo: () => void): void {
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  rl.question("Digite um número inteiro: ", (input) => {
    rl.close();
    const numero = parseInt(input, 10);

    if (isNaN(numero)) {
      console.log("Erro: Entrada inválida.");
    } else {
      console.log(`O número ${numero} é ${numero % 2 === 0 ? "PAR" : "ÍMPAR"}.`);
    }
    proximo();
  });
}