import ProductForm from '@/components/admin-panel/ProductForm'
import React from 'react'

export default function ProductPage() {
  return (
    <div className='h-[calc(100vh-96px)] w-full grid place-items-center overflow-y-auto'>
        <div className='bg-white p-4 w-[500px] rounded-lg'>
            <ProductForm/>
        </div>
    </div>
  )
}
