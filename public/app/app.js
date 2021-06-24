import { log } from "../utils/util-helpers.js";
import { notasService as service } from "../nota/service.js";

document.querySelector('#bigBlueButton').onclick = () => {
    service
        .sumItems('2143')
        .then(log)
        .catch(log);
};