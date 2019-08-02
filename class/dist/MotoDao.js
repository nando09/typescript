"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Moto_1 = __importDefault(require("./Moto"));
var MotoDao = /** @class */ (function () {
    function MotoDao() {
        this.nomeTabela = 'tb_moto';
    }
    MotoDao.prototype.inserir = function (object) {
        console.log('Lógica de Insert Moto');
        return true;
    };
    MotoDao.prototype.atualizar = function (object) {
        console.log('Lógica de Update Moto');
        return true;
    };
    MotoDao.prototype.remover = function (id) {
        console.log('Lógica de Delete Moto');
        return new Moto_1.default('');
    };
    MotoDao.prototype.selecionar = function (id) {
        console.log('Lógica de Select Moto');
        return new Moto_1.default('');
    };
    MotoDao.prototype.selecionarTodos = function () {
        console.log('Lógica de GetAll Moto');
        return [new Moto_1.default('')];
    };
    return MotoDao;
}());
exports.MotoDao = MotoDao;
