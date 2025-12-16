import { useState, useEffect } from 'react'
import { Link } from 'react-router'
import { Header } from "../../components/Header"
import { LineChartGraph } from "./charts/LineChartGraph"
import { SummaryCard } from "./SummaryCards"
import { PieChartGraph } from './charts/PieChartGraph'
import { BarGraph } from './charts/BarGraph'
import { RecentTransactions } from './RecentTransactions'
import { isNotificationShowed } from '../../utils/isNotificationShowed'

export function HomePage({ transactionsData, isDark }) {
    const [isDay, setIsDay] = useState(true)
    const [showNotification, setShowNotification] = useState(isNotificationShowed() ? false : true)

    useEffect(() => {
        setTimeout(() => {
            setShowNotification(false)
            localStorage.setItem("notificationShowed", JSON.stringify(true))
        }, 5000)
    }, [showNotification])

    function turnOnDay() {
        setIsDay(true)
    }

    function turnOnMonth() {
        setIsDay(false)
    }

    return (
        <>
            <link rel="icon" type="image/png" href="/dashboard.png" />
            <title>Dashboard</title>
            <Header />
            <div className={`h-full bg-slate-100 p-4 md:p-8 ${isDark ? 'bg-slate-900 text-slate-200' :
                ''
                }`}>
                <div className={`w-[200px] md:w-[300px] h-[200px] absolute bg-white p-2 right-5 md:right-10 flex flex-col 
                justify-around items-center text-black font-medium rounded-xl 
                ${showNotification ? 'opacity-100' : 'opacity-0'} transition-all duration-300`}>
                    <h1 className="text-xl md:text-3xl font-bold">Notification</h1>
                    <p
                    >This sample data is provided to illustrate how your information will be displayed. You can clear or
                        update these entries in the settings menu.</p>
                </div>
                {/*Summary Cards*/}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 h-[250px] my-4 font-semibold text-xl
                md:text-3xl">
                    <SummaryCard transactionsData={transactionsData} />
                </div>

                {/*Line Graph */}
                <div className="my-12 mt-14">
                    <h2 className="text-xl md:text-3xl font-semibold text-center">Income and Expenses Comparison</h2>
                    <div className={`w-full flex justify-center p-4 text-lg md:text-xl font-bold
                         ${isDark ? 'text-black' : ''}`}>
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
                <div className="flex flex-col my-12 md:flex-row gap-4 w-full">
                    {/*Pie Chart*/}
                    <div className="w-full md:w-1/2" >
                        <h2 className="text-xl md:text-3xl font-semibold text-center mb-4">Spending Per Category</h2>
                        <PieChartGraph transactions={transactionsData} />
                    </div>

                    {/*Bar Graph*/}
                    <div className='w-full md:w-1/2'>
                        <h2 className="text-xl md:text-3xl font-semibold text-center mb-4">Income and Expense By Month</h2>
                        <BarGraph transactions={transactionsData} />
                    </div>

                </div>

                {/*Last 5 Transactions*/}
                <div className="w-full flex flex-col items-center mt-8">
                    <h2 className="text-xl md:text-3xl font-semibold text-center mb-4">Recent Transactions</h2>
                    <RecentTransactions transactions={transactionsData} isDark={isDark} />
                    <Link
                        className={`my-8 bg-gray-300 p-4 rounded-lg transition-all duration-300 font-medium
                        hover:scale-105 hover:opacity-80 cursor-pointer ${isDark ? 'text-black' : ''}`}
                        to="/transactions"
                    >View All</Link>
                </div>
            </div>
        </>
    )
}