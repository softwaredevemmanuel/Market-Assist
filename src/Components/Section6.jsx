import React from 'react'
import splash from '../Assets/unsplash_OFdzvXjKeok.png'
import Faq from './Faq'

const Section6 = () => {
  return (
    <div className='bg-[#EEF9E9] py-[110px] w-full h-full px-[100px]'>
      <div className='flex gap-[150px] justify-center items-center'>
        <div>
            <img className='w-[450px]' src={splash} alt="" />
        </div>
        <div className='py-4 flex flex-col gap-4 '>
          <h1 className='text-[30px] font-medium'>Frequently Asked Questions</h1>
          <p className='text-[13px]'>Here are some commonly asked questions?</p>
<Faq/>
        </div>
      </div>
    </div>
  )
}

export default Section6
