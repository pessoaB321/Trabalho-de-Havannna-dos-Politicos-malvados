import Politico from './politico';
type regi = "municipal"|"estadual"|"federal";
type Power = 'executivo'|'legislativo'|'judiciario';

export default class Senadoro extends Politico{
    //esfera estadual
    //poder executivo
    bancadinha: string 


    constructor(nome: string,partido: string,
    esfera: regi,
    poder: Power,
    nomeLocalJob: string,
    EnderecoLocalJob: string,
    remuneracao: number,bancadinha: string,
    ProjectList: string[], ){
        super(nome, partido, esfera, poder, nomeLocalJob, EnderecoLocalJob, remuneracao, ProjectList)
       this.bancadinha= bancadinha
    }
    getBancadinha():string{
        return this.bancadinha
}

Mandato():void{
    console.log(`O presidente ${this.nome} do partido ${this.partido} tem  secretários e trabalha em ${this.nomeLocalJob} localizado em ${this.EnderecoLocalJob}.`);
}
}