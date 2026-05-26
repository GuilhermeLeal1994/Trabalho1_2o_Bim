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
18 - Desenvolva um programa que conte quantas palavras existem em uma string fornecida 
pelo usuário
*******************************************************************************/
import * as readline from "readline";

export function executar(proximo: () => void): void {
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  rl.question("Escreva uma frase para contagem: ", (frase) => {
    rl.close();
    const contagem = frase.trim() === "" ? 0 : frase.trim().split(/\s+/).length;
    console.log(`Análise: O seu texto contém ${contagem} palavra(s).`);
    proximo();
  });
}