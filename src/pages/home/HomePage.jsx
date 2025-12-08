import { Header } from "../../components/Header"
import { LineChartGraph } from "./charts/LineChartGraph"
import { SummaryCard } from "./SummaryCards"
//import IncomeExpenseChart from "./IncomeExpenseChart"

export function HomePage({ transactionsData }) {
    return (
        <>
            <title>Dashboard</title>
            <Header />
            <div className="h-full bg-slate-100 p-8">
                {/*Summary Cards*/}
                <div className="grid grid-cols-3 gap-4 h-[250px] my-2 font-semibold text-3xl">
                    <SummaryCard transactionsData={transactionsData} />
                </div>

                {/*Line Graph */}
                <div className="my-8 h-screen">
                    <h2 className="text-3xl font-semibold text-center my-8">Income and Expenses Comparison</h2>
                    <LineChartGraph transactions={transactionsData} />
                </div>

            </div>
        </>
    )
}