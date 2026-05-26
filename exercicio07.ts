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
7 - Escreva um programa que encontre o maior número em um array de inteiros.
*******************************************************************************/
export function executar(proximo: () => void): void {
  const dados = [15, 89, 4, 23, 71, 42];
  console.log("Analisando o seguinte array estático:", dados);
  const maior = Math.max(...dados);
  console.log(`O maior número encontrado é: ${maior}`);
  proximo();
}