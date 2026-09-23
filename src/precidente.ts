//check
import Politico from './politico';
type regi = "municipal"|"estadual"|"federal";
type Power = 'executivo'|'legislativo'|'judiciario';

export default class Precidente extends Politico{
    //esfera federal
    //poder executivo
    QuantMinistros: string[]

    constructor(nome: string,partido: string,
    esfera: regi,
    poder: Power,
    nomeLocalJob: string,
    EnderecoLocalJob: string,
    remuneracao: number,
    ProjectList: string[], QuantMinistros: string[] ){
        super(nome, partido, esfera, poder, nomeLocalJob, EnderecoLocalJob, remuneracao, ProjectList)
        this.QuantMinistros= QuantMinistros
        if (esfera == 'municipal' || esfera == 'estadual'){
            throw new Error("vacilou, tá errado o precidente n ser dederal aí man")
         }
        
        if (poder == 'legislativo' || poder == 'judiciario'){
            throw new Error("vacilou, tá errado o governador n ser executivo aí man")
         }
        
    }
    getQuantMinistros():string[]{
        return this.QuantMinistros
}
 //Actions now lol
 NomearMinistro(NewM:string):void{
   
    this.QuantMinistros.push(NewM)
    console.log (`membro associado com sucesso }.()` )
    //console.log (`${this.QuantMinistros[NewM]}`)
    console.log(`Lista de ministros vivos atualizada: ${this.QuantMinistros}`)
}
 AniquilarMinistro():void{
    //console.log ('matar ministro'this.QuantMinistros.push)
    this.QuantMinistros.pop()
    console.log ('Membro aniquilado com sucesso')
    console.log(`Lista de ministros vivos atualizada: ${this.QuantMinistros}`)
}

ComandarOsbetasdasForçasArmadas(textoMotivacional:string):void{
    console.log(textoMotivacional)
}
REpresentarpais():void{
    console.log(` representado o pais beta${this.nome}`)
}
Enviarseilaoquedo_PPa_LoaEtals(que:string):void{
    //é para ninguém entender mesmo ok?
    console.log(que)
}

Mandato(): void {
    console.log(`O presidente ${this.nome}, do partido ${this.partido}, atua na esfera ${this.esfera} e no poder ${this.poder}, trabalha em ${this.nomeLocalJob}, localizado em ${this.EnderecoLocalJob}. Remuneração: ${this.remuneracao}, projetos: ${this.ProjectList}, ministros: ${this.QuantMinistros}.`);
}


ProporLei(Nomedacoisa:string[],propostaNe: string,): string{
    const ArrayTeste= Nomedacoisa
    console.log(ArrayTeste.push(propostaNe) , ArrayTeste+ '    lei aprovada (?...)')
    return propostaNe

    //return ArrayTeste n funciona bua bua aaaaaa-
    

}
AniquilarLei(vazioRoxo: string): void{
    console.log("brutal"+ this.ProporLei([],vazioRoxo))
}

}

//@ president@ é da esfera federal e do poder executivo. Tem uma quantidade de
//ministros. Como todo político, exerce um mandato, em que propõe, sanciona e veta
//leis e edita medidas provisórias. Tem como ações nomear e exonerar Ministros de
//Estado, comandar as Forças Armadas, representar o país em eventos
//internacionais, elaborar e enviar ao congresso o Plano Plurianual nacional(PPA), a
//Lei de Diretrizes Orçamentárias nacional (LDO) e a proposta de Lei Orçamentária Anual nacional(LOA).