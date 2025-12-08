import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/home/HomePage'
import { Transaction } from './pages/transaction/Transaction'
import { Settings } from './pages/settings/Settings'
import { NotFound } from './pages/not found/NotFound'
import './App.css'
import { temporaryData } from './utils/temporaryData'

function App() {
  const [transactionsData, setTransactionsData] = useState(temporaryData())

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
