"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Dao = /** @class */ (function () {
    function Dao() {
        this.nomeTabela = '';
    }
    Dao.prototype.inserir = function (object) {
        console.log('Lógica de Insert');
        return true;
    };
    Dao.prototype.atualizar = function (object) {
        console.log('Lógica de Update');
        return true;
    };
    Dao.prototype.remover = function (id) {
        console.log('Lógica de Delete');
        return Object();
    };
    Dao.prototype.selecionar = function (id) {
        console.log('Lógica de Select');
        return Object();
    };
    Dao.prototype.selecionarTodos = function () {
        console.log('Lógica de GetAll');
        return [Object()];
    };
    return Dao;
}());
exports.Dao = Dao;
