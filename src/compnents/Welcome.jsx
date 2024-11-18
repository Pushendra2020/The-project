import React from 'react'

const Welcome = () => {
    return (
        <div className="grid place-content-center min-h-screen bg-[url('/src/assets/photo2.jpg')]">
            <h1 className='text-8xl font-semibold font-serif'>Welcome</h1>
            <p className='text-xl font-serif text-center pt-2'>To the survy</p>
            <button className="bg-[#1877F2] flex gap-x-3 text-xl sm:text-base items-center justify-center text-white rounded-lg hover:bg-[#1877F2]/80 duration-300 transition-colors border border-transparent px-8 py-2.5 mt-5 ">
                <span className="text-lg ">Get start</span>
            </button>
        </div>
    )
}

export default Welcome