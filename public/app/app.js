import { handleStatus } from "../utils/helpers.js";

document.querySelector('#bigBlueButton').onclick = () => {
    fetch('/notas')
        .then(handleStatus)
        .then(items => console.log(items))
        .catch(console.error);
};