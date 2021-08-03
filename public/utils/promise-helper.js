export const timeoutPromise = (ms, promise) => {
    const timeout = new Promise((resolve, reject) => setTimeout(() => reject(`Timeout of Promise (${ms})`), ms));

    return Promise.race([timeout, promise]);
}

/**
* A função delay recebe como parâmetro o tempo em milissegundos do delay e possui como retorno outra função. Esta nova função retornada, que lembrará do tempo a ser respeitado, recebe como parâmetro o resultando da chamada à then() anterior. Essa chamada pode ou não retornar um valor. Então, a função ao ser invocada retornará uma nova Promise que será resolvida através de uma chamada de setTimeout. Quando resolvida, passará o valor recebido da chamada then() anterior para sua próxima chamada encadeada. 
*
* @param {*} data
*/
export const delay = ms => data => new Promise((resolve, reject) => setTimeout(() => resolve(data), ms))

/**
 * Necessário que o último argumento seja uma função que ao ser chamada, devolva uma promise, para cada tentativa termos uma nova promise.
 * Dentro do catch de uma Promise é possível retornar outra Promise.
 * 
 * A função @delay é necessária para que exista um intervalo entre as tentativas.
 * É necessário invocar a função @delay imediatamente pois a mesma, pois o resolve será executado apenas após a quantidade determinada de ms.
 * 
 * Recursividade: É importante lembrar que as chamadas recursivas terminarão quando a condição de um leave event for atendida.
*/
export const retry = (retries, ms, fn) =>
    fn().catch(err => {
        console.log(retries);
        return delay(ms)().then(() =>
            retries > 1
                ? retry(--retries, ms, fn)
                : Promise.reject(err));
    })