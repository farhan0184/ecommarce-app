'use client'
import { setLoading } from '@/redux/features/loadingSlice'
import { useAppDispatch, useAppSelector } from '@/redux/hook'
import { makeToast } from '@/utils/helper'
import axios from 'axios'
import React from 'react'
import { IoIosCloseCircleOutline } from 'react-icons/io'

interface PropsType {
    setOpenPopup: React.Dispatch<React.SetStateAction<boolean>>
    setUpdataTable: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Popup({setOpenPopup, setUpdataTable}: PropsType) {
    const ProductData = useAppSelector((state)=> state.productReducer)
    const dispathch = useAppDispatch()

    const [inputData, setInputData] = React.useState({
        name: ProductData.name,
        category: ProductData.category,
        price: ProductData.price
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        dispathch(setLoading(true))

        axios.put(`/api/edit_product/${ProductData._id}`, inputData).then(res => {
            makeToast("Product Updates Successfully")
            setUpdataTable((prev)=> !prev)
            
        }).catch(err => {
            console.log(err)
        }).finally(() => {
            dispathch(setLoading(false))
            setOpenPopup(false)
        })
    }
  return (
    <div className='fixed top-0 left-0 w-full h-screen bg-[#00000070] grid place-items-center'>
        <div className='bg-white w-[700px] py-8 rounded-lg text-center relative'>
            <IoIosCloseCircleOutline 
                className='absolute text-2xl right-0 top-0 m-4 cursor-pointer'
                onClick={() => setOpenPopup(false)}
            />

            <h2 className='text-2xl -mt-3'>Edit Product</h2>
            <form className='mt-6 w-fit space-y-4 mx-auto' onSubmit={handleSubmit}>
                <input 
                    className='border block border-gray-500 outline-none px-4 py-2 rounded-lg w-fit'
                    type="text"
                    placeholder='Name'
                    value={inputData.name}
                    onChange={(e)=> setInputData({...inputData, name: e.target.value})}
                />
                <input 
                    className='border block border-gray-500 outline-none px-4 py-2 rounded-lg w-fit'
                    type="text"
                    placeholder='Category'
                    value={inputData.category}
                    onChange={(e)=> setInputData({...inputData, category: e.target.value})}
                />
                <input 
                    className='border block border-gray-500 outline-none px-4 py-2 rounded-lg w-fit'
                    type="text"
                    placeholder='Price'
                    value={inputData.price}
                    onChange={(e)=> setInputData({...inputData, price: e.target.value})}
                />

                <div className='flex justify-end'>
                    <button className='bg-blue-500 block px-8 py-2 rounded-lg text-white self-center'>Update</button>
                </div>
            </form>
        </div>

    </div>
  )
}
