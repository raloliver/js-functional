import { log } from "../utils/util-helpers.js";
import { notasService as service } from "../nota/service.js";
import { debounceTime, partialize, pipe, takeUntil } from "../utils/operators-helpers.js";
import { timeoutPromise } from "../utils/promise-helper.js";

const getItemsPiped = pipe(
    partialize(takeUntil, 3),
    partialize(debounceTime, 500),
);

const getItems = getItemsPiped(() =>
    timeoutPromise(200,
        service
            .sumItems('2143'))
        .then(log)
        .catch(log)
);

document.querySelector('#bigBlueButton').onclick = getItems;