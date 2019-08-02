import { DaoInterface } from './DaoInterface'
import Moto from './Moto'
 
export class MotoDao implements DaoInterface{
	nomeTabela: string = 'tb_moto'

	inserir(object: Moto): boolean {
		console.log('Lógica de Insert Moto')
		return true
	}

	atualizar(object: Moto): boolean{
		console.log('Lógica de Update Moto')
		return true
	}

	remover(id: number): Moto {
		console.log('Lógica de Delete Moto')
		return new Moto('')
	}

	selecionar(id: number): Moto{
		console.log('Lógica de Select Moto')
		return new Moto('')
	}

	selecionarTodos(): [any] {
		console.log('Lógica de GetAll Moto')
		return [new Moto('')]
	}
}
