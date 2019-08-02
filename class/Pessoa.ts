import Carro from './Carro'

export default class Pessoa {
	private nome: string
	private carroPreferido: string
	private carro: Carro

	constructor(nome:string, carroPreferido:string){
		this.nome = nome
		this.carroPreferido = carroPreferido
	}

	public dizerNome(): string {
		return this.nome
	}

	public dizerCarroPrefetido(): string {
		return this.carroPreferido
	}

	public comprarCarro(carro: Carro): void {
		this.carro = carro
	}

	public dizerCarroTem(): Carro {
		return this.carro
	}
}