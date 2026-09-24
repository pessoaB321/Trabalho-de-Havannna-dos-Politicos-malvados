import Politico from './politico';
type regi = "municipal" | "estadual" | "federal";
type Power = 'executivo' | 'legislativo' | 'judiciario';
export default class Precidente extends Politico {
    QuantMinistros: number;
    constructor(nome: string, partido: string, esfera: regi, poder: Power, nomeLocalJob: string, EnderecoLocalJob: string, remuneracao: number, ProjectList: string[], QuantMinistros: number);
    getQuantMinistros(): number;
    setQuantMinistros(): number;
    NomearMinistro(NewM: number): number;
    AniquilarMinistro(Brutal: number): void;
    ComandarOsbetasdasForçasArmadas(textoMotivacional: string): void;
    REpresentarpais(): void;
    Enviarseilaoquedo_PPa_LoaEtals(que: string): void;
    Mandato(): void;
    ProporLei(Nomedacoisa: string[], propostaNe: string): string;
    AniquilarLei(vazioRoxo: string): void;
}
export {};
//# sourceMappingURL=precidente.d.ts.map