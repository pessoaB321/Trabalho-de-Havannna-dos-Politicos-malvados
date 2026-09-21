"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const politico_1 = __importDefault(require("./politico"));
class Governador extends politico_1.default {
    //esfera estadual
    //poder executivo
    QuantSecre;
    EstadoName;
    constructor(nome, partido, esfera, poder, nomeLocalJob, EnderecoLocalJob, remuneracao, ProjectList, QuantMinistros, EstadoName) {
        super(nome, partido, esfera, poder, nomeLocalJob, EnderecoLocalJob, remuneracao, ProjectList);
        this.QuantSecre = QuantMinistros;
        this.EstadoName = EstadoName;
    }
    getQuantSecre() {
        return this.QuantSecre;
    }
    getEstadoName() {
        return this.EstadoName;
    }
    Mandato() {
        console.log(`O presidente ${this.nome} do partido ${this.partido} tem ${this.QuantSecre} secretários e trabalha em ${this.nomeLocalJob} localizado em ${this.EnderecoLocalJob}.`);
    }
    GerirPoli() {
        console.log("... Gerindo a politica do estado");
    }
    admRodovias() {
        console.log("ajeita a nossa rodovia filho da mãe");
    }
}
exports.default = Governador;
//# sourceMappingURL=governador.js.map