import { getTotalBalance } from "../../utils/getTotalBalance"
import { getTotalIncome } from "../../utils/getTotalIncome"
import { getTotalExpenses } from "../../utils/getTotalExpenses"

export function SummaryCard({ transactionsData }) {
    return (
        <>
            <div className="flex flex-col items-center gap-4">
                <h1>Total Income</h1>
                <div className="bg-green-500 w-full h-[90%] flex justify-center items-center rounded-2xl
                        shadow-green-400 shadow-lg">
                    <p>Rs. {getTotalIncome(transactionsData)}</p>
                </div>
            </div>
            <div className="flex flex-col items-center gap-4">
                <h1>Total Expenses</h1>
                <div className="bg-red-500 w-full h-[90%] flex justify-center items-center  rounded-2xl
                        shadow-red-400 shadow-lg">
                    <p>Rs. {getTotalExpenses(transactionsData)}</p>
                </div>
            </div>
            <div className="flex flex-col items-center gap-4">
                <h1>Total Balance</h1>
                <div className="bg-blue-500 w-full h-[90%] flex justify-center items-center  rounded-2xl
                        shadow-blue-400 shadow-lg">
                    <p>Rs. {getTotalBalance(transactionsData)}</p>
                </div>
            </div>
        </>
    )
}