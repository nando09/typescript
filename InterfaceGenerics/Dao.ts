import { DaoInterface } from './DaoInterface'

export class Dao<T> implements DaoInterface<T> {
	nomeTabela: string = ''

	inserir(object: T): boolean {
		console.log('Lógica de Insert')
		return true
	}

	atualizar(object: T): boolean{
		console.log('Lógica de Update')
		return true
	}

	remover(id: number): T {
		console.log('Lógica de Delete')
		return Object()
	}

	selecionar(id: number): T{
		console.log('Lógica de Select')
		return Object()
	}

	selecionarTodos(): [any] {
		console.log('Lógica de GetAll')
		return [Object()]
	}
}
