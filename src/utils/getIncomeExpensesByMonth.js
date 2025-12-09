export function getIncomeExpensesByMonth(transactions) {
    let temp = {}
    transactions.forEach(data => {
        if (!temp[data.YearAndMonth]) {
            temp[data.YearAndMonth] = {
                income: 0,
                expense: 0,
                YearAndMonth: data.YearAndMonth
            }
        }
        if (data.type === "Income") {
            temp[data.YearAndMonth].income += data.amount
        } else {
            temp[data.YearAndMonth].expense += data.amount
        }
    })
    if (temp.length > 12) {
        return Object.values(temp).slice(temp.length - 12, temp.length)
    }

    return Object.values(temp)
}