import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Legend } from 'recharts'
import { getIncomeExpensesByMonth } from '../../../utils/getIncomeExpensesByMonth'

export function BarGraph({ transactions }) {
    let data = getIncomeExpensesByMonth(transactions)
    if (data.length >= 6) {
        data = data.slice(0, 6)
    }

    return (
        <ResponsiveContainer width="100%" height="300">
            <BarChart
                data={data}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="YearAndMonth" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="income" fill="green" />
                <Bar dataKey="expense" fill="red" />
            </BarChart>
        </ResponsiveContainer>
    )
}