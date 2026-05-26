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
9 - Criar uma calculadora simples de quatro operações (+ - * /). 
*******************************************************************************/
import * as readline from "readline";

export function executar(proximo: () => void): void {
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  rl.question("Número 1: ", (n1) => {
    rl.question("Operação (+, -, *, /): ", (op) => {
      rl.question("Número 2: ", (n2) => {
        rl.close();
        const num1 = Number(n1);
        const num2 = Number(n2);
        
        if (isNaN(num1) || isNaN(num2)) {
          console.log("Valores numéricos inválidos.");
          proximo();
          return;
        }

        switch (op.trim()) {
          case "+": console.log(`Resultado: ${num1 + num2}`); break;
          case "-": console.log(`Resultado: ${num1 - num2}`); break;
          case "*": console.log(`Resultado: ${num1 * num2}`); break;
          case "/": 
            if (num2 === 0) console.log("Erro: Divisão por zero impossível.");
            else console.log(`Resultado: ${num1 / num2}`);
            break;
          default: console.log("Operador inválido.");
        }
        proximo();
      });
    });
  });
}