import Head from 'next/head'
import Link from 'next/link'
import React, { useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

function BecomeAnEarlyBird() {
    const [success, setSuccess] = useState(false)

    const registrationHandler = async () => {
        console.log("working")
        setSuccess(true)
    }

  return (
    <div className="bg-gradient-to-r from-blue-900 via-pink-900 min-h-screen to-gray-900">
        <Head>
        <title>Early access - Kaya Friends</title>
        <meta name="description" content="Kaya friends is a Dubai based Swedish startup who are working to connect professionals in a more socialistic way."/>
      </Head>
    <Header/>
    <div className='max-w-screen-md mx-auto text-white bg-gray-400 bg-opacity-20 p-14 rounded-lg my-24'>
        <h2 className='text-4xl font-bold text-blue-200'> Early access signup</h2>
        <div className='grid grid-cols-2 mt-6'>
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
        <div className='grid grid-cols-2 mt-16'>
            <p className='font-bold'>Your name</p>
            <input className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"></input>
        </div>
        <div className='grid grid-cols-2 mt-8'>
            <p className='font-bold'>Living city</p>
            <input className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="dubai"></input>
        </div>
        <div className='grid grid-cols-2 mt-8'>
            <p className='font-bold'>Email</p>
            <input className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="john@company.com"></input>
        </div>
        <div className='grid grid-cols-2 mt-8'>
            <p className='font-bold'>Industry</p>
            <input className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="technology"></input>
        </div>
        <div className='grid grid-cols-2 mt-8'>
            <p className='font-bold'>How did you hear about us?</p>
            <select type="select" className='shadow border rounded w-full py-2 px-3 text-gray-700 '>
                <option defaultValue>select one</option>
                <option>facebook</option>
                <option>instagram</option>
                <option>linkedin</option>
                <option>google</option>
                <option>reference link</option>
                <option>messenger group</option>
            </select>
        </div>
        <button onClick={registrationHandler} className='bg-gray-800 text-white w-full py-2 rounded-lg mt-12'>I am interested to join kaya</button>
         {success &&  
         <div>
            <div className='flex items-center gap-x-4 mt-8'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-6 h-6 bg-green-500 rounded-full bi bi-check2-circle" viewBox="0 0 16 16">
                <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"/>
                <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"/>
                </svg>
                Thank you for your interest in kaya. We will send you updates through email.
            </div>
            <Link href="/"><p className='mt-4 text-center'>Back to homepage</p></Link>
         </div>
            }
        </div>
    <Footer/>
    </div>
  )
}

export default BecomeAnEarlyBird