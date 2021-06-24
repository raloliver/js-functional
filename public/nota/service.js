import { handleStatus } from "../utils/util-helpers.js";
import "../utils/list-helpers.js";

const ENDPOINT = 'http://localhost:3000';

/**
 * closure: capacidade que uma função tem de lembrar do contexto ao qual ela foi declarada
 * e retorna uma nova função que recebe uma lista
 * @param {*} code
 */
const sumItems = code => list => list
    .$flatMap(list => list.itens)
    .filter(item => item.codigo == code)
    .reduce((total, item) => total + item.valor, 0);

export const notasService = {

    getAll() {
        return fetch(ENDPOINT + '/notas').then(handleStatus);
    },

    sumItems(code) {
        return this.getAll().then(sumItems(code));
    }
}