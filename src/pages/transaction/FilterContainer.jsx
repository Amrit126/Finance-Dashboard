import { useState, useEffect } from 'react'
import { getFilteredData } from '../../utils/getFilteredData'

export function FilterContainer({ categories, setFilteredData, transactionsData }) {
    const [showFilter, setShowFilter] = useState(false)
    const [type, setType] = useState('')
    const [category, setCategory] = useState('')
    const [sortConfig, setSortConfig] = useState('')

    useEffect(() => {
        const temp = getFilteredData(transactionsData, type, category, sortConfig)
        setFilteredData(temp)
        console.log(temp.slice(0, 20))

    }, [type, category, sortConfig, setFilteredData, transactionsData])

    function toggleShowFilter() {
        setShowFilter(showFilter => (
            showFilter ? false : true
        ))
    }

    function changeType(e) {
        setType(e.target.value)
    }

    function changeCategory(e) {
        setCategory(e.target.value)
    }

    function changeSortConfig(e) {
        setSortConfig(e.target.value)
    }

    function removeType() {
        setType('')
    }

    function removeCategory() {
        setCategory('')
    }

    function removeSortConfig() {
        setSortConfig('')
    }

    return (
        <>
            <div className="flex gap-3 text-2xl font-bold items-center">
                <button className="flex text-2xl font-bold gap-1 w-[10%] items-center
                    justify-center p-2 bg-white rounded-lg shadow-lg shadow-gray-400 cursor-pointer
                    transition-all duration-300 hover:scale-105 active:scale-95"
                    onClick={toggleShowFilter}
                >
                    <img className="w-[30px]" src="/filter.png" alt="Filter Image" />
                </button>
                {type ?
                    <div className="flex p-2 bg-white rounded-lg shadow-lg shadow-gray-400
                 justify-between items-center">
                        <p>{type}</p>
                        <button className="ml-3 text-lg font-medium cursor-pointer transition-all 
                    duration-300 hover:scale-105"
                            onClick={removeType}
                        >x</button>
                    </div> :
                    ''
                }
                {category ?
                    <div className="flex p-2 bg-white rounded-lg shadow-lg shadow-gray-400
                 justify-between items-center">
                        <p>{category}</p>
                        <button className="ml-3 text-lg font-medium cursor-pointer transition-all 
                    duration-300 hover:scale-105"
                            onClick={removeCategory}
                        >x</button>
                    </div> :
                    ''
                }
                {sortConfig ?
                    <div className="flex p-2 bg-white rounded-lg shadow-lg shadow-gray-400
                 justify-between items-center">
                        <p>{sortConfig}</p>
                        <button className="ml-3 text-lg font-medium cursor-pointer transition-all 
                    duration-300 hover:scale-105"
                            onClick={removeSortConfig}
                        >x</button>
                    </div>
                    :
                    ''
                }
            </div>
            <div className={`${showFilter ? 'opacity-1' : 'opcaity-0'} flex mt-4 bg-gray p-4 bg-gray-300
             rounded-xl gap-2 transition-all duration-300`}>
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
            </div>
        </>
    )
}