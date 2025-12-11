import { useState } from 'react'
import { Header } from "../../components/Header";
import { AddingContainer } from './AddingContainer';
import { FilterContainer } from './FilterContainer';

export function Transaction({ transactionsData, setTransactionsData, categories }) {
    const [openModal, setOpenModal] = useState(false)

    function toggleOpenModal() {
        setOpenModal(true)
    }

    return (
        <>
            <title>Transactions</title>
            <Header />
            <div className="h-screen bg-slate-100 p-4 md:p-8">
                <h2 className="text-center text-5xl text-gray-600 font-extrabold">All Transactions</h2>

                {/*Adding modal*/}
                <div className="flex justify-center my-12">
                    <button className={`${openModal ? 'hidden' : ''} bg-black p-4 text-3xl font-extrabold 
                    text-white w-[10%] rounded-lg shadow-lg shadow-gray-600 cursor-pointer transition-all
                     duration-300 hover:scale-105 active:scale-95`}
                        onClick={toggleOpenModal}
                    >+</button>
                    <div className={`${openModal ? 'flex' : 'hidden'} flex-col gap-4 w-full md:w-1/2 p-6
                     border border-gray-300 rounded-lg shadow-sm bg-white`}>

                        <AddingContainer transactionsData={transactionsData}
                            setTransactionsData={setTransactionsData}
                            categories={categories}
                            setOpenModal={setOpenModal}
                        />

                    </div>

                </div>

                {/*Filter Section*/}
                <div className="my-8">
                    <FilterContainer categories={categories} />
                </div>
            </div>
        </>
    )
}