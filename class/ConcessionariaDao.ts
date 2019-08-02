import { DaoInterface } from './DaoInterface'
import Concessionaria from './Concessionaria'
 
export class ConcessionariaDao implements DaoInterface{
	nomeTabela: string = 'tb_concessionaria'

	inserir(object: Concessionaria): boolean {
		console.log('Lógica de Insert Concessionaria')
		return true
	}

	atualizar(object: Concessionaria): boolean{
		console.log('Lógica de Update Concessionaria')
		return true
	}

	remover(id: number): Concessionaria {
		console.log('Lógica de Delete Concessionaria')
		return new Concessionaria('', [])
	}

	selecionar(id: number): Concessionaria{
		console.log('Lógica de Select Concessionaria')
		return new Concessionaria('', [])
	}

	selecionarTodos(): [any] {
		console.log('Lógica de GetAll Concessionaria')
		return [new Concessionaria('', [])]
	}
}