import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { getIncomeExpensesByDay } from '../../../utils/getIncomeExpensesByDay';

export function LineChartGraph({ transactions }) {
    const data = getIncomeExpensesByDay(transactions)

    return (
        <ResponsiveContainer width="100%" height={400} >
            <LineChart data={data} margin={{ top: 10, right: 30, left: 30, bottom: 10 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Legend />

                {/*Income Line*/}
                <Line
                    type="monotone"
                    dataKey="income"
                    stroke="green"
                    activeDot={{ r: 8 }}
                    name="Daily Income"
                />

                {/*Expenses Line*/}
                <Line
                    type="monotone"
                    name="Daily Expenses"
                    stroke="red"
                    dataKey="expenses"
                />
            </LineChart>
        </ResponsiveContainer>
    )
}