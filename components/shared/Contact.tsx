import React from 'react'
import ContactForm from './ContactForm'


const Contact = () => { 
  return (
        <div className="bg-[#F7F7F7] px-[16px] py-[32px] flex flex-col gap-[24px] w-full">
        <div className="flex flex-col gap-[24px]">
            <h2 className = "text-[24px] leading-[44px] font-medium">Contact Details</h2>
            <div className="flex flex-col gap-[12px]">
                <p className= "text-[#515151] font-normal text-[16px] leading-[26px]">Email:</p>
                <p className="font-normal text-[18px] leading-[27px]">sjoservices@gmail.com</p>
            </div>
            <div className="flex flex-col gap-[12px]">
                <p className= "text-[#515151] font-normal text-[16px] leading-[26px]">Phone:</p>
                <p className="font-normal text-[18px] leading-[27px]">(587) 340-2627</p>
            </div>
            <div className="flex flex-col gap-[24px]">
                <h2 className = "text-[24px] leading-[44px] font-medium">Drop us a line</h2>
            </div>
            <ContactForm />
        </div>
    </div>
  )
}

export default Contact