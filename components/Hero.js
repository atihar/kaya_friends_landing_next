import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import imo from "../public/assets/imo.webp";
import speech from "../public/assets/speech.png"

function Hero() {
  const [download, setDownload] = useState(false);

  return (
    <div className="max-w-screen-xl mx-auto px-4">
      <div className="grid md:grid-cols-2 items-center">
        <div className="text-center">
          {/* <h2 className="font-alfa font-bold text-[#0097b2] text-5xl md:text-5xl uppercase">
            Web 3.0
          </h2> */}
          <div  className=' font-bold bg-none text-white text-5xl md:text-6xl text-center'>
            <p style={{textShadow: "0 0 0.8em rgba(4,215,247,0.5)",
        }} className='font-alfa bg-gradient-to-r from-[#04D7F7] via-[#3767B9] to-[#2966CD] inline-block text-transparent bg-clip-text'>Web 3.0</p>
        </div>
        <h2 className="font-alfa font-bold text-gray-200 text-6xl">
            Social Networks
          </h2>
          <p  className="font-libre text-xl mt-6 text-gray-200">
            Whether you&apos;re interested in gaming, business or crypto<br/> we have a
            club for you.
          </p>
        </div>
        <div className="grid place-items-center">
          <Image
            width={150}
            height={200}
            className="w-1/5 sm:w-100 rotate-90"
            src="/assets/22.gif"
            alt="app-1"
          />
          <Image
            width={300}
            height={400}
            className="-translate-y-28 "
            src="/assets/11.gif"
            alt="app-2"
          />
        </div>
      </div>

      <div className="my-32 grid md:grid-cols-2 align-baseline">
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1, yoyo: Infinity }}
        >
          <div className="flex items-start">
          <Image
            width={300}
            height={400}
            className="w-48 md:w-80 -translate-y-28 "
            src={imo}
            alt="app-2"
          />
          <Image
            width={300}
            height={400}
            className="w-32 md:w-64 -translate-y-28 "
            src={speech}
            alt="app-2"
          />
          </div>
        </motion.div>

        {!download ? (
          <div className="mx-8 self-center space-x-4 py-8">
            <button
              onClick={() => setDownload(true)}
              className="inline-flex gap-x-4 h-24 cursor-pointer text-white px-16 py-8 rounded-3xl bg-gradient-to-r from-[#E13FE2] to-[#04D7F7]"
            >
              <p className="text-xl uppercase font-gruppo font-bold">
                Get Kayafriends
              </p>
            </button>
          </div>
        ) : (
          <div
            onClick={() => setDownload(false)}
            className="mx-8 flex justify-center space-x-4 py-8"
          >
            <div className="flex items-center gap-x-4 cursor-pointer text-gray-400 px-10 py-3 rounded-lg border-gray-400 border hover:border-blue-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                fill="currentColor"
                className="bi bi-google-play"
                viewBox="0 0 16 16"
              >
                <path d="M14.222 9.374c1.037-.61 1.037-2.137 0-2.748L11.528 5.04 8.32 8l3.207 2.96 2.694-1.586Zm-3.595 2.116L7.583 8.68 1.03 14.73c.201 1.029 1.36 1.61 2.303 1.055l7.294-4.295ZM1 13.396V2.603L6.846 8 1 13.396ZM1.03 1.27l6.553 6.05 3.044-2.81L3.333.215C2.39-.341 1.231.24 1.03 1.27Z" />
              </svg>
              <p className="text-xs">for android</p>
            </div>
            <div className="flex items-center gap-x-4 cursor-pointer text-gray-400 px-10 py-3 rounded-lg border-gray-400 border hover:border-blue-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                fill="currentColor"
                className="bi bi-apple"
                viewBox="0 0 16 16"
              >
                <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z" />
                <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z" />
              </svg>
              <p className="text-xs"> for iphone</p>
            </div>
          </div>
        )}
      </div>

      <div className="grid md:grid-cols-3 md:mb-24">
        <Image
          width={600}
          height={600}
          className="w-72 h-96 object-cover"
          src="/assets/14.png"
          alt="app-1"
        />
        <Image
          width={600}
          height={600}
          className="w-72 h-96 object-cover"
          src="/assets/12.png"
          alt="jane"
        />
        <Image
          width={600}
          height={600}
          className="w-72 h-96 object-cover"
          src="/assets/13.png"
          alt="jane"
        />
      </div>
    </div>
  );
}

export default Hero;
