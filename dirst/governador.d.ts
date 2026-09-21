import Politico from './politico';
type regi = "municipal" | "estadual" | "federal";
type Power = 'executivo' | 'legislativo' | 'judiciario';
export default class Governador extends Politico {
    QuantSecre: number;
    EstadoName: string;
    constructor(nome: string, partido: string, esfera: regi, poder: Power, nomeLocalJob: string, EnderecoLocalJob: string, remuneracao: number, ProjectList: string[], QuantMinistros: number, EstadoName: string);
    getQuantSecre(): number;
    getEstadoName(): string;
    Mandato(): void;
    GerirPoli(): void;
    admRodovias(): void;
}
export {};
//# sourceMappingURL=governador.d.ts.map