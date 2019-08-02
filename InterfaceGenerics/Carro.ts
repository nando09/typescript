import Veiculo from './Veiculo'

export default class Carro extends Veiculo {
	private numeroPortas: number

	constructor(modelo: string, numeroPortas: number){
		super()
		this.modelo = modelo
		this.numeroPortas = numeroPortas
	}
}

// /* Caso queira exporta variaveis para o outro arquivo */
// export let qualquer_coisa: string = 'Teste' 