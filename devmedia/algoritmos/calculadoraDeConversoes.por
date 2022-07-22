programa
{
	funcao inicio()
	{
		inteiro opcao
		real valor
		cadeia mensagem
		faca
		{
			escreva("Calculadora de Conversões:")
			
			escreva("Escolha uma opção:\n\n")
			
			escreva("\n1 - Celsius para Fahrenheit")
			escreva("\n2 - Quilômetros para Milhas")
			escreva("\n3 - Sair\n\n")
						
			leia(opcao)

			se(opcao==3)
			{
				escreva("\nSistema Finalizado.")
				pare
			}
			
			escolha(opcao)
			{
				caso 1:
					escreva("\nInforme o valor que deseja converter: ")
					leia(valor)
					
					real fahrenheit
					fahrenheit = (valor * 1.8) + 32

					mensagem = valor + "ºC equivale a " + fahrenheit + "ºF"
					pare
				caso 2:
					escreva("\nInforme o valor que deseja converter: ")
					leia(valor)
					
					real milhas
					milhas = valor * 0.62137

					mensagem = valor + "km equivale a " + milhas + "mi"
					pare
				caso contrario:
					mensagem = "Opção Inválida"
					pare
				}
				escreva(mensagem+"\n\n")
			}
		enquanto(opcao!=3)
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 293; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */