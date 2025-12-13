import { useState } from 'react'
import { Header } from "../../components/Header";

export function Settings() {
    const [darkMode, setDarkMode] = useState(false)

    function toggleButton() {
        setDarkMode(isOn => {
            return isOn ? false : true
        })
    }

    return (
        <>
            <title>Settings</title>
            <Header />
            <div className="h-screen bg-slate-100 flex flex-col gap-4 px-8 py-6 text-xl
            text-slate-700 font-bold">
                {/*Dark mode toggle */}
                <h2 className="text-3xl font-extrabold">Dark Mode Toggle</h2>
                <div className="flex p-2 border border-black gap-8 w-full md:w-[30%] justify-between items-center">
                    <p>Dark Mode</p>
                    <div className={`h-[30px] w-[20%] relative rounded-lg
                    ${darkMode ? 'bg-black' : 'bg-slate-300'} cursor-pointer`}
                        onClick={toggleButton}
                    >
                        <div className={`absolute h-[30px] w-[50%] ${darkMode ? 'bg-white' : 'bg-black'} 
                        rounded-3xl ${darkMode ? 'translate-x-full' : 'translate-x-0'} 
                         transition-all duration-300`}>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}