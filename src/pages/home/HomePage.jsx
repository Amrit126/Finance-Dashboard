import { useState } from 'react'
import { Link } from 'react-router'
import { Header } from "../../components/Header"
import { LineChartGraph } from "./charts/LineChartGraph"
import { SummaryCard } from "./SummaryCards"
import { PieChartGraph } from './charts/PieChartGraph'
import { BarGraph } from './charts/BarGraph'
import { RecentTransactions } from './RecentTransactions'

export function HomePage({ transactionsData }) {
    const [isDay, setIsDay] = useState(true)

    function turnOnDay() {
        setIsDay(true)
    }

    function turnOnMonth() {
        setIsDay(false)
    }

    return (
        <>
            <title>Dashboard</title>
            <Header />
            <div className="h-full bg-slate-100 p-4 md:p-8">
                {/*Summary Cards*/}
                <div className="grid grid-cols-3 gap-4 h-[250px] my-2 font-semibold text-3xl">
                    <SummaryCard transactionsData={transactionsData} />
                </div>

                {/*Line Graph */}
                <div className="my-8 h-screen mt-14">
                    <h2 className="text-3xl font-semibold text-center">Income and Expenses Comparison</h2>
                    <div className="w-full flex justify-center p-4 text-xl font-bold">
                        <button className={`${isDay ? 'bg-white' : 'bg-gray-300'} p-3 cursor-pointer 
                        transition-all duration-300 hover:scale-105`}
                            onClick={turnOnDay}
                        >Day</button>
                        <button className={`${isDay ? 'bg-gray-300' : 'bg-white'} p-3 cursor-pointer 
                    transition-all duration-300 hover:scale-105`}
                            onClick={turnOnMonth}
                        >Month</button>
                    </div>
                    <LineChartGraph transactions={transactionsData} isDay={isDay} />
                </div>

                {/*Pie Chart and Bar Graph*/}
                <div className="flex flex-col md:flex-row gap-4 w-full">
                    {/*Pie Chart*/}
                    <div className="w-full md:w-1/2" >
                        <h2 className="text-3xl font-semibold text-center mb-4">Spending Per Category</h2>
                        <PieChartGraph transactions={transactionsData} />
                    </div>

                    {/*Bar Graph*/}
                    <div className='w-full md:w-1/2'>
                        <h2 className="text-3xl font-semibold text-center mb-4">Income and Expense By Month</h2>
                        <BarGraph transactions={transactionsData} />
                    </div>

                </div>

                {/*Last 5 Transactions*/}
                <div className="w-full flex flex-col items-center mt-8">
                    <h2 className="text-3xl font-semibold text-center mb-4">Recent Transactions</h2>
                    <RecentTransactions transactions={transactionsData} />
                    <Link
                        className="my-8 bg-gray-500 p-4 rounded-lg transition-all duration-300
                        hover:scale-105 hover:bg-gray-400 cursor-pointer"
                        to="/transactions"
                    >View All</Link>
                </div>
            </div>
        </>
    )
}