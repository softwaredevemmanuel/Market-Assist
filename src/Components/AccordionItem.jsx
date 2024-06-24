import React from 'react'
import { IoMdAdd } from 'react-icons/io'
import { AiOutlineMinus } from 'react-icons/ai'
import { Collapse } from 'react-collapse'


const AccordionItem = ({open, toggle, title, desc}) => {
  return (
    <div className='pt-[10px] text-[12px]'>
        <div className='flex justify-between bg-white w-full h-[50px] px-4 items-center text-black font-medium cursor-pointer' onClick={toggle}>
            <h1 className='text-[14px] font-semibold'>{title}</h1>
            <div className=''>
                {open ? <AiOutlineMinus size={22}/> : <IoMdAdd size={22}/>}
            </div>
        </div>

        <Collapse isOpened={open}>
            <div className='bg-white text-black px-4 pb-[20px]'>{desc}</div>
        </Collapse>
    </div>
  )
}

export default AccordionItem