import { useState } from 'react'
import { EditingData } from './EditingData'
import { TableData } from './TableData'

export function TableContainer({ filteredData, transactionsData, setTransactionsData, categories, isDark }) {
    const [editingId, setEditingId] = useState(null)
    const [currentPage, setCurrentPage] = useState(1)

    const itemsPerPage = 15
    const startingIndex = (currentPage - 1) * itemsPerPage
    const endingIndex = itemsPerPage + startingIndex

    function nextPage() {
        if ((startingIndex + itemsPerPage) >= filteredData.length) {
            return
        }
        setCurrentPage(page => page + 1)
    }

    function prevPage() {
        if (currentPage === 1) {
            return
        }
        setCurrentPage(page => page - 1)
    }

    return (
        <>
            <table className="w-full border border-gray-300 rounded-lg overflow-hidden mt-4 text-sm">
                <thead>
                    <tr className="bg-gray-100 text-left text-gray-700">
                        <th className="px-4 py-2 border-b border-gray-300">Date</th>
                        <th className="px-4 py-2 border-b border-gray-300">Category</th>
                        <th className="px-4 py-2 border-b border-gray-300">Amount (NPR)</th>
                        <th className="px-4 py-2 border-b border-gray-300">Type</th>
                        <th className="px-4 py-2 border-b border-gray-300">Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {filteredData ? filteredData.slice(startingIndex, endingIndex).map((item) => (
                        <tr
                            key={item.id}
                            className={`${item.type === "Income"
                                ? "bg-green-200 hover:bg-green-300"
                                : "bg-red-200 hover:bg-red-300"
                                } transition-colors ${isDark ? 'text-black' : ''}`}
                        >
                            {editingId === item.id ?
                                <>
                                    <EditingData
                                        item={item}
                                        categories={categories}
                                        editingId={editingId}
                                        setEditingId={setEditingId}
                                        transactionsData={transactionsData}
                                        setTransactionsData={setTransactionsData}
                                    />
                                </> :
                                <>
                                    <TableData
                                        item={item}
                                        transactionsData={transactionsData}
                                        setTransactionsData={setTransactionsData}
                                        setEditingId={setEditingId}
                                    />
                                </>
                            }
                        </tr>
                    )) :
                        null
                    }
                </tbody>
            </table>

            <div className={`my-6 flex justify-center gap-4 text-xl text-gray-700`}>
                <button className="p-4 rounded-lg bg-slate-300 cursor-pointer"
                    onClick={prevPage}
                >{'<'}</button>
                <button className={`${isDark ? 'text-white' : 'text-gray-700'}`}>{currentPage}</button>
                <button className="p-4 rounded-lg bg-slate-300 cursor-pointer"
                    onClick={nextPage}
                >{'>'}</button>
            </div>
        </>
    )
}