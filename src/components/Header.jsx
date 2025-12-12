import { useState } from 'react';
import { Link } from 'react-router';
import { LinkElements } from './Links';


export function Header() {
    const [showMenu, setShowMenu] = useState(false)

    function toggleMenu() {
        setShowMenu(isMenu => {
            return isMenu ? false : true
        })
    }

    return (
        <>
            <div className="flex justify-between items-center p-4 bg-slate-900 text-white  text-2xl md:text-4xl 
            border-b-2 border-black z-50 relative">
                <Link className="mx-auto md:mx-0 font-extrabold tracking-wide" to="/">FinSight</Link>
                <div className="hidden md:flex gap-12 mx-auto text-3xl">
                    <LinkElements />
                </div >
                <div className='block md:hidden'>
                    <button
                        onClick={toggleMenu}
                    >Menu</button>
                </div>
            </div >
            <div className={`${showMenu ? 'translate-y-0' : '-translate-y-full'} 
            flex justify-between md:hidden text-lg md:text-xl lg:text-2xl px-4 py-2 transition-all duration-300 absolute bg-white w-full
            border-black border-b`}>
                <LinkElements />
            </div>
        </>
    )
}