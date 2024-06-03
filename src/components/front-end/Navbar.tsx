import { Logo } from '@/assets/images'
import { useAppSelector } from '@/redux/hook'
import Image from 'next/image'
import React from 'react'
import { AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai'
import { BsSearch } from 'react-icons/bs'

interface propsType {
    setShowCart: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Navbar({ setShowCart }: propsType) {
    const cartCount = useAppSelector((state) => state.cartReducer.length)
    return (
        <div className='pt-4 bg-white top-0 sticky'>
            <div className="w-[80%] mx-auto">
                <div className="flex justify-between items-center">
                    <div className="text-4xl font-bold">
                        <Image src={Logo} alt='logo' width={80} height={50} />
                    </div>
                    <div className='lg:flex hidden w-full max-w-[500px]'>
                        <input
                            className='border-2 focus:outline-none border-sky-600 px-6 py-3 w-full'
                            placeholder='Search for products...'
                            type="text"
                        />
                        <div className='bg-sky-600 text-white text-[26px] grid place-items-center px-4'>
                            <BsSearch />
                        </div>

                    </div>
                    {/* user sign in or not */}
                    <div className='flex gap-4 md:gap-8 items-center'>
                        <div className='md:flex hidden gap-3'>
                            <div className='rounded-full border-2 border-gray-300 text-gray-500 text-[32px] w-[50px] h-[50px] grid place-items-center'>
                                <AiOutlineUser />
                            </div>
                            <div>
                                <p className='text-gray-500'>Hello, Sign in</p>
                                <p className='font-medium'>Your Account</p>
                            </div>
                        </div>
                    </div>
                    {/* cart */}
                    <div className='text-gray-500 text-[32px] relative cursor-pointer' onClick={() => setShowCart(true)}>
                        <AiOutlineShoppingCart />
                        <div className='absolute top-[-15px] right-[-10px] bg-red-600 w-[25px] h-[25px] rounded-full text-white text-[14px] grid place-items-center '>
                            {cartCount}
                        </div>
                    </div>
                </div>
            </div>
            <div className='border-b border-gary-300 pt-4'></div>
        </div>
    )
}
