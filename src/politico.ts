//check
type regi = "municipal"|"estadual"|"federal";
type Power = 'executivo'|'legislativo'|'judiciario';

export default abstract class Politico{
    nome: string
    partido: string
    esfera: regi
    poder: Power
    nomeLocalJob: string
    EnderecoLocalJob: string
    remuneracao: number
    ProjectList: string[]
  
    constructor(
        nome: string,
    partido: string,
    esfera: regi,
    poder: Power,
    nomeLocalJob: string,
    EnderecoLocalJob: string,
    remuneracao: number,
    ProjectList: string[]
    ){
        this.nome=nome
        this.partido=partido
        this.esfera=esfera
        this.poder= poder
        this.nomeLocalJob=nomeLocalJob
        this.EnderecoLocalJob=EnderecoLocalJob
        this.remuneracao=remuneracao
        this .ProjectList= ProjectList
    }
    getNome():string{
        return this.nome
    }
    getPartido():string{
        return this.partido
    }
    getEsfera():string{
        return this.esfera
    }
    getnomeLocalJob():string{
        return this.nomeLocalJob
    }
    getEnderecoLocalJob():string{
        return this.EnderecoLocalJob
    }
    getremuneracao():number{
        return this.remuneracao
    }
    getProjectList():string[]{
        return this.ProjectList
    }
    getPoder():string{
        return this.poder
    }
    abstract Mandato():void
} 