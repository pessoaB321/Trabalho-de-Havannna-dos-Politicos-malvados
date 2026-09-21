"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const politico_1 = __importDefault(require("./politico"));
class DEPUestaDU extends politico_1.default {
    //esfera estadual
    //poder executivo
    ListaCommission;
    EstadoName;
    constructor(nome, partido, esfera, poder, nomeLocalJob, EnderecoLocalJob, remuneracao, ProjectList, ListaCommission, EstadoName) {
        super(nome, partido, esfera, poder, nomeLocalJob, EnderecoLocalJob, remuneracao, ProjectList);
        this.ListaCommission = ListaCommission;
        this.EstadoName = EstadoName;
    }
    getListaCommission() {
        return this.ListaCommission;
    }
    getEstadoName() {
        return this.EstadoName;
    }
    Mandato() {
        console.log(`O presidente ${this.nome} do partido ${this.partido} tem ${this.ListaCommission} secretários e trabalha em ${this.nomeLocalJob} localizado em ${this.EnderecoLocalJob}.`);
    }
}
exports.default = DEPUestaDU;
//# sourceMappingURL=deputadoEst.js.map