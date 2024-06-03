import { title } from 'process'
import React from 'react'
import { MdSupportAgent } from 'react-icons/md'
import { RiRefund2Fill } from 'react-icons/ri'
import { TbTruckDelivery, TbDiscount } from 'react-icons/tb'
import FeatureCard from './FeatureCard'

const data = [
    {
        icon:<TbTruckDelivery className='text-4xl'/>,
        title:'Free Delivery',
        decs: "Orders from al, item"
    },
    {
        icon:<RiRefund2Fill className='text-4xl'/>,
        title:'Return & Refund',
        decs: "Mony back guarantee"
    },
    {
        icon:<TbDiscount className='text-4xl'/>,
        title:'Member Discount',
        decs: "On order over $99.00"
    },
    {
        icon:<MdSupportAgent className='text-4xl'/>,
        title:'Support 24/7',
        decs: "Contact us 24 hours a day"
    },
]

export default function Feature() {
  return (
    <div className='w-[80%] mx-auto grid gap-1 sm:grid-cols-2 lg:grid-cols-4 mt-8'>
        {data.map((item)=>(
            <FeatureCard
                key={item.title}
                icon={item.icon}
                title={item.title}
                decs={item.decs}
            />
        ))}
    </div>
  )
}
