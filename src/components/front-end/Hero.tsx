import { LaptopTab } from '@/assets/images'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Hero() {
    return <div className='bg-[#E3EDF6] py-4'>
        <div className='w-[80%] mx-auto grid md:grid-cols-2 py-8'>
            <div className="flex items-center">
                <div className="max-w-[450px] space-y-4">
                    <p>Starting T <span className='font-bold'>$999.00</span></p>
                    <h1 className='text-black font-bold text-4xl md:text-5xl'>The best note book collection 2023</h1>
                    <h3>Exclusive offer <span className='text-red-600'>-10%</span> off this week</h3>

                    <Link href={'#'} className='inline-block bg-white rounded-md px-6 py-3 hover:bg-sky-600 hover:text-white'>Shop Now</Link>
                </div>
            </div>
            <div>
                <Image className='ml-auto' src={LaptopTab} alt="laptop" width={500} height={500} />
            </div>

        </div>
    </div>
}
