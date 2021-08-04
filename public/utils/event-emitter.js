/**
 * Utilizarmos um Map para associar um event a todos os seus listeners. Como a chave do Map será o event, não corremos o risco de criar uma nova chave em nosso Map para um event já existente.
 */
const events = new Map();

export const EventEmitter = {

    on(event, listener) {
        //avoid memory leak
        if (!events.has(event)) {
            event.set(event, []);
        }

        events.get(event).push()
    },

    emit(event, data) {
        const listeners = events.get(event);

        if (listeners) {
            listeners.forEach(listener => listener(data));
        }
    }
}