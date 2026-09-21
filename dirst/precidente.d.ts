import Politico from './politico';
type regi = "municipal" | "estadual" | "federal";
type Power = 'executivo' | 'legislativo' | 'judiciario';
export default class Precidente extends Politico {
    QuantMinistros: string[];
    constructor(nome: string, partido: string, esfera: regi, poder: Power, nomeLocalJob: string, EnderecoLocalJob: string, remuneracao: number, ProjectList: string[], QuantMinistros: string[]);
    getQuantMinistros(): string[];
    NomearMinistro(): void;
    AniquilarMinistro(): void;
    ComandarOsbetasdasForçasArmadas(): void;
    REpresentarpais(): void;
    Enviarseilaoque(): void;
    Mandato(): void;
}
export {};
//# sourceMappingURL=precidente.d.ts.map