"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const politico_1 = __importDefault(require("./politico"));
class Precidente extends politico_1.default {
    //esfera federal
    //poder executivo
    QuantMinistros;
    constructor(nome, partido, esfera, poder, nomeLocalJob, EnderecoLocalJob, remuneracao, ProjectList, QuantMinistros) {
        super(nome, partido, esfera, poder, nomeLocalJob, EnderecoLocalJob, remuneracao, ProjectList);
        this.QuantMinistros = QuantMinistros;
    }
    getQuantMinistros() {
        return this.QuantMinistros;
    }
    //Actions now lol
    NomearMinistro() {
        this.QuantMinistros.push('novo ministro');
        console.log('Membro adicionado');
    }
    AniquilarMinistro() {
        //console.log ('matar ministro'this.QuantMinistros.push)
        this.QuantMinistros.pop();
        console.log('Membro aniquilado com sucesso');
    }
    ComandarOsbetasdasForçasArmadas() {
        console.log('Comandando as forças armadas?');
    }
    REpresentarpais() {
        console.log(` representado o pais beta${this.nome}`);
    }
    Enviarseilaoque() {
        console.log(`Enviado por ${this.nome} para o exterior: PPA, DON e LOA`);
    }
    Mandato() {
        console.log(`O presidente ${this.nome} do partido ${this.partido} tem ${this.QuantMinistros} ministros e trabalha em ${this.nomeLocalJob} localizado em ${this.EnderecoLocalJob}.`);
    }
}
exports.default = Precidente;
//# sourceMappingURL=precidente.js.map