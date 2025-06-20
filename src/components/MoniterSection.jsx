import React from 'react'
import { IoIosArrowRoundForward} from "react-icons/io"
import monitorImage from "../assets/monitor-card.webp"

const MoniterSection = () => {
  return (
      <section className='max-w-7xl mx-auto px-4 py-16 md:py-24'>
      <div className='flex flex-col md:flex-row-reverse justify-between gap-12 md:gap-24 items-center'>
          {/* left */}
          <div className='md:w-1/2 w-full'>
          <img src={monitorImage} alt="monitor image"
          className='w-full h-auto' /></div>
  
          {/* right */}
          <div className='md:w-1/2 w-full '>
          <p className='text-orange-500 font-semibold'>Monitor</p>
          <h2 className='text-3xl md:text-4xl font-bold text-neutral-900 mt-4 mb-6'>Introducing best mobile carousels </h2>
          <p className='text-gray-600 mb-8'>Before the ship is really back. Round, round, all around the world. Round, all around the world. Round, all around the world. Round, all around the world.</p>
          
          <a href="#" className='flex text-blue-500 font-semibold items-center gap-2 hover:gap-4 transition-all'>
              Learn more about monitoring
              <IoIosArrowRoundForward className='size-8' />
          </a>
          </div>
      </div>
  
      </section>
    )
}

export default MoniterSection