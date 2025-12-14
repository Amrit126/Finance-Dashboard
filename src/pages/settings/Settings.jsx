import { useState } from 'react'
import { Header } from "../../components/Header";
import { Categories } from "./Categories";
import { ConfirmationModal } from './ConfirmationModal';
import { ResetAllData } from './ResetAllData';

export function Settings({ isDark, setIsDark, categories, setCategories }) {
    const [showModal, setShowModal] = useState(false)
    const [deletingCategory, setDeletingCategory] = useState('')

    function toggleButton() {
        setIsDark(isOn => {
            return isOn ? false : true
        })
    }

    return (
        <>
            <title>Settings</title>
            <Header />
            <div className={`relative bg-slate-100 flex justify-center items-center
            ${isDark ? 'bg-slate-900 text-white' : 'text-slate-700'} h-screen`}>
                <div className={`absolute right-0 left-0 top-0 bottom-0 px-4 md:px-8 py-6 text-xl
             font-bold flex flex-col items-center gap-4 ${showModal ? 'opacity-40' : ''}`}>
                    <h1 className="font-extrabold text-4xl md:text-6xl">Settings</h1>
                    <div className="border border-black w-full md:w-1/2 p-4 rounded-2xl">
                        <div className="flex justify-between">
                            <p>Dark Mode</p>
                            <div className={`h-[30px] w-[60px] relative rounded-lg
                    ${isDark ? 'bg-black' : 'bg-slate-300'} cursor-pointer`}
                                onClick={toggleButton}
                            >
                                <div className={`absolute h-[30px] w-[30px] ${isDark ? 'bg-white' : 'bg-black'} 
                        rounded-3xl ${isDark ? 'translate-x-full' : 'translate-x-0'} 
                         transition-all duration-300`}>

                                </div>
                            </div>
                        </div>

                        {/*For Categories*/}
                        <Categories
                            categories={categories}
                            setCategories={setCategories}
                            setShowModal={setShowModal}
                            setDeletingCategory={setDeletingCategory}
                            isDark={isDark}
                        />

                        <ResetAllData />
                    </div>
                </div>

                <ConfirmationModal
                    showModal={showModal}
                    setShowModal={setShowModal}
                    deletingCategory={deletingCategory}
                />
            </div>
        </>
    )
}