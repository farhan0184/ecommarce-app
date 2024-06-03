'use client'
import { Upload } from '@/assets/images';
import { setLoading } from '@/redux/features/loadingSlice';
import { useAppDispatch } from '@/redux/hook';
import { makeToast } from '@/utils/helper';
import { UploadButton } from '@/utils/uploadthing';
import axios from 'axios';
import Image from 'next/image';
import React from 'react'

interface IProduct {
  imgSrc: null | string;
  fileKey: null | string;
  name: string;
  price: string;
  category: string;
}

export default function ProductForm() {

  const [payload, setPayload] = React.useState<IProduct>({
    imgSrc: null,
    fileKey: null,
    name: '',
    price: '',
    category: ''
  })

  const dispatch = useAppDispatch()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    dispatch(setLoading(true))
    axios.post('/api/add_product', payload).then(res => {
      makeToast("Product Added Successfully")
      setPayload({
        imgSrc: null,
        fileKey: null,
        name: '',
        price: '',
        category: ''
      })
    }).catch(err => console.log(err))
      .finally(() => dispatch(setLoading(false)))
  }

  return <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
    <Image
      src={payload.imgSrc ? payload.imgSrc : Upload}
      className='max-h-[300px] w-auto object-contain rounded-md'
      width={800}
      height={500}
      alt="Product_img"
    />
    <UploadButton
      endpoint="imageUploader"
      onClientUploadComplete={(res) => {
        // Do something with the response
        console.log(res);
        setPayload({
          ...payload,
          imgSrc: res[0]?.url,
          fileKey: res[0]?.key

        })
      }}
      onUploadError={(error: Error) => {
        // Do something with the error.
        alert(`ERROR! ${error.message}`);
      }}
    />

    <div>
      <label className='block ml-1'>Product Name</label>
      <input
        type="text"
        className='bg-gary-300 w-full px-4 py-2 border outline-red-500 rounded-md'
        value={payload.name}
        onChange={(e) => setPayload({ ...payload, name: e.target.value })}
        required
      />
    </div>
    <div>
      <label className='block ml-1'>Product Category</label>
      <input
        type="text"
        className='bg-gary-300 w-full px-4 py-2 border outline-red-500 rounded-md'
        value={payload.category}
        onChange={(e) => setPayload({ ...payload, category: e.target.value })}
        required
      />
    </div>
    <div>
      <label className='block ml-1'>Product Price</label>
      <input
        type="text"
        className='bg-gary-300 w-full px-4 py-2 border outline-red-500 rounded-md'
        value={payload.price}
        onChange={(e) => setPayload({ ...payload, price: e.target.value })}
        required
      />

      <div className='flex justify-end mt-4'>
        <button className='bg-pink-600 text-white px-8 py-2 rounded-md'> 
          Add
        </button>
      </div>
    </div>

  </form>
}
