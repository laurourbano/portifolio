programa
{
	
	funcao inicio()
	{
	//declaração das variáveis
		inteiro dividendo
		inteiro divisor
		inteiro resultado
		cadeia texto_1
		cadeia texto_2
		cadeia texto_3

		//definindo o texto para cada item
		texto_1 = "digite o dividendo: "
		texto_2 = "digite o divisor: "
		texto_3 = "o resultado da divisão é: "
		
		//solicita a entrada de um número ao usuário para ser o dividendo
		escreva(texto_1)
		//guarda o número digitado como variável
		leia(dividendo)
		//solicita a entrada de um novo número ao usuário para ser o divisor
		escreva(texto_2)
		//guarda o número digitado como variável
		leia(divisor)

		//realiza a divisão e guarda o resultado na variável (resultado)
		resultado = dividendo / divisor
		//mostra no console do portugol studio o resultado da variável interpolado com a string ("o resultado da divisão é: ")
		escreva(texto_3 + resultado)
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 212; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */