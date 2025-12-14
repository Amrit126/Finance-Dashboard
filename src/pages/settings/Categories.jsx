import { useState } from 'react'

export function Categories({ categories, setCategories, setShowModal, setDeletingCategory, isDark }) {
    const [isAdding, setIsAdding] = useState(false)
    const [inputText, setInputText] = useState('')

    function toggleIsAdding() {
        setIsAdding(true)
    }

    function cancelAdding() {
        setInputText('')
        setIsAdding(false)
    }

    function changeInputText(e) {
        setInputText(e.target.value)
    }

    function submitNewCategory() {
        if (categories.includes(inputText)) {
            alert("Category already available")
            return
        }
        const temp = [...categories, inputText]
        setCategories(temp)
        cancelAdding()
    }

    function removeCategory(name) {
        setShowModal(true)
        setDeletingCategory(name)
    }

    return (
        <div>
            <h2 className="font-extrabold text-2xl md:text-3xl my-4">Categories</h2>
            <div className="grid grid-cols-2 text-sm lg:text-xl md:grid-cols-3 gap-3">
                {categories.map(category => (
                    <div key={category} className={`${isDark ? 'bg-black' : 'bg-white'} flex justify-between 
                    items-center p-3`}>
                        <p>{category}</p>
                        <button className="cursor-pointer "
                            onClick={() => removeCategory(category)}
                        >X</button>
                    </div>
                ))}
            </div>

            <div className="flex justify-center mt-4">
                <div className={`${isAdding ? 'hidden' : ''}`}>
                    <button className="bg-slate-700 p-2 text-white cursor-pointer"
                        onClick={toggleIsAdding}
                    >+</button>
                </div>
                <div className={`${isAdding ? 'flex' : 'hidden'} flex-col items-center p-2
                            bg-gray-300 rounded-xl ${isDark ? 'text-black' : ''} text-lg`}>
                    <h3 className="font-bold">New Category</h3>
                    <label className="mt-4">Name:
                        <input className="bg-white p-1 mx-2 text-black focus:outline-none
                                    focus:ring-2 focus:ring-blue-600 rounded-lg mx-"
                            type="text"
                            placeholder="New Category..."
                            value={inputText}
                            onChange={changeInputText}
                        />
                    </label>
                    <div className="flex gap-2 mt-4">
                        <button className="bg-red-500 text-black rounded-xl p-2
                                    cursor-pointer transition-all duration-300 hover:opacity-80"
                            onClick={cancelAdding}
                        >Cancel</button>
                        <button className="bg-blue-500 text-black rounded-xl p-2
                                    cursor-pointer transition-all duration-300 hover:opacity-80"
                            onClick={submitNewCategory}
                        >Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}