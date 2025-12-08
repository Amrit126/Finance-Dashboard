export function getIncomeExpensesByDay(transactions) {
    let temp = {}
    transactions.forEach(data => {
        if (!temp[data.date]) {
            temp[data.date] = {
                income: 0,
                expenses: 0,
                day: data.day
            }
        }
        if (data.type === "Income") {
            temp[data.date].income += data.amount
        } else {
            temp[data.date].expenses += data.amount
        }
    })

    if (temp.length > 30) {
        return Object.values(temp).slice(0, 30)
    }

    return (Object.values(temp))
}