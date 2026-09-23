import Politico from './politico';
type regi = "municipal" | "estadual" | "federal";
type Power = 'executivo' | 'legislativo' | 'judiciario';
export default class Senadoro extends Politico {
    bancadinha: string;
    constructor(nome: string, partido: string, esfera: regi, poder: Power, nomeLocalJob: string, EnderecoLocalJob: string, remuneracao: number, bancadinha: string, ProjectList: string[]);
    getBancadinha(): string;
    Mandato(): void;
    LegislarAlgo(): void;
    AutorizarAlgo(uou: boolean): void;
    AprovarALS(roubar: string): string;
    julgarCrimes(oque: string, julgamento: string): void;
    representarInteresses(assunto: string): void;
}
export {};
//# sourceMappingURL=Senador.d.ts.map