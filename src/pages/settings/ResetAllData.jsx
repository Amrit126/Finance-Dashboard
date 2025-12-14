import { useState } from 'react'

export function ResetAllData() {
    const [showConfirmation, setShowConfirmation] = useState(false)

    function showConfirmationOn() {
        setShowConfirmation(true)
    }

    function showConfirmationOff() {
        setShowConfirmation(false)
    }

    return (
        <div className="mt-4">
            <button className={`${showConfirmation ? 'hidden' : ''} cursor-pointer hover:underline`}
                onClick={showConfirmationOn}
            >Reset All Data</button>
            <div className={`${showConfirmation ? '' : 'hidden'} flex-col gap-2 bg-black p-2 rounded-lg`}>
                <p className="text-white"
                >Are you sure you want to reset all data this will remove all of your entries?</p>
                <div className="flex gap-2 justify-center mt-2">
                    <button className="bg-red-500 text-black rounded-xl p-2
                                    cursor-pointer transition-all duration-300 hover:opacity-80"
                        onClick={showConfirmationOff}
                    >Cancel</button>
                    <button className="bg-blue-500 text-black rounded-xl p-2
                                    cursor-pointer transition-all duration-300 hover:opacity-80"
                    >Submit</button>
                </div>
            </div>
        </div>
    )
}