import { Negociacao } from "./negociacao.js";

export class Negociacoes {
    private negociacoes: Negociacao[] = []; //Posso colocar 'Negociacao[]' ao invés de 'Array<Negociacao>'

    adiciona(_negociacao: Array<Negociacao>) {
        this.negociacoes.push(_negociacao);
    }

    lista(): readonly Negociacao[] // Posso colocar 'readonly Negociacao[]' ao invés de 'ReadonlyArray<Negociacao>'
    {
        return [...this.negociacoes];
    }
}