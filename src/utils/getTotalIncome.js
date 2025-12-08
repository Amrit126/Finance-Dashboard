export function getTotalIncome(transactions) {
    let income = 0
    transactions.forEach(data => {
        if (data.type === "Income") {
            income += data.amount
        }
    })

    return income.toFixed(0)
}