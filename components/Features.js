import React from 'react'
import Image from 'next/image'

function Features() {
  return (
    <section className='max-w-screen-xl mx-auto py-10 px-4'>
        <div className='text-center'>
                <h2 className='text-pink-400 py-4 text-xl'>Features</h2>
                <h2 className='text-blue-300 text-3xl md:text-5xl font-gruppo '>Why KayaFriends</h2>
                <h2 className='text-gray-300 py-4 text-xl'>What you are going to discover differences with other friend making apps</h2>
                <div className='grid md:grid-cols-4 md:space-x-4'>
                    <div className='py-16 px-8 rounded-xl border-2 border-blue-200'>
                        <h3 className='text-pink-400 text-3xl font-gruppo '>Backed by blockchain</h3>
                        <p className='text-gray-300 text-lg py-2'>Our entire platform is designed for leveraging ultimate experience with data safety.</p>
                    </div>
                    <div className='py-16 px-8 rounded-xl border-2 border-blue-200 md:translate-y-5'>
                        <h3 className='text-pink-400 text-3xl font-gruppo '>Fluid filtering</h3>
                        <p className='text-gray-300 text-lg py-2'>We are offering you a better filter process to meet the person you are looking for.</p>
                    </div>
                    <div className='py-16 px-8 rounded-xl border-2 border-blue-200'>
                        <h3 className='text-pink-400 text-3xl font-gruppo '>Less Spam</h3>
                        <p className='text-gray-300 text-lg py-2'>our automated safety-net profile detection is looking into fake id and behavior.</p>
                    </div>
                    <div className='py-16 px-8 rounded-xl border-2 border-blue-200 md:translate-y-5'>
                        <h3 className='text-pink-400 text-3xl font-gruppo '>Unlimited swipes</h3>
                        <p className='text-gray-300 text-lg py-2'>We are not stopping you to find more friends in this city of thousand discoverables.</p>
                    </div>
            </div>
            <div className='mt-16 h-96 flex flex-col justify-center items-center bg-stone-800 rounded-2xl'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-8 h-8 text-slate-100 bi bi-emoji-sunglasses" viewBox="0 0 16 16">
                    <path d="M4.968 9.75a.5.5 0 1 0-.866.5A4.498 4.498 0 0 0 8 12.5a4.5 4.5 0 0 0 3.898-2.25.5.5 0 1 0-.866-.5A3.498 3.498 0 0 1 8 11.5a3.498 3.498 0 0 1-3.032-1.75zM7 5.116V5a1 1 0 0 0-1-1H3.28a1 1 0 0 0-.97 1.243l.311 1.242A2 2 0 0 0 4.561 8H5a2 2 0 0 0 1.994-1.839A2.99 2.99 0 0 1 8 6c.393 0 .74.064 1.006.161A2 2 0 0 0 11 8h.438a2 2 0 0 0 1.94-1.515l.311-1.242A1 1 0 0 0 12.72 4H10a1 1 0 0 0-1 1v.116A4.22 4.22 0 0 0 8 5c-.35 0-.69.04-1 .116z"/>
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-1 0A7 7 0 1 0 1 8a7 7 0 0 0 14 0z"/>
                    </svg>
                <h2 className='mt-4 text-3xl md:text-5xl text-blue-200 font-gruppo '>Plan your travel with 
                <div className=' text-pink-400'> KayaFriends 
                </div></h2>
            </div>
        </div>
    </section>
  )
}

export default Features