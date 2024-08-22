"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Separator } from '../ui/separator';
import { servicesLinks } from '@/constants';
import { Button } from '../ui/button';

const AboutUs = () => {
    const [showMore, setShowMore] = useState(false);
    const initialServices = servicesLinks.slice(0, 3);
    const additionalServices = servicesLinks.slice(3);
    
    return (
    <div className = "w-full flex flex-col">
        <div className="relative bg-[#021C32] px-[16px] flex flex-col justify-center gap-[24px] h-[438px]">
            <div className = "absolute top-[32px] w-[138px] right-[10px]">
                <Image 
                    src="/assets/images/vector.png" 
                    alt="Vector Image" 
                    width={142}
                    height={142}
                /> 
            </div>     
            <p className="font-medium text-[24px] leading-[36px] text-white">
            Empowering Success Through Innovative Solutions 
            </p>
            <p className="font-normal text-[14px] leading-[22px] text-white">
            We believe a successful website goes beyond aesthetics; it's a strategic tool to achieve your business goals. That's why we take a collaborative approach, working closely with you to understand your vision, target audience, and desired outcomes. Our team of skilled developers and designers will then craft a beautiful, user-friendly website optimized for search engines and conversions. We're passionate about clear communication and keeping you informed throughout the entire process.
            </p>
        </div>
        <h2 className = "bg-[#F7F7F7] text-center font-medium text-[22px] pt-[24px] leading-[33px] text-[#020B13]">Grow Your Business Online</h2>
        {initialServices.map((service) => (
            <div key = {service.id} className = "bg-[#F7F7F7] flex flex-col h-[413px] gap-[24px]">
                <Image 
                    src={service.imageUrl} 
                    alt={service.alt}
                    width={370}
                    height={296}
                    className="h-[214px] mt-[24px] px-[16px]"
                />
                <div className = "flex w-full gap-[16px] px-[16px]">
                    <div className = "w-[24px]">
                        <Image
                            src={service.noUrl}
                            alt={service.noAlt} 
                            width={48}
                            height={48}
                            className="object-contain"
                        />
                    </div>
                    <div className = "flex flex-col gap-[12px]">
                        <h3 className="font-medium text-[18px] leading-[27px] text-[#020B13]">{service.title}</h3>
                        <p className = "font-normal text-[16px] leading-[26px] text-[#515151]">{service.description}</p>
                        <Link href={service.linkUrl} className = "flex gap-[12px]">
                            <p className="font-medium text-[16px] leading-[24px] underline text-[#1D71B9]">Learn More</p>
                            <Image 
                                src="/assets/icons/learn-more.svg" 
                                alt="Learn More" 
                                width={24}
                                height={24}
                                className="object-contain"
                            />
                        </Link>
                    </div>
                </div>
                <Separator orientation='horizontal'/>
            </div> 
        ))}
        {showMore && additionalServices.map((service) => (
            <div key = {service.id} className = "bg-[#F7F7F7] flex flex-col h-[413px] gap-[24px]">
                <Image 
                    src={service.imageUrl} 
                    alt={service.alt}
                    width={370}
                    height={296}
                    className="h-[214px] mt-[24px] px-[16px]"
                />
                <div className = "flex w-full gap-[16px] px-[16px]">
                    <div className = "w-[24px]">
                        <Image
                            src={service.noUrl}
                            alt={service.noAlt} 
                            width={48}
                            height={48}
                            className="object-contain"
                        />
                    </div>
                    <div className = "flex flex-col gap-[12px]">
                        <h3 className="font-medium text-[18px] leading-[27px] text-[#020B13]">{service.title}</h3>
                        <p className = "font-normal text-[16px] leading-[26px] text-[#515151]">{service.description}</p>
                        <Link href={service.linkUrl} className = "flex gap-[12px]">
                            <p className="font-medium text-[16px] leading-[24px] underline text-[#1D71B9]">Learn More</p>
                            <Image 
                                src="/assets/icons/learn-more.svg" 
                                alt="Learn More" 
                                width={24}
                                height={24}
                                className="object-contain"
                            />
                        </Link>
                    </div>
                </div>
                <Separator orientation='horizontal'/>
            </div> 
        ))}
        {!showMore && additionalServices.length > 0 && (
        <div className="bg-[#F7F7F7] flex justify-center py-[24px]">
          <Button onClick={() => setShowMore(true)} className = "rounded-[45px] text-[16px] bg-[#1D71B9] leading-[24px]">
            See More
          </Button>
        </div>
      )}
    </div>
  )
}


export default AboutUs;


