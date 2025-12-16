import { useState } from 'react'
import { Header } from "../../components/Header";
import { AddingContainer } from './AddingContainer';
import { FilterContainer } from './FilterContainer';
import { TableContainer } from './TableContainer';

export function Transaction({ transactionsData, setTransactionsData, categories, isDark }) {
    const [openModal, setOpenModal] = useState(false)
    const [filteredData, setFilteredData] = useState(null)

    function toggleOpenModal() {
        setOpenModal(true)
    }

    return (
        <>
            <link rel="icon" type="image/png" href="/transactions.png" />
            <title>Transactions</title>
            <Header />
            <div className={`h-full bg-slate-100 p-4 md:p-8 ${isDark ? 'bg-slate-900 text-white' : ''}`}>
                <h2 className={`text-center text-2xl md:text-5xl text-gray-600 font-extrabold 
                ${isDark ? 'text-white' : ''}`}
                >All Transactions</h2>

                {/*Adding modal*/}
                <div className="flex justify-center my-6 md:my-12">
                    <button className={`${openModal ? 'hidden' : ''} bg-black p-2 md:p-4 text-xl md:text-3xl font-extrabold 
                    text-white w-[30%] md:w-[10%] rounded-lg shadow-lg shadow-gray-600 cursor-pointer 
                    transition-all duration-300 hover:scale-105 active:scale-95 
                    ${isDark ? 'bg-slate-700 shadow-none' : ''}`}
                        onClick={toggleOpenModal}
                    >+</button>
                    <div className={`${openModal ? 'flex' : 'hidden'} flex-col gap-4 w-full md:w-1/2 p-6
                     border border-gray-300 rounded-lg shadow-sm ${isDark ? 'bg-black' : 'bg-white'}`}>

                        <AddingContainer transactionsData={transactionsData}
                            setTransactionsData={setTransactionsData}
                            categories={categories}
                            setOpenModal={setOpenModal}
                            isDark={isDark}
                        />

                    </div>

                </div>

                {/*Filter Section*/}
                <div className="my-8">
                    <FilterContainer categories={categories}
                        filteredData={filteredData}
                        setFilteredData={setFilteredData}
                        transactionsData={transactionsData}
                        isDark={isDark}
                    />
                </div>

                {/*Table Section*/}
                <div className="overflow-x-auto">
                    <TableContainer filteredData={filteredData}
                        transactionsData={transactionsData}
                        setTransactionsData={setTransactionsData}
                        categories={categories}
                        isDark={isDark}
                    />
                </div>
            </div>
        </>
    )
}