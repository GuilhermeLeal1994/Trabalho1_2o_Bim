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
8 - Escreva um programa que conte o número de vogais em uma string fornecida pelo 
usuário.
*******************************************************************************/
import * as readline from "readline";

export function executar(proximo: () => void): void {
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  rl.question("Digite uma frase: ", (texto) => {
    rl.close();
    const vogais = texto.match(/[aeiouáéíóúãõâêîôû]/gi);
    console.log(`A frase contém ${vogais ? vogais.length : 0} vogais.`);
    proximo();
  });
}