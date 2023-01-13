import React from 'react'

function Footer() {
  return (
        <div className='flex flex-col md:flex-row justify-between text-lg text-gray-200 p-4'>
            <span>hello@kayafriends.com</span>
            <span>@kayafriends</span>
            <span className='md:-rotate-90'>2023</span>
        </div>
  )
}

export default Footer