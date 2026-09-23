//check4
import Politico from './politico';
type regi = "municipal"|"estadual"|"federal";
type Power = 'executivo'|'legislativo'|'judiciario';

export default class Governador extends Politico{
    //esfera estadual
    //poder executivo clariceeeeeeeee
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
        if (esfera == 'municipal' || esfera == 'federal'){
            throw new Error("bip, tá errado o governador n ser estadual aí man")
         }
        
        if (poder == 'legislativo' || poder == 'judiciario'){
            throw new Error("bip, tá errado o governador n ser executivo aí man")
         }
        }

    getQuantSecre():number{
        return this.QuantSecre
}
getEstadoName():string{
        return this.EstadoName
}
Mandato():void{
    console.log(`O governador ${this.nome}, do partido ${this.partido}, atua na esfera ${this.esfera} e no poder ${this.poder}, trabalha em ${this.nomeLocalJob}, localizado em ${this.EnderecoLocalJob}. Remuneração: ${this.remuneracao}, projetos: ${this.ProjectList}, secretários: ${this.QuantSecre}, estado: ${this.EstadoName}.`);
}
GerirPoli(tica: string):void{
    console.log(tica)
}
admRodovias(admburro:string): void{
    console.log (admburro)
}
pec(texto: string): void{
    console.log(texto)
}
SancionarAlgo(roubar: boolean):void{
    console.log(`a decição do governador ${this.nome} é  ${roubar}`)
    if (roubar==true){
        console.log(`logo, o governador ${this.nome} sancionou a... a alguma proposta aí`)
    }
    else{
        console.log(`logo, o governador ${this.nome} não sancionou a... a alguma proposta aí por não atender a seus roubos`)
    }
}
AlertCalamaty(avisar: boolean):void{
    console.log(`devido a situação de calamidade, o governador ${this.nome} dá situação como ${avisar} para o estado de calamidade em ${this.EstadoName}`)

}


}