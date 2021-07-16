import { log } from "../utils/util-helpers.js";
import { notasService as service } from "../nota/service.js";
import { debounceTime, takeUntil } from "../utils/operators-helpers.js";

const getItems = debounceTime(500,
    takeUntil(3, () =>
        service
            .sumItems('2143')
            .then(log)
            .catch(log)
    )
);

document.querySelector('#bigBlueButton').onclick = getItems;