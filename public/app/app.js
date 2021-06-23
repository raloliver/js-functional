import { handleStatus, log } from "../utils/util-helpers.js";
import "../utils/list-helpers.js";

document.querySelector('#bigBlueButton').onclick = () => {
    fetch('/notas')
        .then(handleStatus)
        .then(list => list
            .$flatMap(list => list.itens)
            .filter(item => item.codigo == '2143')
            .reduce((total, item) => total + item.valor, 0))
        .then(log)
        .catch(log);
};