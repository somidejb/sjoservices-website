import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div className="h-[63px] z-10 absolute w-full flex justify-between items-center px-[16px]">
        <Image 
            src="/assets/images/logo-header.png" 
            alt="SJO Services Logo" 
            width={120}
            height={69}
            className="w-[68px] h-[39px]"
        />
        <Image 
            src="/assets/icons/menu.svg" 
            alt="Menu" 
            width={24}
            height={24}
        />
    </div>
  )
}

export default Header