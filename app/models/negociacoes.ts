import { Negociacao } from "./negociacao.js";

export class Negociacoes {
    private negociacoes: Array<Negociacao> = [];

    adiciona(_negociacao: Array<Negociacao>) {
        this.negociacoes.push(_negociacao);
    }

    lista(): ReadonlyArray<Negociacao> {
        return [...this.negociacoes];
    }
}