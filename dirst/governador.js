"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//check4
const politico_1 = __importDefault(require("./politico"));
class Governador extends politico_1.default {
    //esfera estadual
    //poder executivo clariceeeeeeeee
    QuantSecre;
    EstadoName;
    constructor(nome, partido, esfera, poder, nomeLocalJob, EnderecoLocalJob, remuneracao, ProjectList, QuantMinistros, EstadoName) {
        super(nome, partido, esfera, poder, nomeLocalJob, EnderecoLocalJob, remuneracao, ProjectList);
        this.QuantSecre = QuantMinistros;
        this.EstadoName = EstadoName;
        if (esfera == 'municipal' || esfera == 'federal') {
            throw new Error("bip, tá errado o governador n ser estadual aí man");
        }
        if (poder == 'legislativo' || poder == 'judiciario') {
            throw new Error("bip, tá errado o governador n ser executivo aí man");
        }
    }
    getQuantSecre() {
        return this.QuantSecre;
    }
    getEstadoName() {
        return this.EstadoName;
    }
    Mandato() {
        console.log(`O governador ${this.nome}, do partido ${this.partido}, atua na esfera ${this.esfera} e no poder ${this.poder}, trabalha em ${this.nomeLocalJob}, localizado em ${this.EnderecoLocalJob}. Remuneração: ${this.remuneracao}, projetos: ${this.ProjectList}, secretários: ${this.QuantSecre}, estado: ${this.EstadoName}.`);
    }
    GerirPoli(tica) {
        console.log(tica);
    }
    admRodovias(admburro) {
        console.log(admburro);
    }
    pec(texto) {
        console.log(texto);
    }
    SancionarAlgo(roubar) {
        console.log(`a decição do governador ${this.nome} é  ${roubar}`);
        if (roubar == true) {
            console.log(`logo, o governador ${this.nome} sancionou a... a alguma proposta aí`);
        }
        else {
            console.log(`logo, o governador ${this.nome} não sancionou a... a alguma proposta aí por não atender a seus roubos`);
        }
    }
    AlertCalamaty(avisar) {
        console.log(`devido a situação de calamidade, o governador ${this.nome} dá situação como ${avisar} para o estado de calamidade em ${this.EstadoName}`);
    }
}
exports.default = Governador;
//# sourceMappingURL=governador.js.map