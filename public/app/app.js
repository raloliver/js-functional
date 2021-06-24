import { handleStatus, log } from "../utils/util-helpers.js";
import "../utils/list-helpers.js";

/**
 * closure: capacidade que uma função tem de lembrar do contexto ao qual ela foi declarada
 * e retorna uma nova função que recebe uma lista
 * @param {*} code
 */
const sumItems = code => list => list
    .$flatMap(list => list.itens)
    .filter(item => item.codigo == code)
    .reduce((total, item) => total + item.valor, 0);

document.querySelector('#bigBlueButton').onclick = () => {
    fetch('/notas')
        .then(handleStatus)
        .then(sumItems('2143'))
        .then(log)
        .catch(log);
};