import { useState } from 'react'

export function EditingData({ item, categories, editingId, setEditingId, transactionsData, setTransactionsData }) {
    const [inputAmount, setInputAmount] = useState(item.amount)
    const [selectedCategory, setSelectedCategory] = useState(item.category)
    const [selectedType, setSelectedType] = useState(item.type)

    function changeInputAmount(e) {
        setInputAmount(e.target.value)
    }

    function cancelEditing() {
        setEditingId(null)
    }

    function changeSelectedCategory(e) {
        setSelectedCategory(e.target.value)
    }

    function changeSelectedType(e) {
        setSelectedType(e.target.value)
    }

    function submitEditedData() {
        if (!inputAmount) {
            alert("Amount should not be empty")
            return
        }
        const temp = transactionsData.filter(data => {
            if (data.id === editingId) {
                data.amount = inputAmount
                data.type = selectedType
                data.category = selectedCategory
            }
            return data
        })

        setTransactionsData(temp)
        setEditingId(null)
    }

    return (
        <>
            <td className="px-4 py-2 border-b border-gray-200">{item.date}</td>
            <td className="px-4 py-2 border-b border-gray-200">
                <select
                    className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 
                                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                                 bg-white"
                    onChange={changeSelectedCategory}
                    value={selectedCategory}
                >
                    {categories.map(category => (
                        <option key={category} value={category}>{category}</option>
                    ))}
                </select>
            </td>
            <td className="px-4 py-2 border-b border-gray-200">
                <input
                    className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 
                                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                                bg-white"
                    onChange={changeInputAmount}
                    placeholder={item.amount}
                    type="number"
                    value={inputAmount}
                />
            </td>
            <td className="px-4 py-2 border-b border-gray-200">
                <select
                    className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 
                                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                                 bg-white"
                    value={selectedType}
                    onChange={changeSelectedType}
                >
                    <option value="Income">Income</option>
                    <option value="Expense">Expense</option>
                </select>
            </td>
            <td className="px-4 py-2 border-b border-gray-200 font-semibold">
                <button className="cursor-pointer hover:underline"
                    onClick={cancelEditing}
                >Cancel</button>/
                <button className="cursor-pointer hover:underline"
                    onClick={submitEditedData}
                >Submit</button>
            </td>
        </>
    )
}