export class Negociacao {
    #data; //
    #quantidade; //
    #valor; //

    constructor (data, quantidade, valor) {
        this.#data = data;
        this.#quantidade = quantidade;
        this.#valor = valor;
    };

    // Como os atributos com # a cima são privados, adicionaremos o 'get' para que eles retornem quando solicitados no App.js.
    // Eu não posso atribuir nada a um get, só ler.
    get data() {
        return this.#data;
    };

    get quantdade() {
        return this.#quantidade;
    };

    get valor() {
        return this.#valor;
    };

    get volume() {
        return this.#quantidade * this.#valor
    };
    
};
