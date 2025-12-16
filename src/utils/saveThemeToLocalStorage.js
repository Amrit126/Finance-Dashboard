export function saveThemeToLocalStorage(theme) {
    localStorage.setItem("theme", JSON.stringify(theme))
}