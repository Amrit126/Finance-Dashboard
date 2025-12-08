import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/home/HomePage'
import { Transaction } from './pages/transaction/Transaction'
import { Settings } from './pages/settings/Settings'
import { NotFound } from './pages/not found/NotFound'
import './App.css'

function App() {
  const [transactionsData, setTransactionsData] = useState([
    {
      date: "2025-07-01",
      day: 1,
      month: 7,
      type: "Income",
      category: "Salary",
      amount: 30000,
      id: "001"
    },
    {
      date: "2025-07-02",
      day: 2,
      month: 7,
      type: "Expense",
      category: "Groceries",
      amount: 700,
      id: "002"
    },
    {
      date: "2025-07-03",
      day: 3,
      month: 7,
      type: "Expense",
      category: "Utilities",
      amount: 500,
      id: "003"
    },
    {
      date: "2025-07-04",
      day: 4,
      month: 7,
      type: "Income",
      category: "Freelance",
      amount: 1200,
      id: "004"
    },
    {
      date: "2025-07-05",
      day: 5,
      month: 7,
      type: "Expense",
      category: "Dining Out",
      amount: 1700,
      id: "005"
    },
    {
      date: "2025-07-06",
      day: 6,
      month: 7,
      type: "Expense",
      category: "Transportation",
      amount: 80,
      id: "006"
    },
    {
      date: "2025-07-07",
      day: 7,
      month: 7,
      type: "Expense",
      category: "Rent",
      amount: 13000,
      id: "007"
    },
    {
      date: "2025-07-08",
      day: 8,
      month: 7,
      type: "Income",
      category: "Investment Return",
      amount: 800,
      id: "008"
    },
    {
      date: "2025-07-09",
      day: 9,
      month: 7,
      type: "Expense",
      category: "Shopping",
      amount: 6000,
      id: "009"
    },
    {
      date: "2025-07-10",
      day: 10,
      month: 7,
      type: "Expense",
      category: "Groceries",
      amount: 300,
      id: "010"
    }
  ])

  return (
    <Routes>
      <Route index element={<HomePage
        transactionsData={transactionsData}
      />} />
      <Route path="/transactions" element={<Transaction
        transactionsData={transactionsData}
        setTransactionsData={setTransactionsData}
      />} />
      <Route path="/settings" element={<Settings
        transactionsData={transactionsData}
        setTransactionsData={setTransactionsData}
      />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
