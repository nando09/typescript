import Carro from './Carro'
import Moto from './Moto'
import Concessionaria from './Concessionaria'

let carro = new Carro('Agile', 4)
let moto = new Moto('CG150')

moto.acelerar();
moto.acelerar();
moto.acelerar();

carro.acelerar();

let concessionaria = new Concessionaria('', [])


console.log(moto);
console.log(carro);
console.log(concessionaria.horarioDeFuncionamento())
