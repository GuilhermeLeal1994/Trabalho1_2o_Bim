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
10 - Escreva um programa que ordene um array de números em ordem crescente.
*******************************************************************************/
export function executar(proximo: () => void): void {
  const itens = [50, 10, 40, 30, 20];
  console.log("Array original desordenado:", itens);
  const ordenado = [...itens].sort((a, b) => a - b);
  console.log("Array ordenado de forma crescente:", ordenado);
  proximo();
}