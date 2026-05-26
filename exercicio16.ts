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
16 - Escreva um programa que valide uma senha de acordo com os seguintes critérios:
 Pelo menos 8 caracteres
 Pelo menos uma letra maiúscula
 Pelo menos uma letra minúscula
 Pelo menos um número
*******************************************************************************/
import * as readline from "readline";

export function executar(proximo: () => void): void {
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  rl.question("Defina sua senha de segurança: ", (senha) => {
    rl.close();
    const c1 = senha.length >= 8;
    const c2 = /[A-Z]/.test(senha);
    const c3 = /[a-z]/.test(senha);
    const c4 = /[0-9]/.test(senha);

    if (c1 && c2 && c3 && c4) {
      console.log("Confirmação: Senha segura aceita com sucesso.");
    } else {
      console.log("Recusado: A senha precisa de 8 letras contendo Maiúscula, Minúscula e Número.");
    }
    proximo();
  });
}