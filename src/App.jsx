import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/home/HomePage'
import { Transaction } from './pages/transaction/Transaction'
import { Settings } from './pages/settings/Settings'
import { NotFound } from './pages/not found/NotFound'
import './App.css'
import { temporaryData } from './utils/temporaryData'

function App() {
  const [transactionsData, setTransactionsData] = useState(JSON.parse(localStorage.getItem("transactions")) ||
    temporaryData())
  const [categories, setCategories] = useState(["Food", "Shopping", "Internet", "Health", "Groceries",
    "Transport", "Salary", "Bonus", "Freelance", "Rent", "Gift"])
  const [isDark, setIsDark] = useState(false)

  return (
    <Routes>
      <Route index element={<HomePage
        transactionsData={transactionsData}
        isDark={isDark}
      />} />
      <Route path="/transactions" element={<Transaction
        transactionsData={transactionsData}
        setTransactionsData={setTransactionsData}
        categories={categories}
        isDark={isDark}
      />} />
      <Route path="/settings" element={<Settings
        transactionsData={transactionsData}
        setTransactionsData={setTransactionsData}
        categories={categories}
        setCategories={setCategories}
        isDark={isDark}
        setIsDark={setIsDark}
      />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
