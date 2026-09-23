//check
import Politico from './politico';
type regi = "municipal"|"estadual"|"federal";
type Power = 'executivo'|'legislativo'|'judiciario';

export default class Senadoro extends Politico{
    
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
    console.log(`Senador ${this.nome}, do partido ${this.partido}, atua na esfera ${this.esfera} e no poder ${this.poder}, trabalha em ${this.nomeLocalJob}, localizado em ${this.EnderecoLocalJob}. Remuneração: ${this.remuneracao}, bancada: ${this.bancadinha}, projetos: ${this.ProjectList}.`);
}

LegislarAlgo(): void{
//relacionar magicamente com array teste...
}
AutorizarAlgo(uou:boolean):void{
       console.log(`Senador corrupto ${this.nome} autorizou algo ${uou}`)
}
AprovarALS(roubar:string):string{
    //autoridasdes de alto escalão
    const Betinhas= ['silvio santos']
    console.log(Betinhas.push(roubar) ,  Betinhas+ ' alguém aprovado ')
    return roubar
}
julgarCrimes(oque:string, julgamento:string):void{
    console.log(`O senador ${this.nome} está julgando ${oque} e o resultado do julgamento é ${julgamento}`)
}
representarInteresses(assunto:string):void
{
    console.log(`O senador ${this.nome} está representando interesses de ${assunto}`)
}
}