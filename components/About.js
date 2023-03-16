import Image from 'next/image'
import React from 'react'

function About() {
  return (
    <section className='max-w-screen-xl mx-auto'>
        <div className='grid grid-cols-2'>
            <div>
                <h2 className='text-pink-400 py-4 text-xl'>steps</h2>
                <h2 className='text-blue-300 text-5xl font-bold'>Easy app for pro friends</h2>
                <h2 className='text-gray-300 py-4 text-xl'>You can start with kayafriends within just couple of clicks</h2>
                <div className='py-4'>
                    <h3 className='text-pink-400 text-3xl font-bold '>Sign up</h3>
                    <p className='text-gray-300 text-lg py-2'>Fill with your important details to let the kayafriends know more about you.</p>
                </div>
                <div className='py-4'>
                    <h3 className='text-pink-400 text-3xl font-bold'>Check friends</h3>
                    <p className='text-gray-300 text-lg py-2'>Swipe the friends card to find the nearby friends and get a match.</p>
                </div>
                <div className='py-4'>
                    <h3 className='text-pink-400 text-3xl font-bold'>Join Social Clubs</h3>
                    <p className='text-gray-300 text-lg py-2'>Join your favorite club to get into the crowd exactly what you are wanting.</p>
                </div>
                <div className='py-4'>
                    <h3 className='text-pink-400 text-3xl font-bold'>Go to Kaya Events</h3>
                    <p className='text-gray-300 text-lg py-2'>You can do travel events, networking events, dinner party etc through clubs. </p>
                </div>
            </div>
            <div className='justify-self-center align-baseline '>
                <Image src={'/assets/step.png'} alt={"Kaya-smile"} width={500} height={500} />
            </div>
        </div>
    </section>
  )
}

export default About