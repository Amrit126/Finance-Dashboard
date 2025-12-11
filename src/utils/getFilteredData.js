export function getFilteredData(transactions, type, category, sortConfig) {
    if (!type && !category && !sortConfig) {
        return transactions.reverse()
    }

    let tempData = [...transactions]

    if (type) {
        tempData = tempData.filter(data => data.type === type)
    }

    if (category) {
        tempData = tempData.filter(data => data.category === category)
    }

    if (sortConfig) {
        if (sortConfig === "Amount↑") {
            tempData = tempData.sort((a, b) => a.amount - b.amount)
        } else if (sortConfig === "Amount↓") {
            tempData = tempData.sort((a, b) => b.amount - a.amount)
        } else if (sortConfig === "Date↑") {
            tempData = tempData.sort((a, b) => new Date(a.date) - new Date(b.date))
        } else {
            tempData = tempData.sort((a, b) => new Date(b.date) - new Date(a.date))
        }
    }

    return tempData
}