import { IProduct } from '@/app/admin/dashboard/page'
import { setLoading } from '@/redux/features/loadingSlice'
import { setProduct } from '@/redux/features/productSlice'
import { useAppDispatch } from '@/redux/hook'
import { makeToast } from '@/utils/helper'
import axios from 'axios'
import Image from 'next/image'
import React from 'react'
import { CiEdit } from 'react-icons/ci'
import { RiDeleteBin5Line } from 'react-icons/ri'

interface PropsType {
    srNo: number
    setOpenPopup: React.Dispatch<React.SetStateAction<boolean>>
    setUpdataTable: React.Dispatch<React.SetStateAction<boolean>>
    product: IProduct
}


export default function ProductRow({
    srNo, setOpenPopup, setUpdataTable, product }: PropsType) {

    const dispathch = useAppDispatch()
    const onEdit = () => {
        dispathch(setProduct(product))
        setOpenPopup(true)
    }

    const onDelete = () => {
        const payload = {
            fileKey: product.fileKey
        }

        axios.delete("/api/uploadthing", { data: payload }).then(res => {
            console.log(res.data)
            dispathch(setLoading(true))
            axios.delete(`/api/delete_product/${product._id}`).then(res => {
                console.log(res.data)
                setUpdataTable(prev => !prev)
                makeToast("Product Deleted Successfully")
            }).catch(err => console.log(err))
            .finally(() => dispathch(setLoading(false)))
        }).catch(err => console.log(err))

    }
    return (
        <tr>
            <td>
                <div className='text-center'>{srNo}</div>
            </td>
            <td>
                <div className='text-center'>{product.name}</div>
            </td>
            <td className='text-center'>$ {product.price}</td>
            <td className='py-2 flex justify-center'>
                <Image src={product.imgSrc} alt="product" width={40} height={40} />
            </td>
            <td className=''>
                <div className='text-2xl flex items-center justify-center gap-2 text-gray-600'>
                    <CiEdit
                        className='cursor-pointer hover:text-black'
                        onClick={onEdit}
                    />
                    <RiDeleteBin5Line
                        className='cursor-pointer hover:text-red-600'
                        onClick={onDelete}
                    />
                </div>
            </td>
        </tr>
    )
}
