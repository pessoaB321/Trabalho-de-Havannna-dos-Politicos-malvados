type regi = "municipal" | "estadual" | "federal";
type Power = 'executivo' | 'legislativo' | 'judiciario';
export default abstract class Politico {
    nome: string;
    partido: string;
    esfera: regi;
    poder: Power;
    nomeLocalJob: string;
    EnderecoLocalJob: string;
    remuneracao: number;
    ProjectList: string[];
    constructor(nome: string, partido: string, esfera: regi, poder: Power, nomeLocalJob: string, EnderecoLocalJob: string, remuneracao: number, ProjectList: string[]);
    getNome(): string;
    getPartido(): string;
    getEsfera(): string;
    getnomeLocalJob(): string;
    getEnderecoLocalJob(): string;
    getremuneracao(): number;
    getProjectList(): string[];
    getPoder(): string;
    abstract Mandato(): void;
}
export {};
//# sourceMappingURL=politico.d.ts.map