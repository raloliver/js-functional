/**
* Partial Application Concept
*
* @param {*} fn
* @param {*} args
*/
export const partialize = (fn, ...args) => fn.bind(null, ...args);

/**
* reduce right: this method applies a function against an accumulator and each value of the array (from right-to-left) to reduce it to a single value.
*
* @param {*} fns
*/
export const compose = (...fns) => value =>
    fns.reduceRight((previousValue, fn) => fn(previousValue), value);

/**
* recebe as funções numa ordem mais semântica
*
* @param {*} fns
*/
export const pipe = (...fns) => value =>
    fns.reduce((previousValue, fn) => fn(previousValue), value);

/**
* evitar realizar execuções desnecessárias
* decrementamos o parametro times até que o mesmo seja maior que 0
* e paramos a execução recursiva
*
* @param {*} times
* @param {*} fn
* @return {*} 
*/
export const takeUntil = (times, fn) => () => times-- > 0 && fn();

