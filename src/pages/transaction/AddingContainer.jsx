export function AddingContainer({ transactionsData, setTransactionsData, categories, setOpenModal }) {
    function closeAddingContainer() {
        setOpenModal(false)
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
                                 bg-white">
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
                />
            </label>

            <div className="flex justify-center mt-2 gap-2">
                <button className="bg-red-500 p-2 rounded-lg text-white font-medium transition-all duration-300
                hover:scale-105 cursor-pointer active:scale-95"
                    onClick={closeAddingContainer}
                >Cancel</button>
                <button className="bg-green-500 p-2 rounded-lg text-white font-medium transition-all duration-300
                hover:scale-105 cursor-pointer active:scale-95
                ">Submit</button>
            </div>
        </>
    )

}