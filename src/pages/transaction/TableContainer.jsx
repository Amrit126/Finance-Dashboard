import { useState } from 'react'
import { EditingData } from './EditingData'
import { TableData } from './TableData'

export function TableContainer({ filteredData, transactionsData, setTransactionsData, categories }) {
    const [editingId, setEditingId] = useState(null)

    return (
        <table className="w-full border border-gray-300 rounded-lg overflow-hidden mt-4">
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
                {filteredData ? filteredData.map((item) => (
                    <tr
                        key={item.id}
                        className={`${item.type === "Income"
                            ? "bg-green-200 hover:bg-green-300"
                            : "bg-red-200 hover:bg-red-300"
                            } transition-colors`}
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
    )
}