"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Carro_1 = __importDefault(require("./Carro"));
var CarroDao = /** @class */ (function () {
    function CarroDao() {
        this.nomeTabela = 'td_carro';
    }
    CarroDao.prototype.inserir = function (Object) {
        console.log("Lógica Insert Carro");
        return true;
    };
    CarroDao.prototype.atualizar = function (Object) {
        console.log("Lógica de Update Carro");
        return true;
    };
    CarroDao.prototype.remover = function (id) {
        console.log("Lógica de Delete Carro");
        return new Carro_1.default('', 1);
    };
    CarroDao.prototype.selecionar = function (id) {
        console.log("Lógica de Select Carro");
        return new Carro_1.default('', 1);
    };
    CarroDao.prototype.selecionarTodos = function () {
        console.log("Lógica de GetAll Carro");
        return [new Carro_1.default('', 0)];
    };
    return CarroDao;
}());
exports.CarroDao = CarroDao;
