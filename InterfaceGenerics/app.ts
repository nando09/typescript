import { Dao } from './Dao'
import Concessionaria from './Concessionaria'
import Pessoa from './Pessoa'
import Carro from './Carro'
import Moto from './Moto'

let concessionaria: Concessionaria = new Concessionaria('', [])
let pessoa: Pessoa = new Pessoa('', '')
let carro: Carro  = new Carro('Corsa', 2)
let moto: Moto = new Moto('CG125');

let dao: Dao<Concessionaria> = new Dao<Concessionaria>();

dao.inserir(concessionaria)


let dao2: Dao<Pessoa> = new Dao<Pessoa>()
dao2.atualizar(pessoa)
