export function getIncomeExpensesByDay(transactions) {
    let temp = {}
    transactions.forEach(data => {
        if (!temp[data.date]) {
            temp[data.date] = {
                income: 0,
                expense: 0,
                monthAndDay: data.monthAndDay
            }
        }
        if (data.type === "Income") {
            temp[data.date].income += data.amount
        } else {
            temp[data.date].expense += data.amount
        }
    })

    if (temp.length > 30) {
        return Object.values(temp).slice(temp.length - 30, temp.length)
    }

    return (Object.values(temp))
}