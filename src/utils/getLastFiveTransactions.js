export function getLastFiveTransactions(transactions) {
    const temp = [...transactions]
    const reverseArray = temp.reverse()

    return reverseArray.slice(0, 5)
}