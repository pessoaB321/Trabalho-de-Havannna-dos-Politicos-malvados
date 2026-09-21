import Politico from './politico';
type regi = "municipal" | "estadual" | "federal";
type Power = 'executivo' | 'legislativo' | 'judiciario';
export default class FeDedePu extends Politico {
    ListaCommission: string[];
    EstadoName: string;
    constructor(nome: string, partido: string, esfera: regi, poder: Power, nomeLocalJob: string, EnderecoLocalJob: string, remuneracao: number, ProjectList: string[], ListaCommission: string[], EstadoName: string);
    getListaCommission(): string[];
    getEstadoName(): string;
    Mandato(): void;
}
export {};
//# sourceMappingURL=deputadoFED.d.ts.map