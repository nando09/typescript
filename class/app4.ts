import { ConcessionariaDao } from './ConcessionariaDao'
import Concessionaria from './Concessionaria'

import { PessoaDao } from './PessoaDao'
import Pessoa from './Pessoa'

import { CarroDao } from './CarroDao'
import Carro from './Carro'

let dao: ConcessionariaDao = new ConcessionariaDao()
let concessionaria: Concessionaria = new Concessionaria('', [])
// let pessoa = new Pessoa('Doria', 'Cerato');

dao.inserir(concessionaria);

let dao2 = new PessoaDao()
let pessoa: Pessoa = new Pessoa('', '')

dao2.atualizar(pessoa);

let dao3 = new CarroDao()
let carro = new Carro('Corsa', 2)

dao3.inserir(carro);


import {MotoDao} from './MotoDao'
import  Moto from './Moto'

let dao4 = new MotoDao();
let moto = new Moto('CG125');

dao4.remover(2)
