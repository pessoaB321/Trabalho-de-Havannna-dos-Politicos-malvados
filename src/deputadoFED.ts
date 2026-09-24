import Politico from './politico';
type regi = "municipal"|"estadual"|"federal";
type Power = 'executivo'|'legislativo'|'judiciario';
import Precidente from './precidente';
export default class FeDedePu extends Politico{
    //esfera estadual
    //poder 
    bancadaBancadinha: string
    EstadoName: string

    constructor(nome: string,partido: string,
    esfera: regi,
    poder: Power,
    nomeLocalJob: string,
    EnderecoLocalJob: string,
    remuneracao: number,
    ProjectList: string[], bancadaBancadinha: string, EstadoName: string){
        super(nome, partido, esfera, poder, nomeLocalJob, EnderecoLocalJob, remuneracao, ProjectList)
       this.bancadaBancadinha=bancadaBancadinha
        this.EstadoName= EstadoName
    if (esfera == 'municipal' || esfera == 'estadual'){
            throw new Error("bip, tá errado o depu n ser federal aí man")
         }
        
        if (poder == 'executivo' || poder == 'judiciario'){
            throw new Error("bip, tá errado o depu n ser legislativo aí man")
         }

    }
    getbancadaBancadinha():string{
        return this.bancadaBancadinha
}
getEstadoName():string{
        return this.EstadoName
}

    setbancadaBancadinha():string{
        return this.bancadaBancadinha
}
setEstadoName():string{
        return this.EstadoName
}

/*  super(nome, partido, esfera, poder, nomeLocalJob, EnderecoLocalJob, remuneracao, ProjectList)
       this.bancadaBancadinha=bancadaBancadinha
        this.EstadoName= EstadoName*/ 
Mandato():void{
    console.log(`O deputado federal ${this.nome}, do partido ${this.partido}, atua na esfera ${this.esfera} e no poder ${this.poder}, trabalha em ${this.nomeLocalJob}, localizado em ${this.EnderecoLocalJob}. Remuneração: ${this.remuneracao}, projetos: ${this.ProjectList}, bancada: ${this.bancadaBancadinha}, estado: ${this.EstadoName}.`);
}



LEgislarPenal(NaguentoMais:string):void{
    console.log(`o deputado ${this.nome} legislou penalmente em ${NaguentoMais}`)
}
LEgislarCodigoTribu(NaguentoMais:string):void{
    console.log(`o deputado ${this.nome} legislou penalmente em ${NaguentoMais}`)
}

LeisHumanas_trabalhisas(NaguentoMais:string):void{
    console.log(`o deputado ${this.nome} legislou penalmente em ${NaguentoMais}`)
}
fiscalizarPrecdente(amongus:boolean):void{
 console.log(`O deputado ${this.nome} acha o precidente atual...`)
 if(amongus==true){
    console.log(`${amongus}, ou seja, confiável`)
 }else
    console.log(`${amongus}, ou seja,  mata ele`)

}

VotarPPA(votar:boolean):void{
    console.log(`O maldito deputado f ${this.nome} votou ${votar} no PPA`)
}
VotarLoa(votar:boolean):void{
    console.log(`O maldito deputado f ${this.nome} votou ${votar} no LLLLLLLLLLoa`)
}
VotarLdO(votar:boolean):void{
    console.log(`O maldito deputado f ${this.nome} votou ${votar} no ldo`)
}

DrogaDeLeisComplementares(textoTudoBem:string):void{
    const Maldicao= []
    console.log(`o deputado ${this.nome} fez a lei complementar de entre outras`+ Maldicao.push(textoTudoBem))
}
}
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