export class Negociacao {
    constructor(data, quantidade, valor) {
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
    }
    ;
    // Como os atributos com # a cima são privados, adicionaremos o 'get' para que eles retornem quando solicitados no App.js.
    // Eu não posso atribuir nada a um get, só ler.
    get data() {
        return this._data;
    }
    ;
    get quantidade() {
        return this._quantidade;
    }
    ;
    get valor() {
        return this._valor;
    }
    ;
    get volume() {
        return this._quantidade * this._valor;
    }
    ;
}
;
