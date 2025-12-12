export function FilterOptions({ categories, setCategory, setType, setSortConfig }) {
    function changeType(e) {
        setType(e.target.value)
    }

    function changeCategory(e) {
        setCategory(e.target.value)
    }

    function changeSortConfig(e) {
        setSortConfig(e.target.value)
    }
    return (
        <>
            <label className="text-sm font-medium text-gray-700">
                <select className="mt-1 border border-gray-300 rounded-md px-3 py-2 
                                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                                 bg-white"
                    onChange={changeType}
                    defaultValue=""
                >
                    <option value="" disabled>Type</option>
                    <option value="Income">Income</option>
                    <option value="Expense">Expense</option>
                </select>
            </label>
            <label>
                <select className="mt-1 border border-gray-300 rounded-md px-3 py-2 
                                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                                 bg-white"
                    onChange={changeCategory}
                    defaultValue=""
                >
                    <option value="" disabled>Category</option>
                    {categories.map(category => (
                        <option key={category} value={category}>{category}</option>
                    ))}
                </select>
            </label>
            <label>
                <select className="mt-1 border border-gray-300 rounded-md px-3 py-2 
                                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                                 bg-white"
                    onChange={changeSortConfig}
                    defaultValue=""
                >
                    <option value="" disabled>Sort</option>
                    <option value="Date↑" title="Ascending">Date↑</option>
                    <option value="Date↓" title="Descending">Date↓</option>
                    <option value="Amount↑" title="Ascending">Amount↑</option>
                    <option value="Amount↓" title="Descending">Amount↓</option>
                </select>
            </label>
        </>
    )
}