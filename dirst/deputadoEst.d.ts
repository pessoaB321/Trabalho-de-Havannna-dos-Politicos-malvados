import Politico from './politico';
type regi = "municipal" | "estadual" | "federal";
type Power = 'executivo' | 'legislativo' | 'judiciario';
export default class DEPUestaDU extends Politico {
    ListaCommission: string[];
    EstadoName: string;
    constructor(nome: string, partido: string, esfera: regi, poder: Power, nomeLocalJob: string, EnderecoLocalJob: string, remuneracao: number, ProjectList: string[], ListaCommission: string[], EstadoName: string);
    getListaCommission(): string[];
    getEstadoName(): string;
    setListaCommission(): string[];
    setEstadoName(): string;
    Mandato(): void;
    legislarAlgo(Testomuitointerressante: string): void;
    VotarPPA(votar: boolean): void;
    VotarLoa(votar: boolean): void;
    VotarLdO(votar: boolean): void;
    proporEmenda(textoDEN0VOOOOOO: string): void;
    CriarCPI(MeuDeusmaisTExtoooo: string): void;
}
export {};
//# sourceMappingURL=deputadoEst.d.ts.map