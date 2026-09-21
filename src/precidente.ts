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
    }
    getQuantMinistros():string[]{
        return this.QuantMinistros
}
 //Actions now lol
 NomearMinistro():void{
   
    this.QuantMinistros.push('novo ministro')
    console.log ('Membro adicionado')
}
 AniquilarMinistro():void{
    //console.log ('matar ministro'this.QuantMinistros.push)
    this.QuantMinistros.pop()
    console.log ('Membro aniquilado com sucesso')
}
ComandarOsbetasdasForçasArmadas():void{
    console.log('Comandando as forças armadas?')
}
REpresentarpais():void{
    console.log(` representado o pais beta${this.nome}`)
}
Enviarseilaoque():void{
    console.log(`Enviado por ${this.nome} para o exterior: PPA, DON e LOA`)
}
Mandato(): void {
    console.log(`O presidente ${this.nome} do partido ${this.partido} tem ${this.QuantMinistros} ministros e trabalha em ${this.nomeLocalJob} localizado em ${this.EnderecoLocalJob}.`);
}
}