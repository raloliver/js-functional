import { log } from "../utils/util-helpers.js";
import { notasService as service } from "../nota/service.js";
import { debounceTime, partialize, pipe, takeUntil } from "../utils/operators-helpers.js";
import { delay, retry, timeoutPromise } from "../utils/promise-helper.js";
import { EventEmitter } from "../utils/event-emitter.js";

const getItemsPiped = pipe(
    partialize(takeUntil, 3),
    partialize(debounceTime, 500),
);

const getItems = getItemsPiped(() =>
    retry(3, 3000, () => timeoutPromise(200, service.sumItems('2143')))
        // .then(delay(5000))
        .then(total => EventEmitter.emit('totalItems', total))
        .catch(log)
);

document.querySelector('#bigBlueButton').onclick = getItems;