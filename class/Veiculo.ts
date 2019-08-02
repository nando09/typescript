export default class Veiculo {
	protected modelo: string
	protected velocidade: number = 0

	// void é que o metodo não tem retorno
	public acelerar(): void {
		this.velocidade = this.velocidade + 10
	}

	public parar(): void {
		this.velocidade = 0
	}

	public velocidadeAtual(): number {
		return this.velocidade
	}
}

// /* Caso queira exporta variaveis para o outro arquivo */
// export let qualquer_coisa: string = 'Teste' 