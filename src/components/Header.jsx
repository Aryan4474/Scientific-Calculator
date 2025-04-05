import React from 'react'

function Header() {
    return (
        <>
            <header className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 text-center shadow-lg">
                <h1 className="text-4xl font-extrabold tracking-wide">Scientific Calculator</h1>
                <p className="text-lg mt-2 font-light">Perform advanced calculations with ease</p>
            </header>
        </>
    )
}

export default Header