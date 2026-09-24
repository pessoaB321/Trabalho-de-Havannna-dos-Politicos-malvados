import Politico from './politico';
type regi = "municipal" | "estadual" | "federal";
type Power = 'executivo' | 'legislativo' | 'judiciario';
export default class Governador extends Politico {
    QuantSecre: number;
    EstadoName: string;
    constructor(nome: string, partido: string, esfera: regi, poder: Power, nomeLocalJob: string, EnderecoLocalJob: string, remuneracao: number, ProjectList: string[], QuantMinistros: number, EstadoName: string);
    getQuantSecre(): number;
    getEstadoName(): string;
    setQuantSecre(): number;
    setEstadoName(): string;
    Mandato(): void;
    GerirPoli(tica: string): void;
    admRodovias(admburro: string): void;
    pec(texto: string): void;
    SancionarAlgo(roubar: boolean): void;
    AlertCalamaty(avisar: boolean): void;
}
export {};
//# sourceMappingURL=governador.d.ts.map