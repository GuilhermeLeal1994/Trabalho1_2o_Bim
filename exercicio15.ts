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
15 - Implemente uma calculadora de Índice de Massa Corporal (IMC) que receba peso (kg) e 
altura (m) e exiba o resultado com a classificação correspondente (ex: abaixo do peso, 
normal, etc.).
*******************************************************************************/
import * as readline from "readline";

export function executar(proximo: () => void): void {
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  rl.question("Digite seu peso (kg): ", (p) => {
    rl.question("Digite sua altura (m): ", (a) => {
      rl.close();
      const peso = Number(p);
      const altura = Number(a);
      
      if (isNaN(peso) || isNaN(altura) || altura <= 0) {
        console.log("Dados incorretos.");
        proximo();
        return;
      }

      const imc = peso / (altura * altura);
      let cat = "";
      if (imc < 18.5) cat = "Abaixo do peso";
      else if (imc < 25) cat = "Peso normal";
      else if (imc < 30) cat = "Sobrepeso";
      else cat = "Obesidade";

      console.log(`IMC calculado: ${imc.toFixed(2)} -> Classificação: ${cat}`);
      proximo();
    });
  });
}