//import { useState } from 'react'
import { Header } from "../../components/Header";
import { Categories } from "./Categories";

export function Settings({ isDark, setIsDark, categories, setCategories }) {
    function toggleButton() {
        setIsDark(isOn => {
            return isOn ? false : true
        })
    }

    return (
        <>
            <title>Settings</title>
            <Header />
            <div className="h-full bg-slate-100 px-4 md:px-8 py-6 text-xl
            text-slate-700 font-bold flex flex-col items-center gap-4 rounded-xl">
                <h1 className="font-extrabold text-4xl md:text-6xl">Settings</h1>
                <div className="border border-black w-full md:w-1/2 p-4 ">
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
                    <Categories categories={categories} setCategories={setCategories} />
                </div>
            </div>
        </>
    )
}