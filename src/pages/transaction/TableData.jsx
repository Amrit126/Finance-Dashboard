export function TableData({ item, transactionsData, setTransactionsData, setEditingId }) {

    function deleteData(id) {
        const temp = transactionsData.filter(data => data.id !== id)
        setTransactionsData(temp)
    }

    function changeEditingid(id) {
        setEditingId(id)
    }

    return (
        <>
            <td className="px-4 py-2 border-b border-gray-200">{item.date}</td>
            <td className="px-4 py-2 border-b border-gray-200">{item.category}</td>
            <td className="px-4 py-2 border-b border-gray-200 font-semibold">
                {item.amount}
            </td>
            <td
                className={`px-4 py-2 border-b border-gray-200 font-semibold 
                                ${item.type === "Income" ? "text-green-700" : "text-red-700"}`}
            >
                {item.type}
            </td>
            <td className="px-4 py-2 border-b border-gray-200 font-semibold">
                <button className="cursor-pointer hover:underline"
                    onClick={() => changeEditingid(item.id)}
                >Edit</button>/
                <button className="cursor-pointer hover:underline"
                    onClick={() => deleteData(item.id)}
                >Delete</button>
            </td>
        </>
    )
}