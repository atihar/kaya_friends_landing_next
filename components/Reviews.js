import React from 'react'
import Link from 'next/link'


function Reviews() {
  return (
    <section className='max-w-screen-xl mx-auto py-10'>
        <div className='text-center'>
                <h2 className='text-pink-400 py-2 text-xl'>Reviews</h2>
                <h2 className='text-blue-300 text-5xl font-bold font-gruppo '>Their reaction</h2>
                <div className='flex text-yellow-300 justify-center space-x-3 mt-4'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-half" viewBox="0 0 16 16">
                    <path d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z"/>
                    </svg>
                </div>
                <div className='max-w-screen overflow-x-scroll text-left mt-8'>
                <div className='inline-grid grid-flow-col gap-4'>
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
            <div className='mt-10 text-center h-96 flex flex-col justify-center items-center bg-rose-800 rounded-2xl shadow'>
                <h2 className='font-gruppo font-bold mt-4 text-3xl md:text-5xl text-blue-200'>Join
                    <div className='font-gruppo font-bold text-blue-200'>early access program</div>
                </h2>
                <div className='grid md:grid-cols-2 my-6 text-gray-100'>
                    <div className='flex items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-6 h-6 bi bi-bookmark-heart" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z"/>
                        <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"/>
                        </svg>
                        <p>Exclusive club joining</p>
                    </div>
                    <div className='flex items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-6 h-6 bi bi-bookmark-heart" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z"/>
                        <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"/>
                        </svg>
                        <p>Discounted premium plan</p>
                    </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="text-blue-200 mt-4 bi bi-arrow-up-right-square" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.854 8.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z"/>
                </svg>
            </div>
        </Link>
    </section>
  )
}
export default Reviews