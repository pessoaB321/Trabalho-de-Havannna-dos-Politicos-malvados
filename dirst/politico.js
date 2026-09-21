"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Politico {
    nome;
    partido;
    esfera;
    poder;
    nomeLocalJob;
    EnderecoLocalJob;
    remuneracao;
    ProjectList;
    constructor(nome, partido, esfera, poder, nomeLocalJob, EnderecoLocalJob, remuneracao, ProjectList) {
        this.nome = nome;
        this.partido = partido;
        this.esfera = esfera;
        this.poder = poder;
        this.nomeLocalJob = nomeLocalJob;
        this.EnderecoLocalJob = EnderecoLocalJob;
        this.remuneracao = remuneracao;
        this.ProjectList = ProjectList;
    }
    getNome() {
        return this.nome;
    }
    getPartido() {
        return this.partido;
    }
    getEsfera() {
        return this.esfera;
    }
    getnomeLocalJob() {
        return this.nomeLocalJob;
    }
    getEnderecoLocalJob() {
        return this.EnderecoLocalJob;
    }
    getremuneracao() {
        return this.remuneracao;
    }
    getProjectList() {
        return this.ProjectList;
    }
    getPoder() {
        return this.poder;
    }
}
exports.default = Politico;
//# sourceMappingURL=politico.js.map