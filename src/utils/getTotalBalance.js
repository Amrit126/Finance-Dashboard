import { getTotalIncome } from "./getTotalIncome"
import { getTotalExpenses } from "./getTotalExpenses"

export function getTotalBalance(transactions) {
    const income = getTotalIncome(transactions)
    const expenses = getTotalExpenses(transactions)

    return income - expenses
}