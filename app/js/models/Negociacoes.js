System.register([], function (exports_1, context_1) {
    "use strict";
    var Negociacoes;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            Negociacoes = class Negociacoes {
                constructor() {
                    this._negociacooes = [];
                }
                adiciona(negociacao) {
                    this._negociacooes.push(negociacao);
                }
                paraArray() {
                    return [].concat(this._negociacooes);
                }
            };
            exports_1("Negociacoes", Negociacoes);
        }
    };
});
