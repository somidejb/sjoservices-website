import { footerLinks } from '@/constants'
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
            <p className="pt-[4px] text-[18px] font-medium leading-[27px] text-[#FFFFFF]">Contact</p>
            
        </div>
    </div>
  )
}

export default Footer