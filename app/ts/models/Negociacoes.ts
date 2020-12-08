import {Negociacao} from './Negociacao'
import {logarTempoDeExecucao} from '../helpers/decorators/index';

export class Negociacoes {
    private _negociacooes: Negociacao[] = [];

    adiciona(negociacao: Negociacao):void {
        
        this._negociacooes.push(negociacao);
    }

    @logarTempoDeExecucao()
    paraArray(): Negociacao[] {
        return [].concat(this._negociacooes);
    }
}