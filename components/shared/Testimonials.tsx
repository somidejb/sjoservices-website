import Image from 'next/image'
import React from 'react'

const Testimonials = () => {
  return (
    <div className="flex gap-[24px] px-[16px] justify-center flex-col mt-[24px] pt-[24px] bg-[#F7F7F7] w-full h-[515px]">
        <h2 className="text-[22px] leading-[33px] font-medium text-[#020B13]">What Our Clients Say</h2>
        <div className="flex flex-col gap-[40px] relative">
            <Image 
                src="/assets/icons/question.svg"
                alt="background"
                width={115}
                height={93}
                className="z-10 absolute w-[74px] right-0 top-[56px]"
            />
            <div className="flex gap-[16px] h-[66px]">
                <Image 
                    src="/assets/images/profile-cust.png" 
                    alt="Profile" 
                    width={66}
                    height={66}
                />
                <div className="flex flex-col gap-[7px]">
                    <p className="text-[18px] font-medium leading-[27px] text-[#020B13]">Aelita Emit</p>
                    <p className="text-[16px] font-normal leading-[26px] text-[#515151]">Founder & CEO, Visio</p>
                </div>
            </div>
            <p className="text-[18px] text-normal leading-[32px] text-[#020B13]">I was impressed with SJO Services&apos;s ability to understand my vision and translate it into a beautiful and functional website. The SEO optimization has also led to a significant increase in website traffic.</p>
        </div>
        <div className="flex gap-[29px] justify-center">
            <Image 
                src="/assets/images/left-arrow.png" 
                alt="Left arrow" 
                width={40}
                height={40}
            />
            <Image 
                src="/assets/images/right-arrow.png" 
                alt="right arrow" 
                width={40}
                height={40}
            />
        </div>
    </div>
  )
}

export default Testimonials