export function getExpensesByCategory(transactions) {
    const newTransaction = transactions.reduce((acc, data) => {
        if (data.type === "Expense") {
            if (!acc[data.category]) {
                acc[data.category] = {
                    category: data.category,
                    amount: 0
                }
            }
            acc[data.category].amount += data.amount
        }
        return acc
    }, {})

    return Object.values(newTransaction)
}