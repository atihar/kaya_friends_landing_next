import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

function Header() {
    const [show, setShow] = useState(false)
    const swapMenu = () => {
        setShow(!show)
    }


  return (
    <div className='flex items-center flex-row justify-between px-8 py-4 mb-14 md:mb-0'>
        <Link href="/">
            <div className="flex flex-row align-middle space-x-2 text-white text-3xl font-semibold">
            <Image src={'/logo-large.png'} width={100} height={100} alt="kayafriends" />
            {/* <span className="bg-gradient-to-r from-blue-600 via-blue-200 to-purple-500 inline-block text-transparent bg-clip-text">Kaya friends</span> */}
        </div>
        </Link>
        <div className="text-white" onClick={swapMenu}>
            <Image src={'/icons/menu-fries.svg'} width={35} height={35} alt='menu'/>
            {show && 
            <div className="fixed m-auto top-0 right-0 w-[400px] h-screen bg-gradient-to-r from-indigo-900 to-purple-900 p-6">
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
        </div>
    </div>
  )
}

export default Header