export function saveCategoriesToLocalStorage(categories) {
    localStorage.setItem("categories", JSON.stringify(categories))
}