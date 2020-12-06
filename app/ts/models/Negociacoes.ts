import {Negociacao} from './Negociacao'

export class Negociacoes {
    private _negociacooes: Negociacao[] = [];

    adiciona(negociacao: Negociacao):void {
        
        this._negociacooes.push(negociacao);
    }

    paraArray(): Negociacao[] {
        return [].concat(this._negociacooes);
    }
}