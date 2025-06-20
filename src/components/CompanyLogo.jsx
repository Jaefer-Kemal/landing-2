import React from 'react'
import slack from "../assets/slack.png"
import amazon from "../assets/amazon.png"
import woocommerce from "../assets/woocommerce.png"
import meundies from "../assets/meundies.png"
import sitepoint from "../assets/sitepoint.png"

const CompanyLogo = () => {
    const logos = [slack, amazon, woocommerce, meundies, sitepoint]
  return (
    <div className='overflow-hidden w-full container mx-auto py-20 flex  sm:items-center items-start px-2 sm:px-6 lg:px-8'>
        <div className='overflow-hidden flex items-center flex-col sm:flex-row sm:gap-0 gap-8 '>
        <div className='w-[280px] px-5 shrink-0 text-gray-600 border-l-4 border-blue-500 bg-white py-2 z-10 sm:text-base text-xl font-semibold text-left'>Proud partner at <br/> Hubspot & Segment</div>

        <div className=' flex animate-marque whitespace-nowrap '>
            {[...logos,...logos,...logos,...logos].map((logo, index)=> (
                <img key={index} src={logo} alt="company logo"
                className='mx-12 h-8 w-36 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all' />
            ))}
        </div>
        </div>
    </div>
  )
}

export default CompanyLogo