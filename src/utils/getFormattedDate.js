import dayjs from 'dayjs'

export function getFormattedDate(fullDate, monthAndDay) {
    const date = new Date()

    if (fullDate) {
        return dayjs(date).format("YYYY-MM-DD")
    } else if (monthAndDay) {
        return dayjs(date).format("MM/DD")
    } else {
        return dayjs(date).format("YYYY/MM")
    }
}