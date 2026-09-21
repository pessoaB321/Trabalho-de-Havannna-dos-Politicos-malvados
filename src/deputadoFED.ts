import Politico from './politico';
type regi = "municipal"|"estadual"|"federal";
type Power = 'executivo'|'legislativo'|'judiciario';

export default class FeDedePu extends Politico{
    //esfera estadual
    //poder executivo
    ListaCommission: string[]
    EstadoName: string

    constructor(nome: string,partido: string,
    esfera: regi,
    poder: Power,
    nomeLocalJob: string,
    EnderecoLocalJob: string,
    remuneracao: number,
    ProjectList: string[], ListaCommission:string[], EstadoName: string){
        super(nome, partido, esfera, poder, nomeLocalJob, EnderecoLocalJob, remuneracao, ProjectList)
        this.ListaCommission= ListaCommission
        this.EstadoName= EstadoName
    }
    getListaCommission():string[]{
        return this.ListaCommission
}
getEstadoName():string{
        return this.EstadoName
}
Mandato():void{
    console.log(`O presidente ${this.nome} do partido ${this.partido} tem ${this.ListaCommission} secretários e trabalha em ${this.nomeLocalJob} localizado em ${this.EnderecoLocalJob}.`);
}
}