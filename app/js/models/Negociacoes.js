class Negociacoes {
    constructor() {
        this._negociacooes = [];
    }
    adiciona(negociacao) {
        this._negociacooes.push(negociacao);
    }
    paraArray() {
        return [].concat(this._negociacooes);
    }
}
