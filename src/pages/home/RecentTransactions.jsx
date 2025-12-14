import { getLastFiveTransactions } from "../../utils/getLastFiveTransactions"

export function RecentTransactions({ transactions, isDark }) {
    const data = getLastFiveTransactions(transactions)

    return (
        <table className="w-full border border-gray-300 rounded-lg overflow-hidden mt-4">
            <thead>
                <tr className="bg-gray-100 text-left text-gray-700">
                    <th className="px-4 py-2 border-b border-gray-300">Date</th>
                    <th className="px-4 py-2 border-b border-gray-300">Category</th>
                    <th className="px-4 py-2 border-b border-gray-300">Amount (NPR)</th>
                    <th className="px-4 py-2 border-b border-gray-300">Type</th>
                </tr>
            </thead>

            <tbody className={`${isDark ? 'text-black' : ''}`}>
                {data.map((item) => (
                    <tr
                        key={item.id}
                        className={`${item.type === "Income"
                            ? "bg-green-200 hover:bg-green-300"
                            : "bg-red-200 hover:bg-red-300"
                            } transition-colors`}
                    >
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
                    </tr>
                ))}
            </tbody>
        </table>
    )
}