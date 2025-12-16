export function isNotificationShowed() {
    return JSON.parse(localStorage.getItem("notificationShowed"))
}