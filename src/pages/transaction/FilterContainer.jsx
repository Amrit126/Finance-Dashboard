import { useState, useEffect } from 'react'
import { getFilteredData } from '../../utils/getFilteredData'
import { FilterOptions } from './FilterOptions'

export function FilterContainer({ categories, setFilteredData, transactionsData, isDark }) {
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
        setShowFilter(showFilter => {
            return showFilter ? false : true
        })
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
            <div className="flex flex-wrap gap-3 text-xl font-bold items-center">
                <button className="flex text-2xl font-bold gap-1 w-[20%] md:w-[10%] items-center
                    justify-center p-2 bg-white rounded-lg cursor-pointer
                    transition-all duration-300 hover:scale-105 active:scale-95"
                    onClick={toggleShowFilter}
                >
                    <img className="w-[30px]" src="/filter.png" alt="Filter Image" />
                </button>
                {type ?
                    <div className={`flex p-2 ${isDark ? 'bg-slate-700 text-white' : 'bg-white text-black'}
                     rounded-lg justify-between items-center`}>
                        <p>{type}</p>
                        <button className="ml-3 text-lg font-medium cursor-pointer transition-all 
                    duration-300 hover:scale-105"
                            onClick={removeType}
                        >x</button>
                    </div> :
                    ''
                }
                {category ?
                    <div className={`flex p-2 ${isDark ? 'bg-slate-700 text-white' : 'bg-white text-black'}
                     rounded-lg justify-between items-center`}>
                        <p>{category}</p>
                        <button className="ml-3 text-lg font-medium cursor-pointer transition-all 
                    duration-300 hover:scale-105"
                            onClick={removeCategory}
                        >x</button>
                    </div> :
                    ''
                }
                {sortConfig ?
                    <div className={`flex p-2 ${isDark ? 'bg-slate-700 text-white' : 'bg-white text-black'}
                     rounded-lg justify-between items-center`}>
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
            <div className={`${showFilter ? 'flex' : 'hidden'} flex-wrap mt-4 bg-gray p-4 bg-gray-300
             rounded-xl gap-2 text-sm font-medium text-gray-700`}>
                <FilterOptions
                    categories={categories}
                    setType={setType}
                    setCategory={setCategory}
                    setSortConfig={setSortConfig}
                    type={type}
                    category={category}
                    sortConfig={sortConfig}
                    isDark={isDark}
                />
            </div>
        </>
    )
}