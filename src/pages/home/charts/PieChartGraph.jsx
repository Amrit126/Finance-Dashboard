import { ResponsiveContainer, PieChart, Pie, Tooltip, Cell } from 'recharts'
import { getExpensesByCategory } from '../../../utils/getExpensesByCategory'

export function PieChartGraph({ transactions }) {
    const data = getExpensesByCategory(transactions)
    const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042", "#8dd1e1"];

    return (
        <ResponsiveContainer width="100%" height={300}>
            <PieChart>
                <Tooltip />
                <Pie
                    data={data}
                    dataKey="amount"
                    nameKey="category"
                    outerRadius={120}
                    label
                >
                    {data.map((entry, index) => (
                        <Cell key={index} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
            </PieChart>
        </ResponsiveContainer>
    )
}