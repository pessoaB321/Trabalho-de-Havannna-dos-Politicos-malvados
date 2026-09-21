import Politico from './politico';
type regi = "municipal"|"estadual"|"federal";
type Power = 'executivo'|'legislativo'|'judiciario';

export default class Governador extends Politico{
    //esfera estadual
    //poder executivo
    QuantSecre: number
    EstadoName: string

    constructor(nome: string,partido: string,
    esfera: regi,
    poder: Power,
    nomeLocalJob: string,
    EnderecoLocalJob: string,
    remuneracao: number,
    ProjectList: string[], QuantMinistros:number, EstadoName: string){
        super(nome, partido, esfera, poder, nomeLocalJob, EnderecoLocalJob, remuneracao, ProjectList)
        this.QuantSecre= QuantMinistros
        this.EstadoName= EstadoName
    }
    getQuantSecre():number{
        return this.QuantSecre
}
getEstadoName():string{
        return this.EstadoName
}
Mandato():void{
    console.log(`O presidente ${this.nome} do partido ${this.partido} tem ${this.QuantSecre} secretários e trabalha em ${this.nomeLocalJob} localizado em ${this.EnderecoLocalJob}.`);
}
GerirPoli():void{
    console.log("... Gerindo a politica do estado")
}
admRodovias(): void{
    console.log ("ajeita a nossa rodovia filho da mãe")
}
}