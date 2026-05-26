/******************************************************************************
Curso: Tecnologia em Análise e Desenvolvimento de Sistemas
Disciplina: Programação Front-End
Professor: José Carlos Flores
Turma: ADS3A
Componentes:
25216067-2 - Guilherme Leal de Deus
25340355-2 - João Vitor Melo Figueiredo

Data: 05 de Maio de 2026
Descritivo: Menu Principal e categorizado de acordo com as questões
******************************************************************************/

import * as readline from "readline";

// Importação dos 18 módulos dos exercícios
import { executar as ex1 } from "./exercicio01";
import { executar as ex2 } from "./exercicio02";
import { executar as ex3 } from "./exercicio03";
import { executar as ex4 } from "./exercicio04";
import { executar as ex5 } from "./exercicio05";
import { executar as ex6 } from "./exercicio06";
import { executar as ex7 } from "./exercicio07";
import { executar as ex8 } from "./exercicio08";
import { executar as ex9 } from "./exercicio09";
import { executar as ex10 } from "./exercicio10";
import { executar as ex11 } from "./exercicio11";
import { executar as ex12 } from "./exercicio12";
import { executar as ex13 } from "./exercicio13";
import { executar as ex14 } from "./exercicio14";
import { executar as ex15 } from "./exercicio15";
import { executar as ex16 } from "./exercicio16";
import { executar as ex17 } from "./exercicio17";
import { executar as ex18 } from "./exercicio18";

export function mostrarMenu(): void {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  console.log("\n=======================================================");
  console.log("          SISTEMA DE LOGÍSTICA DE EXERCÍCIOS           ");
  console.log("=======================================================");
  
  console.log("\n [ LÓGICA E MATEMÁTICA BÁSICA ]");
  console.log("  01. Soma de Dois Números");
  console.log("  02. Verificador Par/Ímpar");
  console.log("  03. Média de Notas");
  console.log("  04. Conversor de Temperatura");
  console.log("  05. Números Pares (1 a 20)");
  console.log("  14. Tabuada Dinâmica");

  console.log("\n [ ARRAYS E ESTRUTURAS DE DADOS ]");
  console.log("  06. Armazenamento em Array")
  console.log("  07. Localizar Maior Número");
  console.log("  10. Ordenação Crescente");

  console.log("\n [ MANIPULAÇÃO DE TEXTOS E STRINGS ]");
  console.log("  08. Contador de Vogais")
  console.log("  18. Contador de Palavras");

  console.log("\n [ PROGRAMAÇÃO ORIENTADA A OBJETOS (POO) ]");
  console.log("  11. Estrutura de Classe")
  console.log("  12. Aplicação de Herança");
  console.log("  13. Contrato de Interface");

  console.log("\n [ UTILITÁRIOS E JOGOS ]");
  console.log("  09. Calculadora 4 Operações")
  console.log("  15. Calculadora de IMC");
  console.log("  16. Validador de Senha Forte");
  console.log("  17. Jogo de Adivinhação");

  console.log("\n=======================================================");
  console.log("  0. Sair do Sistema");
  console.log("=======================================================");

  rl.question("\nDigite o número da opção desejada: ", (opcao) => {
    rl.close(); 
    const numOpcao = parseInt(opcao.trim(), 10);

    if (numOpcao === 0) {
      console.log("\nEncerrando o sistema de forma segura... Até logo!");
      return;
    }

    if (numOpcao >= 1 && numOpcao <= 18) {
      executarEPerguntar(numOpcao);
    } else {
      console.log("\n Opção inválida! Selecione um número de 0 a 18.");
      mostrarMenu();
    }
  });
}

function executarEPerguntar(numero: number): void {
  console.log(`\n [Executando Módulo ${numero}]`);
  console.log("-------------------------------------------------------");
  
  const callbackProximoPasso = () => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    console.log("\n=======================================================");
    console.log(" 1 - Se desejar repetir este exercício");
    console.log(" 2 - Se desejar retornar ao painel principal");
    console.log("=======================================================");

    rl.question("\nSua escolha: ", (opcao) => {
      rl.close();
      if (opcao.trim() === "1") {
        executarEPerguntar(numero);
      } else {
        mostrarMenu();
      }
    });
  };

  switch (numero) {
    case 1: ex1(callbackProximoPasso); break;
    case 2: ex2(callbackProximoPasso); break;
    case 3: ex3(callbackProximoPasso); break;
    case 4: ex4(callbackProximoPasso); break;
    case 5: ex5(callbackProximoPasso); break;
    case 6: ex6(callbackProximoPasso); break;
    case 7: ex7(callbackProximoPasso); break;
    case 8: ex8(callbackProximoPasso); break;
    case 9: ex9(callbackProximoPasso); break;
    case 10: ex10(callbackProximoPasso); break;
    case 11: ex11(callbackProximoPasso); break;
    case 12: ex12(callbackProximoPasso); break;
    case 13: ex13(callbackProximoPasso); break;
    case 14: ex14(callbackProximoPasso); break;
    case 15: ex15(callbackProximoPasso); break;
    case 16: ex16(callbackProximoPasso); break;
    case 17: ex17(callbackProximoPasso); break;
    case 18: ex18(callbackProximoPasso); break;
  }
}

// Inicialização start do painel
mostrarMenu();