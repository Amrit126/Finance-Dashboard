import { useEffect, useRef } from 'react'

export function ConfirmationModal({ showModal, setShowModal, deletingCategory }) {
    const modal = useRef(null)

    useEffect(() => {
        if (showModal) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        const handleOutsideClick = (e) => {
            if (modal.current && !modal.current.contains(e.target)) {
                setShowModal(false)
            }
        }

        document.addEventListener("mousedown", handleOutsideClick)

        return () => {
            document.body.style.overflow = "";
            document.removeEventListener("mousedown", handleOutsideClick)
        };
    }, [showModal, setShowModal]);

    function cancelRemovingCategory() {
        setShowModal(false)
    }

    return (
        <div className={`absolute z-50 h-[400px] bg-black text-white w-[90%]
                md:w-1/2 ${showModal ? 'flex' : 'hidden'} flex-col justify-between items-center font-semibold 
                text-xl md:text-3xl gap-2 p-2 rounded-xl py-4`}
            ref={modal}
        >
            <h3>Delete {deletingCategory}?</h3>
            <p>Warning: This will remove all the data from the chosen category.</p>
            <div className="flex gap-2">
                <button className="bg-red-500 text-black rounded-xl p-2
                                    cursor-pointer transition-all duration-300 hover:opacity-80"
                    onClick={cancelRemovingCategory}
                >Cancel</button>
                <button className="bg-blue-500 text-black rounded-xl p-2
                                    cursor-pointer transition-all duration-300 hover:opacity-80"
                >Submit</button>
            </div>
        </div>
    )
}