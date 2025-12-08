import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { getIncomeExpensesByDay } from '../../../utils/getIncomeExpensesByDay';
import { getIncomeExpensesByMonth } from '../../../utils/getIncomeExpensesByMonth';

export function LineChartGraph({ transactions, isDay }) {
    const data = isDay ? getIncomeExpensesByDay(transactions) : getIncomeExpensesByMonth(transactions)

    return (
        <ResponsiveContainer width="100%" height={400} >
            <LineChart data={data} margin={{ top: 10, right: 30, left: 30, bottom: 10 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey={`${isDay ? 'monthAndDay' : 'YearAndMonth'}`} />
                <YAxis />
                <Tooltip />
                <Legend />

                {/*Income Line*/}
                <Line
                    type="monotone"
                    dataKey="income"
                    stroke="green"
                    activeDot={{ r: 8 }}
                    name={`${isDay ? 'Daily Income' : 'Monthly Income'}`}
                />

                {/*Expenses Line*/}
                <Line
                    type="monotone"
                    name={`${isDay ? 'Daily Expense' : 'Monthly Expense'}`}
                    stroke="red"
                    dataKey="expense"
                />
            </LineChart>
        </ResponsiveContainer>
    )
}