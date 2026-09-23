import Politico from './politico';
type regi = "municipal" | "estadual" | "federal";
type Power = 'executivo' | 'legislativo' | 'judiciario';
export default class FeDedePu extends Politico {
    bancadaBancadinha: string;
    EstadoName: string;
    constructor(nome: string, partido: string, esfera: regi, poder: Power, nomeLocalJob: string, EnderecoLocalJob: string, remuneracao: number, ProjectList: string[], bancadaBancadinha: string, EstadoName: string);
    getbancadaBancadinha(): string;
    getEstadoName(): string;
    Mandato(): void;
    LEgislarPenal(NaguentoMais: string): void;
    LEgislarCodigoTribu(NaguentoMais: string): void;
    LeisHumanas_trabalhisas(NaguentoMais: string): void;
    fiscalizarPrecdente(amongus: boolean): void;
    VotarPPA(votar: boolean): void;
    VotarLoa(votar: boolean): void;
    VotarLdO(votar: boolean): void;
    DrogaDeLeisComplementares(textoTudoBem: string): void;
}
export {};
//# sourceMappingURL=deputadoFED.d.ts.map