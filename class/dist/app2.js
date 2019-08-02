"use strict";
var Carro = /** @class */ (function () {
    function Carro(modelo, numeroPortas) {
        this.velocidade = 0;
        this.modelo = modelo;
        this.numeroPortas = numeroPortas;
    }
    // void é que o metodo não tem retorno
    Carro.prototype.acelerar = function () {
        this.velocidade = this.velocidade + 10;
    };
    Carro.prototype.parar = function () {
        this.velocidade = 0;
    };
    Carro.prototype.velocidadeAtual = function () {
        return this.velocidade;
    };
    return Carro;
}());
var Concessionaria = /** @class */ (function () {
    function Concessionaria(enderedo, listaCarro) {
        this.endereco = enderedo;
        this.listaDeCarros = listaCarro;
    }
    Concessionaria.prototype.fornecerEndereco = function () {
        return this.endereco;
    };
    Concessionaria.prototype.mostrarListaCarros = function () {
        return this.listaDeCarros;
    };
    return Concessionaria;
}());
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, carroPreferido) {
        this.nome = nome;
        this.carroPreferido = carroPreferido;
    }
    Pessoa.prototype.dizerNome = function () {
        return this.nome;
    };
    Pessoa.prototype.dizerCarroPrefetido = function () {
        return this.carroPreferido;
    };
    Pessoa.prototype.comprarCarro = function (carro) {
        this.carro = carro;
    };
    Pessoa.prototype.dizerCarroTem = function () {
        return this.carro;
    };
    return Pessoa;
}());
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
/* Criar carros */
var carroA = new Carro('Veloster', 3);
var carroB = new Carro('Dodge Journey', 4);
var carroC = new Carro('Cerato', 4);
/* Lista de carros da concessionaria, da para fazer dos dois jeitos nas proximos */
// let listaCarros: Array<Carro> = [carroA, carroB, carroC]
var listaCarros = [carroA, carroB, carroC];
var concessionaria = new Concessionaria('Av. Paulista', listaCarros);
/* Exibir listas de carros */
// console.log(concessionaria.mostrarListaCarros())
/* Comprar carro */
var cliente = new Pessoa('Joaquim', 'Veloster');
// console.log(cliente.dizerCarroPrefetido())
concessionaria.mostrarListaCarros().map(function (carro) {
    if (carro['modelo'] == cliente.dizerCarroPrefetido()) {
        cliente.comprarCarro(carro);
        // console.log(carro)
    }
});
console.log(cliente.dizerCarroTem());
