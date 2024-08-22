import Image from 'next/image'
import React from 'react'
import { Separator } from '../ui/separator'
import { pricingPlans, webServices } from '@/constants'
import { Button } from '../ui/button'

const Plans = () => {
  return (
    <div className="bg-[#021C32] w-full flex flex-col px-[16px] pb-[24px]">
        {pricingPlans.map((plan) => (
            <div key={plan.id} className={`mt-[24px] w-full rounded-[16px] ${plan.id === 2 ? "middle-gradient" : "card-gradient" }`}>
                <div className = "flex flex-col p-[16px]">
                    <div className= "flex flex-col gap-[16px]">
                        <p className="text-white text-[18px] leading-[27px] font-medium">{plan.title}</p>
                        <p className="text-white text-[12px] leading-[18px] font-normal">{plan.description}</p>
                        <p className="text-white text-[18px] leading-[27px] font-medium">Starts At <span className="text-[28px] leading-[42px]">${plan.price}</span></p>
                        <div className= "flex justify-between">
                            <div className="flex justify-between items-center">
                                <Image 
                                    src="/assets/icons/time.svg"
                                    alt="time"
                                    width={18}
                                    height={18}
                                />
                                <p className="text-white text-[14px] font-medium leading-[26px]">{plan.time}</p>
                            </div>
                            <div className="flex justify-between items-center">
                                <Image 
                                    src="/assets/icons/cycle.svg"
                                    alt="cycle"
                                    width={18}
                                    height={18}
                                />
                                <p className="text-white text-[14px] font-medium leading-[26px]">Unlimited Revisions</p>
                            </div>
                        </div>
                        <Separator className="bg-white" orientation='horizontal'/>
                        <div className="flex flex-col gap-[8px]">
                            {webServices.map((service, index) => (
                                <div key={service.id} className="flex gap-[8px]">
                                    <Image 
                                        src={plan.services[index] === 1 ? "/assets/icons/checked.svg" : "/assets/icons/unchecked.svg"}
                                        alt={service.title}
                                        width={18}
                                        height={18}
                                    />
                                    <p className="text-white text-[14px] font-medium leading-[26px]">{service.title}</p>
                                </div>
                            ))}
                        </div>
                        <Button variant="outline" className={`${plan.id === 2 ? "bg-[#1D71B9]" : "bg-transparent"} w-full rounded-full text-white font-medium leading-[24px] text-[16px]`}>Request to Order</Button>
                    </div>
                </div>
            </div>
        ))}
    </div>
  )
}

export default Plans
