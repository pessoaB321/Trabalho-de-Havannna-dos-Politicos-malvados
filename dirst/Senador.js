"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const politico_1 = __importDefault(require("./politico"));
class Senadoro extends politico_1.default {
    //esfera estadual
    //poder executivo
    bancadinha;
    constructor(nome, partido, esfera, poder, nomeLocalJob, EnderecoLocalJob, remuneracao, bancadinha, ProjectList) {
        super(nome, partido, esfera, poder, nomeLocalJob, EnderecoLocalJob, remuneracao, ProjectList);
        this.bancadinha = bancadinha;
    }
    getBancadinha() {
        return this.bancadinha;
    }
    Mandato() {
        console.log(`O presidente ${this.nome} do partido ${this.partido} tem  secretários e trabalha em ${this.nomeLocalJob} localizado em ${this.EnderecoLocalJob}.`);
    }
}
exports.default = Senadoro;
//# sourceMappingURL=Senador.js.map