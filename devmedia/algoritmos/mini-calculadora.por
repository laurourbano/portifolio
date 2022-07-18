programa
{
	
	funcao inicio()
	{
		real numero1
		real numero2
		caracter operacao

		escreva("Digite o primeiro número: ")
		leia(numero1)

		escreva("Digite o segundo número: ")
		leia(numero2)

		escreva("\nEscolha a operação que deseja efetuar: \n")
		
		escreva("\n+ para soma")
		escreva("\n- para subtração")
		escreva("\n* para multiplicação")
		escreva("\n/ para divisão\n\n")
		leia(operacao)

		escreva("\nVocê escolheu: " + operacao)
		escreva ("\nResultado: " + numero1 + " " + operacao + " " + numero2 + " = ")

		se(operacao=='+')
		{
			escreva(numero1+numero2)
		}
		se(operacao=='-')
		{
			escreva(numero1-numero2)
		}
		se(operacao=='*')
		{
			escreva(numero1*numero2)
		}
		se(operacao=='/')
		{
			escreva(numero1/numero2)
		}
		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 386; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */