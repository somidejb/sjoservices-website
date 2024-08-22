import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'

const Banner = () => {
  return (
    <section className="relative bg-[#F7F7F7] w-full h-[472px] xl:h-[864px]">
        <div className = "absolute w-[217px] right-0 bottom-0 overflow-hidden">
            <Image 
                src="/assets/images/Torus_array.png" 
                alt="banner" 
                width={660}
                height={610}
                className="object-contain"
            />
        </div>
        <div className = "flex flex-col justify-center px-[16px] w-full gap-[24px] h-full">
            <h1 className="font-semibold text-[24px] leading-[36px] text-[#020B13]">Crafting Digital Excellence in Web Development</h1>
            <p className="font-normal text-[14px] leading-[22px] text-[#515151]">Harnessing Innovation, Expertise, and Creativity to Shape Your Digital Presence - Where Every Pixel Tells Your Story</p>
            <Button className = "rounded-full w-[120px] bg-[#1D71B9] text-white font-medium leading-[24px] text-[16px]">Contact Us</Button>
        </div>
    </section>
  )
}


export default Banner