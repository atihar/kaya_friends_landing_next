import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

function Header() {
    const [show, setShow] = useState(true)
    const swapMenu = () => {
        setShow(!show)
    }


  return (
    <>
    {show &&
    <div className="relative isolate flex items-center gap-x-6 overflow-hidden bg-gray-50 px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
        <div className="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl" aria-hidden="true">
            <div className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30" style={{clipPath: "polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)"}}></div>
        </div>
        <div className="absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl" aria-hidden="true">
            <div className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30" style={{ clipPath: "polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)"}}></div>
        </div>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <p className="text-sm leading-6 text-gray-900">
            <strong className="font-semibold">Discounted premium plan</strong><svg viewBox="0 0 2 2" className="mx-2 inline h-0.5 w-0.5 fill-current" aria-hidden="true"><circle cx="1" cy="1" r="1" /></svg>By signing up for our early access program
            </p>
            <Link href={'/become-an-early-bird'}>
            <p className="flex-none rounded-full bg-gray-900 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900">Register now <span aria-hidden="true">&rarr;</span></p>
            </Link>
        </div>
        <div className="flex flex-1 justify-end">
            <button onClick={swapMenu} type="button" className="-m-3 p-3 focus-visible:outline-offset-[-4px]">
            <span  className="sr-only">Dismiss</span>
            <svg className="h-5 w-5 text-gray-900" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
            </svg>
            </button>
        </div>
        </div>
}

    <div className='max-w-screen-xl mx-auto flex items-center flex-row justify-between py-4 mb-14 md:mb-0'>
        <Link href="/">
            <div className="flex flex-row align-middle space-x-2 text-white text-3xl font-semibold">
            <Image src='/logo.png' className="w-12 md:w-16 " width={150} height={150} alt="kayafriends" />
            <Image src='/assets/logo.png' className="pl-4 object-contain w-36 md:w-72" width={250} height={50} alt="kayafriends" />
        </div>
        </Link>
        {/* <div className="text-white" onClick={swapMenu}>
            <Image src={'/icons/menu-fries.svg'} width={35} height={35} alt='menu'/>
            {show && 
            <div className="fixed z-10 m-auto top-0 right-0 w-[400px] h-screen bg-gradient-to-r from-indigo-900 to-purple-900 p-6">
                <div className='max-w-screen-xl mx-auto flex flex-col py-6 space-y-4'>
                        <div className="flex justify-end p-4">
                            <button onClick={() => setShow(!show)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" className="bi bi-x-lg" viewBox="0 0 16 16">
                                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                                </svg>
                            </button>
                        </div>
                        <div className='cursor-pointer text-gray-400 px-10 py-3 rounded-lg border-gray-400 border hover:border-blue-300'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-share-fill" viewBox="0 0 16 16">
                            <path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5z"/>
                            </svg>
                            <p>join our community</p> 
                        </div>
                        <div className='cursor-pointer text-gray-400 px-10 py-3 rounded-lg border-gray-400 border hover:border-blue-300'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-google-play" viewBox="0 0 16 16">
                            <path d="M14.222 9.374c1.037-.61 1.037-2.137 0-2.748L11.528 5.04 8.32 8l3.207 2.96 2.694-1.586Zm-3.595 2.116L7.583 8.68 1.03 14.73c.201 1.029 1.36 1.61 2.303 1.055l7.294-4.295ZM1 13.396V2.603L6.846 8 1 13.396ZM1.03 1.27l6.553 6.05 3.044-2.81L3.333.215C2.39-.341 1.231.24 1.03 1.27Z"/>
                            </svg>
                            <p>download for android</p> 
                        </div>
                        <div className='cursor-pointer text-gray-400 px-10 py-3 rounded-lg border-gray-400 border hover:border-blue-300'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-apple" viewBox="0 0 16 16">
                            <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z"/>
                            <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z"/>
                            </svg>
                            <p>download for ios</p> 
                        </div>
                        <div className="text-gray-400 align-baseline p-y4">
                            email us hello@kayafriends.com <br/>
                            Financial Center, Dubai
                        </div>
                    </div>
                </div>}
        </div> */}
    </div>
    
    </>
  )
}

export default Header