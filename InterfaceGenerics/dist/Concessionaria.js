"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
    Concessionaria.prototype.horarioDeFuncionamento = function () {
        return 'De seg. á sex. das 8hrs ás 18hrs e sábado das 8hrs as 12hrs';
    };
    return Concessionaria;
}());
exports.default = Concessionaria;
