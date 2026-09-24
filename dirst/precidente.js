"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//check
const politico_1 = __importDefault(require("./politico"));
class Precidente extends politico_1.default {
    //esfera federal
    //poder executivo
    QuantMinistros;
    constructor(nome, partido, esfera, poder, nomeLocalJob, EnderecoLocalJob, remuneracao, ProjectList, QuantMinistros) {
        super(nome, partido, esfera, poder, nomeLocalJob, EnderecoLocalJob, remuneracao, ProjectList);
        this.QuantMinistros = QuantMinistros;
        if (esfera == 'municipal' || esfera == 'estadual') {
            throw new Error("vacilou, tá errado o precidente n ser dederal aí man");
        }
        if (poder == 'legislativo' || poder == 'judiciario') {
            throw new Error("vacilou, tá errado o governador n ser executivo aí man");
        }
    }
    getQuantMinistros() {
        return this.QuantMinistros;
    }
    setQuantMinistros() {
        return this.QuantMinistros;
    }
    //Actions now lol
    //mudei as duas primeiras funções para a que a senhora pediu...
    NomearMinistro(NewM) {
        const sominha = this.QuantMinistros + NewM;
        console.log(`O precidente ${this.nome} adicionou  ${NewM} a ${this.QuantMinistros} ministros betas, então são ${sominha}  `);
        return sominha;
    }
    AniquilarMinistro(Brutal) {
        const genocidio = this.QuantMinistros - Brutal;
        if (this.NomearMinistro(this.QuantMinistros) > 0) {
            //obs: Tá vendo a função aqui encima? Ela só serve com os atributos da classe Politica e presidente, lembra dessa heim
            if (this.QuantMinistros > Brutal) {
                console.log(`O preCidente ${this.nome} ANIQUILOU ${Brutal} de ${this.QuantMinistros} ministros ladroes betas, ou seja: ${genocidio}`);
            }
            else {
                throw new Error(`como assim man não precisa aniquilar tantos ministros assim, eles fizeram algo com seu cachorro?`);
            }
        }
        else {
            throw new Error(`biiiiiiiiiip, o presidente ${this.nome} é tão mixuruca que não tem ministr nehum, sobrou nada para o betinha hehehehhehhehhehheeheheh `);
            // HSSHHHHWEHARK UYECONSEGUIIIIIIIIIII... mais ou menos...
        }
    }
    ComandarOsbetasdasForçasArmadas(textoMotivacional) {
        console.log(textoMotivacional);
    }
    REpresentarpais() {
        console.log(` representado o pais beta${this.nome}`);
    }
    Enviarseilaoquedo_PPa_LoaEtals(que) {
        //é para ninguém entender mesmo ok?
        console.log(que);
    }
    Mandato() {
        console.log(`O presidente ${this.nome}, do partido ${this.partido}, atua na esfera ${this.esfera} e no poder ${this.poder}, trabalha em ${this.nomeLocalJob}, localizado em ${this.EnderecoLocalJob}. Remuneração: ${this.remuneracao}, projetos: ${this.ProjectList}, ministros: ${this.QuantMinistros}.`);
    }
    ProporLei(Nomedacoisa, propostaNe) {
        const ArrayTeste = Nomedacoisa;
        console.log(ArrayTeste.push(propostaNe), ArrayTeste + '    lei aprovada (?...)');
        return propostaNe;
        //return ArrayTeste n funciona bua bua aaaaaa-
    }
    AniquilarLei(vazioRoxo) {
        console.log("brutal" + this.ProporLei([], vazioRoxo));
    }
}
exports.default = Precidente;
//@ president@ é da esfera federal e do poder executivo. Tem uma quantidade de
//ministros. Como todo político, exerce um mandato, em que propõe, sanciona e veta
//leis e edita medidas provisórias. Tem como ações nomear e exonerar Ministros de
//Estado, comandar as Forças Armadas, representar o país em eventos
//internacionais, elaborar e enviar ao congresso o Plano Plurianual nacional(PPA), a
//Lei de Diretrizes Orçamentárias nacional (LDO) e a proposta de Lei Orçamentária Anual nacional(LOA).
//# sourceMappingURL=precidente.js.map