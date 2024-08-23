import { footerLinks } from '@/constants'
import { Separator } from '@radix-ui/react-separator'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className="bg-[#021C32] w-full py-[32px] px-[16px]">
        <div className="flex flex-col gap-[24px]">
            <Image 
                src="/assets/images/footer-logo.png" 
                alt="SJO Services Logo" 
                width={162}
                height={100}
                className="w-[122px]"
            />
            {footerLinks.map((link) => (
                <div key={link.id} className="flex flex-col gap-[12px]">
                    <p className="pt-[4px] text-[18px] font-medium leading-[27px] text-[#FFFFFF]">{link.title}</p>
                    {link.links.map((otherLink) => (
                        <p className="text-white font-normal text-[14px] leading-[24px]" key={otherLink.id}>{otherLink.title}</p>
                    ))}
                </div>
            ))}
            <div className="flex flex-col gap-[16px]">
                <p className="pt-[4px] mb-[16px] text-[18px] font-medium leading-[27px] text-[#FFFFFF]">Contact</p>
                <div className= "flex flex-col gap-[12px]">
                    <p className="text-white font-normal text-[14px] leading-[24px]">Email:</p>
                    <p className="text-white font-normal text-[14px] leading-[24px]">sjoservicesca@gmail.com</p>
                    <p className="text-white font-normal text-[14px] leading-[24px]">Phone:</p>
                    <p className="text-white font-normal text-[14px] leading-[24px]">(587)340-2627</p>
                </div>
            </div>
            <div className="w-full bg-white h-[1px]"/>
            <p className="text-white font-normal text-[14px] leading-[20px]">Copyright © 2023 | SJO Services | All Rights Reserved</p>
        </div>
    </div>
  )
}

export default Footer