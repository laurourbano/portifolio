programa
{
	
	funcao inicio()
	{
		real valor
		real porcentagem
		real desconto
		real juros
		
		escreva("Informe o Valor: ")
		leia(valor)
		
		escreva("Informe a porcentagem: ")
		leia(porcentagem)

		desconto = valor - ((valor*porcentagem) / 100)
		juros = valor + ((valor*porcentagem) / 100)

		escreva("\n" + valor + " com " + porcentagem + " de desconto é " + desconto)
		escreva("\n" + valor + " com " + porcentagem + " de juros é " + juros + "\n")
		
		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 460; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */