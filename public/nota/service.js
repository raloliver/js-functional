import { handleStatus } from "../utils/util-helpers.js";
import "../utils/list-helpers.js";
import { compose, partialize, pipe } from "../utils/operators-helpers.js";

const ENDPOINT = 'http://localhost:3000';

//SRP: Single Responsability Principle with function that contains only a single param

const getItems = list => list.$flatMap(item => item.itens);
const getItemByCode = (code, items) => items.filter(item => item.codigo == code);
const sumItemsPrice = items => items.reduce((total, item) => total + item.valor, 0);

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

    /**
     *
     * @return list of item if success and Promise.reject if error
     */
    getAll() {
        return fetch(ENDPOINT + '/notas').then(handleStatus).catch((error) => Promise.reject(`Not possible to fetch items! ${error}`));
    },

    sumItems(code) {
        const filterItems = partialize(getItemByCode, code);
        const sumItems = pipe(getItems, filterItems, sumItemsPrice);
        return this.getAll().then(sumItems);
    }
}