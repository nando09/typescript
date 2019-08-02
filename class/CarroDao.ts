import { DaoInterface } from './DaoInterface'
import Carro from './Carro'


export class CarroDao implements DaoInterface{
	nomeTabela: string = 'td_carro'

	inserir(Object: Carro): boolean{
		console.log("Lógica Insert Carro")
		return true
	}

	atualizar(Object: Carro): boolean{
		console.log("Lógica de Update Carro")
		return true
	}

	remover(id: number): Carro {
		console.log("Lógica de Delete Carro")
		return new Carro('', 1)
	}

	selecionar(id: number): Carro{
		console.log("Lógica de Select Carro")
		return new Carro('', 1)
	}

	selecionarTodos(): [any] {
		console.log("Lógica de GetAll Carro")
		return [new Carro('', 0)]
	}
}