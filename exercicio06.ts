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
6 - Escreva um programa que leia 5 números do usuário e os armazene em um array, depois 
exiba todos os números.
*******************************************************************************/
import * as readline from "readline";

export function executar(proximo: () => void): void {
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  const numeros: number[] = [];

  function obterNumero(pos: number) {
    if (pos > 5) {
      rl.close();
      console.log("Array completo guardado na memória:", numeros);
      proximo();
      return;
    }
    rl.question(`Digite o ${pos}º número: `, (input) => {
      const n = Number(input);
      if (isNaN(n)) {
        console.log("Valor inválido. Insira novamente.");
        obterNumero(pos);
      } else {
        numeros.push(n);
        obterNumero(pos + 1);
      }
    });
  }
  obterNumero(1);
}