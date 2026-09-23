//check
import Politico from './politico';
type regi = "municipal"|"estadual"|"federal";
type Power = 'executivo'|'legislativo'|'judiciario';

export default class DEPUestaDU extends Politico{
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
         if (esfera == 'municipal' || esfera == 'federal'){
            throw new Error("bip, tá errado o depu n ser estadual aí man")
         }
        
        if (poder == 'executivo' || poder == 'judiciario'){
            throw new Error("bip, tá errado o depu n ser legislativo aí man")
         }
         if (ListaCommission.length<1){
            throw new Error("bip, que que isso man, para de ser preguisoço e participa de uma comissão aí ")
         }
        
    }
    getListaCommission():string[]{
        return this.ListaCommission
}
getEstadoName():string{
        return this.EstadoName
}
Mandato():void{
    console.log(`O deputado estadual ${this.nome}, do partido ${this.partido}, atua na esfera ${this.esfera} e no poder ${this.poder}, trabalha em ${this.nomeLocalJob}, localizado em ${this.EnderecoLocalJob}. Remuneração: ${this.remuneracao}, projetos: ${this.ProjectList}, comissão: ${this.ListaCommission}, estado: ${this.EstadoName}.`);
}

legislarAlgo(Testomuitointerressante:string): void{
  console.log(`O deputado ${this.nome} está legislando sobre ${Testomuitointerressante}`)
}
VotarPPA(votar:boolean):void{
    console.log(`O maldito deputado  ${this.nome} votou ${votar} no PPA`)
}
VotarLoa(votar:boolean):void{
    console.log(`O maldito deputado  ${this.nome} votou ${votar} no LLLLLLLLLLoa`)
}
VotarLdO(votar:boolean):void{
    console.log(`O maldito deputado  ${this.nome} votou ${votar} no ldo`)
}
proporEmenda(textoDEN0VOOOOOO:string):void{
 console.log(`A nome do deputado ESTADUAL ${this.nome} a proposta de emenda ${textoDEN0VOOOOOO}` )
}
CriarCPI(MeuDeusmaisTExtoooo: string ): void{
    console.log(`a... o deputado... Deputado ${this.nome} criou a... a cpi...${MeuDeusmaisTExtoooo}`)
}
}
//deve legislar sobre assuntos de interesse do estado, fiscalizar o governador check
/* 
Entre as ações que um deputado estadual pode fazer é votar a PPA, a LOA e a
LDO do Estado check
, propor emendas à constituição estadual check 

e criar CPI estadual cheeck

(Comissão Parlamentar de Inquérito estadual). O local de trabalho dos deputados
estaduais é a Assembléia Legislativa de cada Estado. Cada Assembléia terá seu
endereço específico.
... ok né 
*/ 