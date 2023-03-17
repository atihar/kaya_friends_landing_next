import React from 'react'
import Image from 'next/image'

function Features() {
  return (
    <section className='max-w-screen-xl mx-auto py-10'>
        <div className='text-center'>
                <h2 className='text-pink-400 py-4 text-xl'>Features</h2>
                <h2 className='text-blue-300 text-3xl md:text-5xl font-bold'>Why KayaFriends</h2>
                <h2 className='text-gray-300 py-4 text-xl'>What you are going to discover differences with other friend making apps</h2>
                <div className='grid md:grid-cols-4 md:space-x-4'>
                    <div className='py-16 px-8 rounded-xl border-2 border-blue-200'>
                        <h3 className='text-pink-400 text-3xl'>Pro focused</h3>
                        <p className='text-gray-300 text-lg py-2'>Our entire platform is designed for industry professionals like you to be more social.</p>
                    </div>
                    <div className='py-16 px-8 rounded-xl border-2 border-blue-200 md:translate-y-5'>
                        <h3 className='text-pink-400 text-3xl'>Fluid filtering</h3>
                        <p className='text-gray-300 text-lg py-2'>We are offering you a better filter process to meet the person you are looking for.</p>
                    </div>
                    <div className='py-16 px-8 rounded-xl border-2 border-blue-200'>
                        <h3 className='text-pink-400 text-3xl'>Less Spam</h3>
                        <p className='text-gray-300 text-lg py-2'>our automated safety-net profile detection is looking into fake id and behavior.</p>
                    </div>
                    <div className='py-16 px-8 rounded-xl border-2 border-blue-200 md:translate-y-5'>
                        <h3 className='text-pink-400 text-3xl'>Unlimited swipes</h3>
                        <p className='text-gray-300 text-lg py-2'>We are not stopping you to find more friends in this city of thousand discoverables.</p>
                    </div>
            </div>
            <div className='mt-16 h-96 flex flex-col justify-center items-center bg-gray-900 rounded-2xl'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="white" className="bi bi-cup-straw" viewBox="0 0 16 16">
                    <path d="M13.902.334a.5.5 0 0 1-.28.65l-2.254.902-.4 1.927c.376.095.715.215.972.367.228.135.56.396.56.82 0 .046-.004.09-.011.132l-.962 9.068a1.28 1.28 0 0 1-.524.93c-.488.34-1.494.87-3.01.87-1.516 0-2.522-.53-3.01-.87a1.28 1.28 0 0 1-.524-.93L3.51 5.132A.78.78 0 0 1 3.5 5c0-.424.332-.685.56-.82.262-.154.607-.276.99-.372C5.824 3.614 6.867 3.5 8 3.5c.712 0 1.389.045 1.985.127l.464-2.215a.5.5 0 0 1 .303-.356l2.5-1a.5.5 0 0 1 .65.278zM9.768 4.607A13.991 13.991 0 0 0 8 4.5c-1.076 0-2.033.11-2.707.278A3.284 3.284 0 0 0 4.645 5c.146.073.362.15.648.222C5.967 5.39 6.924 5.5 8 5.5c.571 0 1.109-.03 1.588-.085l.18-.808zm.292 1.756C9.445 6.45 8.742 6.5 8 6.5c-1.133 0-2.176-.114-2.95-.308a5.514 5.514 0 0 1-.435-.127l.838 8.03c.013.121.06.186.102.215.357.249 1.168.69 2.438.69 1.27 0 2.081-.441 2.438-.69.042-.029.09-.094.102-.215l.852-8.03a5.517 5.517 0 0 1-.435.127 8.88 8.88 0 0 1-.89.17zM4.467 4.884s.003.002.005.006l-.005-.006zm7.066 0-.005.006c.002-.004.005-.006.005-.006zM11.354 5a3.174 3.174 0 0 0-.604-.21l-.099.445.055-.013c.286-.072.502-.149.648-.222z"/>
                    </svg>
                <h2 className='mt-4 text-3xl md:text-5xl text-blue-200'>Plan your travel with 
                <div className=' text-pink-400'> KayaFriends 
                </div></h2>
            </div>

            <div className='mt-10 h-96 flex flex-col justify-center items-center bg-gray-900 rounded-2xl'>
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="white" className="bi bi-credit-card" viewBox="0 0 16 16">
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1H2zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V7z"/>
                    <path d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1z"/>
                    </svg>
                <h2 className='mt-4 text-3xl md:text-5xl text-blue-200'>Zero
                <div className=' text-pink-400'> cost to start
                </div></h2>
            </div>
        </div>
    </section>
  )
}

export default Features