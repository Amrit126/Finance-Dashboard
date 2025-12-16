export function saveEntriesToLocalStorage(transactions) {
    localStorage.setItem("transactions", JSON.stringify(transactions))
}