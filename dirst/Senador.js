"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//check
const politico_1 = __importDefault(require("./politico"));
class Senadoro extends politico_1.default {
    bancadinha;
    constructor(nome, partido, esfera, poder, nomeLocalJob, EnderecoLocalJob, remuneracao, bancadinha, ProjectList) {
        super(nome, partido, esfera, poder, nomeLocalJob, EnderecoLocalJob, remuneracao, ProjectList);
        this.bancadinha = bancadinha;
    }
    getBancadinha() {
        return this.bancadinha;
    }
    Mandato() {
        console.log(`Senador ${this.nome}, do partido ${this.partido}, atua na esfera ${this.esfera} e no poder ${this.poder}, trabalha em ${this.nomeLocalJob}, localizado em ${this.EnderecoLocalJob}. Remuneração: ${this.remuneracao}, bancada: ${this.bancadinha}, projetos: ${this.ProjectList}.`);
    }
    LegislarAlgo() {
        //relacionar magicamente com array teste...
    }
    AutorizarAlgo(uou) {
        console.log(`Senador corrupto ${this.nome} autorizou algo ${uou}`);
    }
    AprovarALS(roubar) {
        //autoridasdes de alto escalão
        const Betinhas = ['silvio santos'];
        console.log(Betinhas.push(roubar), Betinhas + ' alguém aprovado ');
        return roubar;
    }
    julgarCrimes(oque, julgamento) {
        console.log(`O senador ${this.nome} está julgando ${oque} e o resultado do julgamento é ${julgamento}`);
    }
    representarInteresses(assunto) {
        console.log(`O senador ${this.nome} está representando interesses de ${assunto}`);
    }
}
exports.default = Senadoro;
//# sourceMappingURL=Senador.js.map