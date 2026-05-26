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
5 - Escreva um programa que exiba apenas os números pares de 1 a 20.
*******************************************************************************/
export function executar(proximo: () => void): void {
  const pares: number[] = [];
  for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) pares.push(i);
  }
  console.log("Números pares de 1 a 20:");
  console.log(pares.join(" → "));
  proximo();
}