import { DaoInterface } from './DaoInterface'
import Pessoa from './Pessoa'
 
export class PessoaDao implements DaoInterface{
	nomeTabela: string = 'tb_pessoa'

	inserir(object: Pessoa): boolean {
		console.log('Lógica de Insert Pessoa')
		return true
	}

	atualizar(object: Pessoa): boolean{
		console.log('Lógica de Update Pessoa')
		return true
	}

	remover(id: number): Pessoa {
		console.log('Lógica de Delete Pessoa')
		return new Pessoa('', '')
	}

	selecionar(id: number): Pessoa{
		console.log('Lógica de Select Pessoa')
		return new Pessoa('', '')
	}

	selecionarTodos(): [any] {
		console.log('Lógica de GetAll Pessoa')
		return [new Pessoa('', '')]
	}
}
