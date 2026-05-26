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
4 - Faça um programa que converta uma temperatura em graus Celsius para Fahrenheit, 
utilizando a fórmula: F = (C × 9/5) + 32.
*******************************************************************************/
import * as readline from "readline";

export function executar(proximo: () => void): void {
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  rl.question("Temperatura em Celsius (°C): ", (input) => {
    rl.close();
    const celsius = Number(input);

    if (isNaN(celsius)) {
      console.log("Erro: Entrada inválida.");
    } else {
      const fahrenheit = (celsius * 9) / 5 + 32;
      console.log(`${celsius}°C equivale a ${fahrenheit.toFixed(1)}°F`);
    }
    proximo();
  });
}