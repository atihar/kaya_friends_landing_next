import React from 'react'

function Hero() {
  return (
    <div>
        <div className='max-w-screen-xl mx-auto font-display font-extrabold text-white text-5xl md:text-[160px] text-center'>
            <p className='bg-gradient-to-r from-blue-600 via-blue-200 to-purple-500 inline-block text-transparent bg-clip-text'>CONNECTING PRO FRIENDS...</p>
        </div>
        <div className='grid md:grid-cols-[1fr_2fr_1fr] px-12 py-6'>
            <div className='hidden md:grid justify-end'>
                <img className="text-right border-blue-300 border rounded-lg" src='https://t3.ftcdn.net/jpg/03/28/70/28/360_F_328702872_YUyncEH2DP4stHlOqNDmCaT2haLx7UJV.jpg'/>
            </div>
            <div className='flex justify-center'>
                <img className="text-center border-blue-300 border rounded-lg" src='https://media.istockphoto.com/id/1272831068/photo/fashion-model-girl-in-neon-lights.jpg?b=1&s=170667a&w=0&k=20&c=UWxqpK96eAlFFYi5pQ9O1VFceiIzrSl4EqG9yUK_H1M='/>
            </div>
            <div className='flex flex-col justify-between text-xl'>
                <p className='text-gray-400 border-blue-300 border rounded-md p-6 bg-black'>Find Professionals around the city in more socialistic way.</p>
                <p className='text-gray-400 border-blue-300 border rounded-md p-6 bg-black' >Connect with similar professionals club with KayaSocialClub</p>
                <p className='text-gray-400 border-blue-300 border rounded-md p-6 bg-black'>Get Kaya membership to access advance analytics, more filter etc.</p>
            </div>
        </div>
    </div>
  )
}

export default Hero