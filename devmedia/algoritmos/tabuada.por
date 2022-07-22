programa
{
	
	funcao inicio()
	{
		
	inteiro multiplicador
	inteiro contador = 0
	inteiro resultado

	escreva("Sistema de tabuada\n\n")

	escreva("Informe um número de 1 a 10 para ver a tabuada:\n\n")
	leia(multiplicador)

	escreva("\nTabuada de " + multiplicador + "\n\n")

	enquanto(contador<=10)
	{
		resultado = contador * multiplicador
		escreva(contador + " x " + multiplicador + " = " + resultado + "\n")
		contador++
	}

	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 299; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */