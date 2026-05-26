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
3 - Escreva um programa que calcule a média de três notas fornecidas pelo usuário.
*******************************************************************************/
import * as readline from "readline";

export function executar(proximo: () => void): void {
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  rl.question("Nota 1: ", (n1) => {
    rl.question("Nota 2: ", (n2) => {
      rl.question("Nota 3: ", (n3) => {
        rl.close();
        const nota1 = Number(n1);
        const nota2 = Number(n2);
        const nota3 = Number(n3);

        if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
          console.log("Erro: Notas inválidas.");
        } else {
          const media = (nota1 + nota2 + nota3) / 3;
          console.log(`Média final: ${media.toFixed(2)} - ${media >= 6 ? "Aprovado" : "Reprovado"}`);
        }
        proximo();
      });
    });
  });
}