import React, { useState } from 'react'
import {IoIosArrowForward} from 'react-icons/io'
import AccordionItem from './AccordionItem'

const Faq = () => {

    const [open, setOpen] = useState(false);

    const toggle = (index) => {
        if(open === index) {
            return setOpen(null)
        }
        setOpen(index)
    }

    const accordionData = [
        {
            title: "How much does it cost to get an market assistant for a whole day?",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex quos nobis perferendis pariatur reiciendis, architecto repellendus provident, quisquam labore eum voluptatum neque soluta nihil mollitia voluptatem dignissimos recusandae iur"
        },
        {
            title: "How much does Netflix cost?",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex quos nobis perferendis pariatur reiciendis, architecto repellendus provident, quisquam labore eum voluptatum neque soluta nihil mollitia voluptatem dignissimos recusandae iur"

        },
        {
            title: "Where can I watch?",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex quos nobis perferendis pariatur reiciendis, architecto repellendus provident, quisquam labore eum voluptatum neque soluta nihil mollitia voluptatem dignissimos recusandae iur"
        },
        {
            title: "How do I cancel?",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex quos nobis perferendis pariatur reiciendis, architecto repellendus provident, quisquam labore eum voluptatum neque soluta nihil mollitia voluptatem dignissimos recusandae iur"
        },
        {
            title: "What can I watch on Netflix?",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex quos nobis perferendis pariatur reiciendis, architecto repellendus provident, quisquam labore eum voluptatum neque soluta nihil mollitia voluptatem dignissimos recusandae iur"
        },
        {
            title: "Is Netflix good for kids?",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex quos nobis perferendis pariatur reiciendis, architecto repellendus provident, quisquam labore eum voluptatum neque soluta nihil mollitia voluptatem dignissimos recusandae iur"
        },
    ]


  return (
    <div className='  flex justify-center items-center'>
        <div className='flex flex-col gap-[50px] justify-center w-[600px]'>
            <div className='flex flex-col gap-3'>
                {accordionData.map((data, index) => {
                    return <AccordionItem key={index} open={index === open} title={data.title} desc={data.desc} toggle={()=>toggle(index)}/>
                })}
            </div>
        </div>
    </div>
  )
}

export default Faq