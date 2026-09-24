"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const politico_1 = __importDefault(require("./politico"));
class FeDedePu extends politico_1.default {
    //esfera estadual
    //poder 
    bancadaBancadinha;
    EstadoName;
    constructor(nome, partido, esfera, poder, nomeLocalJob, EnderecoLocalJob, remuneracao, ProjectList, bancadaBancadinha, EstadoName) {
        super(nome, partido, esfera, poder, nomeLocalJob, EnderecoLocalJob, remuneracao, ProjectList);
        this.bancadaBancadinha = bancadaBancadinha;
        this.EstadoName = EstadoName;
        if (esfera == 'municipal' || esfera == 'estadual') {
            throw new Error("bip, tá errado o depu n ser federal aí man");
        }
        if (poder == 'executivo' || poder == 'judiciario') {
            throw new Error("bip, tá errado o depu n ser legislativo aí man");
        }
    }
    getbancadaBancadinha() {
        return this.bancadaBancadinha;
    }
    getEstadoName() {
        return this.EstadoName;
    }
    setbancadaBancadinha() {
        return this.bancadaBancadinha;
    }
    setEstadoName() {
        return this.EstadoName;
    }
    /*  super(nome, partido, esfera, poder, nomeLocalJob, EnderecoLocalJob, remuneracao, ProjectList)
           this.bancadaBancadinha=bancadaBancadinha
            this.EstadoName= EstadoName*/
    Mandato() {
        console.log(`O deputado federal ${this.nome}, do partido ${this.partido}, atua na esfera ${this.esfera} e no poder ${this.poder}, trabalha em ${this.nomeLocalJob}, localizado em ${this.EnderecoLocalJob}. Remuneração: ${this.remuneracao}, projetos: ${this.ProjectList}, bancada: ${this.bancadaBancadinha}, estado: ${this.EstadoName}.`);
    }
    LEgislarPenal(NaguentoMais) {
        console.log(`o deputado ${this.nome} legislou penalmente em ${NaguentoMais}`);
    }
    LEgislarCodigoTribu(NaguentoMais) {
        console.log(`o deputado ${this.nome} legislou penalmente em ${NaguentoMais}`);
    }
    LeisHumanas_trabalhisas(NaguentoMais) {
        console.log(`o deputado ${this.nome} legislou penalmente em ${NaguentoMais}`);
    }
    fiscalizarPrecdente(amongus) {
        console.log(`O deputado ${this.nome} acha o precidente atual...`);
        if (amongus == true) {
            console.log(`${amongus}, ou seja, confiável`);
        }
        else
            console.log(`${amongus}, ou seja,  mata ele`);
    }
    VotarPPA(votar) {
        console.log(`O maldito deputado f ${this.nome} votou ${votar} no PPA`);
    }
    VotarLoa(votar) {
        console.log(`O maldito deputado f ${this.nome} votou ${votar} no LLLLLLLLLLoa`);
    }
    VotarLdO(votar) {
        console.log(`O maldito deputado f ${this.nome} votou ${votar} no ldo`);
    }
    DrogaDeLeisComplementares(textoTudoBem) {
        const Maldicao = [];
        console.log(`o deputado ${this.nome} fez a lei complementar de entre outras` + Maldicao.push(textoTudoBem));
    }
}
exports.default = FeDedePu;
/*
Cada deputado federal tem a bancada de que faz parte (ex: Ruralista, Ambientalista,
Governista, etc.). ceck
 Exerce o mandato em que legislam sobre o código penal check
 , sobre o
código tributário e sobre as leis trabalhistas
 e fiscaliza o presidente da república.
Tem como ações votar PECs (Projeto de Emenda à Constituição Federal), criar a
CPI nacional, votar PPA, LDO e LOA nacionais e propõr leis complementares.
*/ 
//# sourceMappingURL=deputadoFED.js.map