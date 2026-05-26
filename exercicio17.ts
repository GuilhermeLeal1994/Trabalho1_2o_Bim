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
17 - Desenvolva um jogo onde o computador sorteie um número entre 1 e 100, e o usuário 
tente adivinhá-lo. O programa deve dar dicas ("maior" ou "menor") até o acerto.
*******************************************************************************/
import * as readline from "readline";

export function executar(proximo: () => void): void {
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  const alvo = Math.floor(Math.random() * 100) + 1;

  function palpite() {
    rl.question("Chute um valor entre 1 e 100: ", (input) => {
      const chute = parseInt(input, 10);
      if (chute === alvo) {
        console.log("Você acertou o número da IA!");
        rl.close();
        proximo();
      } else {
        console.log(chute < alvo ? "O alvo é MAIOR." : "O alvo é MENOR.");
        palpite();
      }
    });
  }
  palpite();
}