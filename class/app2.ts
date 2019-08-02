// class Carro {
// 	private modelo: string
// 	private numeroPortas: number
// 	private velocidade: number = 0

// 	constructor(modelo: string, numeroPortas: number){
// 		this.modelo = modelo
// 		this.numeroPortas = numeroPortas

// 	}

// 	// void é que o metodo não tem retorno
// 	public acelerar(): void {
// 		this.velocidade = this.velocidade + 10
// 	}

// 	public parar(): void {
// 		this.velocidade = 0
// 	}

// 	public velocidadeAtual(): number {
// 		return this.velocidade
// 	}
// }


// class Concessionaria {
// 	private endereco: string
// 	// any é qualquer tipo de dados
// 	private listaDeCarros: Array<Carro>

// 	constructor(enderedo:string, listaCarro: Array<Carro>){
// 		this.endereco = enderedo
// 		this.listaDeCarros = listaCarro
// 	}

// 	public fornecerEndereco(): string {
// 		return this.endereco
// 	}

// 	public mostrarListaCarros(): Array<Carro> {
// 		return this.listaDeCarros
// 	}
// }

// class Pessoa {
// 	private nome: string
// 	private carroPreferido: string
// 	private carro: Carro

// 	constructor(nome:string, carroPreferido:string){
// 		this.nome = nome
// 		this.carroPreferido = carroPreferido
// 	}

// 	public dizerNome(): string {
// 		return this.nome
// 	}

// 	public dizerCarroPrefetido(): string {
// 		return this.carroPreferido
// 	}

// 	public comprarCarro(carro: Carro): void {
// 		this.carro = carro
// 	}

// 	public dizerCarroTem(): Carro {
// 		return this.carro
// 	}
// }

// // CLASS CARRO
// let carroA = new Carro('Veloster', 3)
// console.log(carroA)
// carroA.acelerar()
// console.log(carroA)
// carroA.acelerar()
// carroA.acelerar()
// console.log(carroA)


// // CLASS CONCESSIONARIO
// let concessionaria = new Concessionaria('Av. Paulista')
// console.log(concessionaria)


// // // CLASS PESSOA
// let pessoa = new Pessoa('Fernando Batista', 'Veloster')
// console.log(pessoa.dizerCarroPrefetido())


// /* Importação sem sem default carros */
// import { Carro } from './Carro'
// import { Pessoa } from './Pessoa'
// import { Concessionaria } from './Concessionaria'


/* Importação default carros */
import Carro from './Carro'
import Pessoa from './Pessoa'
import Concessionaria from './Concessionaria'


/* Caso de importação default , e importação normal como { qualquer_coisa } */
// import Carro, { qualquer_coisa } from './Carro'


/* Caso queira importa variaveis de o outro arquivo, tratamos do modo abaixo. E podendo tratar como apelido com "as x" o nome da varialvel vai ser "x" aparti de agora */
// import { Carro, qualquer_coisa as x} from './Carro'

/* Criar carros */
let carroA = new Carro('Veloster', 3)
let carroB = new Carro('Dodge Journey', 4)
let carroC = new Carro('Cerato', 4)

/* Lista de carros da concessionaria, da para fazer dos dois jeitos nas proximos */
// let listaCarros: Array<Carro> = [carroA, carroB, carroC]
let listaCarros: Carro[] = [carroA, carroB, carroC]

let concessionaria = new Concessionaria('Av. Paulista', listaCarros)

/* Exibir listas de carros */
// console.log(concessionaria.mostrarListaCarros())

/* Comprar carro */
let cliente = new Pessoa('Joaquim', 'Veloster')
// console.log(cliente.dizerCarroPrefetido())

concessionaria.mostrarListaCarros().map((carro: Carro) => {
	if (carro['modelo'] == cliente.dizerCarroPrefetido()){
		cliente.comprarCarro(carro)
		// console.log(carro)
	}
})

console.log(cliente.dizerCarroTem())