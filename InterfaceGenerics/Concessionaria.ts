import { ConcessionariaInterface } from './ConcessionariaInterface'
import Carro from './Carro'

export default class Concessionaria implements ConcessionariaInterface{
	private endereco: string
	// any é qualquer tipo de dados
	private listaDeCarros: Array<Carro>

	constructor(enderedo:string, listaCarro: Array<Carro>){
		this.endereco = enderedo
		this.listaDeCarros = listaCarro
	}

	public fornecerEndereco(): string {
		return this.endereco
	}

	public mostrarListaCarros(): Array<Carro> {
		return this.listaDeCarros
	}

	public horarioDeFuncionamento(): string {
		return 'De seg. á sex. das 8hrs ás 18hrs e sábado das 8hrs as 12hrs'
	}
}