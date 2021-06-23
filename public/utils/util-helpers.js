export const handleStatus = res => res.ok ? res.json() : Promise.reject(res.statusText);

export const log = value => {
    console.log(value);
    return value;
}