"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Dao_1 = require("./Dao");
var Concessionaria_1 = __importDefault(require("./Concessionaria"));
var Pessoa_1 = __importDefault(require("./Pessoa"));
var Carro_1 = __importDefault(require("./Carro"));
var Moto_1 = __importDefault(require("./Moto"));
var concessionaria = new Concessionaria_1.default('', []);
var pessoa = new Pessoa_1.default('', '');
var carro = new Carro_1.default('Corsa', 2);
var moto = new Moto_1.default('CG125');
var dao = new Dao_1.Dao();
dao.inserir(concessionaria);
var dao2 = new Dao_1.Dao();
dao2.atualizar(pessoa);
