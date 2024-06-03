'use client'
import { addToCart } from '@/redux/features/cartSlice'
import { useAppDispatch } from '@/redux/hook'
import React from 'react'
import toast from 'react-hot-toast'
import { AiFillStar, AiOutlineShoppingCart, AiOutlineStar } from 'react-icons/ai'

interface PropsType {
    id: string
    img: string
    title: string
    price: number
    category: string
}

export default function ProductCard({ id, img, title, price, category }: PropsType) {
    const dispatch = useAppDispatch()
    const addProductToCart = () => {
        const payload = {
            id,
            img,
            title,
            price,
            quantity: 1,
        }

        dispatch(addToCart(payload))
        toast.success('Added to cart')
    }

    return (
        <div className='border border-gray-200'>
            <div className='text-center border-b border-gray-200'>
                <img className='inline-block' src={img} alt={title} />
            </div>
            <div className='px-8 py-4'>
                <p className='text-gray-600 text-[14px] font-medium'>{category}</p>
                <h2 className='font-medium'>{title}</h2>

                <div className='mt-3 flex text-[#FFB21D] items-center'>
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiOutlineStar/>
                    <p className='text-gray-600 text-[14px] ml-2'>(3 Reviews)</p>
                </div>

                <div className='flex justify-between items-center mt-4'>
                    <h2 className='font-medium text-sky-600 text-xl'>${price}</h2>
                    <div
                        className='flex gap-2 item-center bg-pink-600 text-white px-4 py-2 cursor-pointer hover:bg-sky-600'
                        onClick={addProductToCart}
                    >
                        <AiOutlineShoppingCart/> Add To Cart
                    </div>

                </div>
            </div>


        </div>
    )
}
