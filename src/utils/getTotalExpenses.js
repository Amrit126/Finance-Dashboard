export function getTotalExpenses(transactions) {
    let expenses = 0
    transactions.forEach(data => {
        if (data.type === "Expense") {
            expenses += data.amount
        }
    })
    return expenses.toFixed(0)
}