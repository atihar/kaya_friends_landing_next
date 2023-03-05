import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
        <div className='flex flex-col md:flex-row justify-between text-lg text-gray-200 p-4'>
            <Link href={'/terms-and-conditions'}><span className='cursor-pointer'>Terms of service</span></Link>
            <span className='cursor-pointer'>Career</span>
            <span className='cursor-pointer'>Prototype photos</span>
        </div>
  )
}

export default Footer