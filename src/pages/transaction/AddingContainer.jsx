import { useState } from 'react'
import { getFormattedDate } from '../../utils/getFormattedDate'

export function AddingContainer({ transactionsData, setTransactionsData, categories, setOpenModal }) {
    const [type, setType] = useState("Income")
    const [category, setCategory] = useState(categories[0] ?? '')
    const [inputText, setInputText] = useState('')

    function closeAddingContainer() {
        setOpenModal(false)
    }

    function changeCategory(e) {
        setCategory(e.target.value)
    }

    function changeType(e) {
        setType(e.target.value)
    }

    function changeInputText(e) {
        setInputText(e.target.value)
    }

    function submitNewData() {
        const temp = [...transactionsData, {
            id: crypto.randomUUID(),
            type: type,
            category: category,
            amount: inputText,
            date: getFormattedDate(true, false),
            monthAndDay: getFormattedDate(false, true),
            YearAndMonth: getFormattedDate(false, false)
        }]

        setInputText('')
        setOpenModal(false)
        setTransactionsData(temp)
    }

    return (
        <>
            {/* Type */}
            <label className="w-full text-sm font-medium text-gray-700">
                Type
                <select
                    className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 
                                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                                 bg-white"
                    onChange={changeType}
                    value={type}
                >
                    <option value="Income">Income</option>
                    <option value="Expense">Expense</option>
                </select>
            </label>

            {/* Category */}
            <label className="w-full text-sm font-medium text-gray-700">
                Category
                <select
                    className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 
                                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                                 bg-white"
                    onChange={changeCategory}
                    value={category}
                >
                    {categories.map(category => (
                        <option key={category} value={category}>{category}</option>
                    ))}
                </select>
            </label>

            {/* Amount */}
            <label className="w-full text-sm font-medium text-gray-700">
                Amount
                <input
                    className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 
                                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="2000"
                    type="number"
                    onChange={changeInputText}
                    value={inputText}
                />
            </label>

            <div className="flex justify-center mt-2 gap-2">
                <button className="bg-red-500 p-2 rounded-lg text-white font-medium transition-all duration-300
                hover:scale-105 cursor-pointer active:scale-95"
                    onClick={closeAddingContainer}
                >Cancel</button>
                <button className="bg-green-500 p-2 rounded-lg text-white font-medium transition-all duration-300
                hover:scale-105 cursor-pointer active:scale-95"
                    onClick={submitNewData}
                >Submit</button>
            </div>
        </>
    )

}