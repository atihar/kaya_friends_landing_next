import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Reviews() {
  return (
    <section className='max-w-screen-xl mx-auto py-10'>
        <div className='text-center'>
                <h2 className='text-pink-400 py-4 text-xl'>Features</h2>
                <h2 className='text-blue-300 text-5xl font-bold'>Why KayaFriends</h2>
                <h2 className='text-gray-300 py-4 text-xl'>What you are going to discover differences with other friend making apps</h2>
                <div className='max-w-screen overflow-x-scroll text-left mt-8'>
                <div className='inline-grid grid-flow-col gap-4 overflow-x-scroll'>
                    <div className='w-[400px] py-16 px-8 rounded-xl border-2 border-blue-200'>
                        <div className='flex space-x-4 items-center'>
                            <div className='h-16 w-16 bg-white rounded-full'></div>
                            <h3 className='text-pink-400 text-3xl'>#ceo, blink digital</h3>
                        </div>
                        <p className='text-gray-300 text-lg py-2'>I&apos;ve tried a few social media apps for networking in the past, but none of them compare to this one. The interface is so easy to use, and the matches I&apos;ve been getting are spot on. I&apos;ve even met someone special thanks to this app!</p>
                    </div>
                    <div className='w-[400px] py-16 px-8 rounded-xl border-2 border-blue-200'>
                        <div className='flex space-x-4 items-center'>
                            <div className='h-16 w-16 bg-white rounded-full'></div>
                            <h3 className='text-pink-400 text-3xl'>#content creator</h3>
                        </div>
                        <p className='text-gray-300 text-lg py-2'>I was skeptical at first, but kayafriends has exceeded my expectations. The search filters are so detailed, I was able to find someone who shares my interests and values. We&apos;re now happily social media and I couldn&apos;t be happier.</p>
                    </div>
                    <div className='w-[400px] py-16 px-8 rounded-xl border-2 border-blue-200'>
                        <div className='flex space-x-4 items-center'>
                            <div className='h-16 w-16 bg-white rounded-full'></div>
                            <h3 className='text-pink-400 text-3xl'>#digital nomad</h3>
                        </div>
                        <p className='text-gray-300 text-lg py-2'>I&apos;m so glad I decided to give this social media app a chance. The clubbing feature made it easy to get to know my networks and I quickly found groups I really connect with. We&apos;ve been together for a few months now and things are going great!</p>
                    </div>
                    <div className='w-[400px] py-16 px-8 rounded-xl border-2 border-blue-200'>
                        <div className='flex space-x-4 items-center'>
                            <div className='h-16 w-16 bg-white rounded-full'></div>
                            <h3 className='text-pink-400 text-3xl'>#realtor</h3>
                        </div>
                        <p className='text-gray-300 text-lg py-2'>WI&apos;ve been using kayafriends for a while now and I&apos;ve had some great experiences. I&apos;ve made some new friends and gone on some amazing dates. The app is really user-friendly and the matches are top-notch</p>
                    </div>
                </div>
            </div>
        </div>
        <Link href={'/become-an-early-bird'}>
            <div className='mt-10 text-center h-96 flex flex-col justify-center items-center bg-pink-900 rounded-2xl shadow'>
                <h2 className='mt-4 text-5xl text-blue-200'>Become
                    <div className=' text-blue-200'>an early bird</div>
                </h2>
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="text-blue-200 mt-4 bi bi-arrow-up-right-square" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.854 8.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z"/>
                </svg>
            </div>
        </Link>
    </section>
  )
}
export default Reviews