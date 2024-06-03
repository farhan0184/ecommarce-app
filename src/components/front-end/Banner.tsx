// import { Banner1, Banner2 } from '@/assets/images'
import Link from 'next/link'
import React from 'react'

export default function Banner() {
    return (
        <div className='w-[80%] mx-auto mt-32'>
            <div className='grid lg:grid-cols-[66%,34%] gap-4 pr-[15px]'>
                <div className={`h-[280px] bg-[url('/banner.jpg')] bg-cover bg-center rounded-xl p-8 md:p-16 `}>
                    <p className='text-[#302f47] text-xl font-medium'>
                        Sale 20% off all store
                    </p>
                    <h1 className='text-[#302f47] font-bold text-xl md:text-3xl md:w-[240px]  '>
                        Samrtphone BLU G91 Pro 2024
                    </h1>
                    <Link href={'#'} className='inline-block bg-[#302f47] font-medium mt-6 text-white hover:text-sky-600 px-8 py-2 rounded-lg'>Shop Now</Link>
                </div>
                <div className={`h-[280px] bg-[url('/banner2.png')] bg-right rounded-lg hidden lg:block`}>

                </div>

            </div>


        </div>
    )
}
