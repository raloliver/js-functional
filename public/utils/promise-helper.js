export const timeoutPromise = (ms, promise) => {
    const timeout = new Promise((resolve, reject) => setTimeout(() => reject(`Timeout of Promise (${ms})`), ms));

    return Promise.race([timeout, promise]);
}