import { handleStatus, log } from "../utils/helpers.js";

document.querySelector('#bigBlueButton').onclick = () => {
    fetch('/notas')
        .then(handleStatus)
        .then(log)
        .catch(console.error);
};