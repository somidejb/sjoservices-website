import { projectLinks } from '@/constants'
import Image from 'next/image'
import React from 'react'

const Projects = () => {
  return (
    <div className = "w-full flex flex-col px-[16px] gap-[24px] justify-center mt-[24px]">
        <h2 className="leading-[33px] text-[22px] font-medium text-[#020B13]">We design to be engaging</h2>
        {projectLinks.map((project) => (
        <div key={project.id} className="flex flex-col w-full gap-[24px]">
            <Image 
                src={project.imageUrl} 
                alt={project.title}
                width={570}
                height={562}
                className="h-[344px] rounded-[16px]"
            />
            <div className= "flex flex-col gap-[16px] items-start">
                <p className= "text-[18px] font-medium leading-[27px] text-[#020B13]">{project.title}</p>
                <p className= "text-[16px] font-normal leading-[26px] text-[#515151]">{project.service}</p>
            </div>
        </div>
        ))}
    </div>
  )
}

export default Projects


