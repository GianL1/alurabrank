export function logarTempoDeExecucao(segundos: boolean = false) {

    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        
        const metodoOriginal = descriptor.value;

        descriptor.value = function(...args: any[]) {
            let unidade = 'ms';
            let divisor = 1

            if (segundos) {
                unidade = 's';
                divisor = 1000
            }
            console.log('------------');
            console.log(`Parametros passados para o metodo ${propertyKey}: ${JSON.stringify(args)}`)
            const t1 = performance.now();
            const retorno = metodoOriginal.apply(this, args);
            const t2 = performance.now();
            console.log(`O retorno do metodo ${propertyKey} é ${JSON.stringify(retorno)}`)
            console.log(`O metodo ${propertyKey} demorou ${(t2 - t1)/divisor} ${unidade}`)
            return retorno;
        }
    }
}