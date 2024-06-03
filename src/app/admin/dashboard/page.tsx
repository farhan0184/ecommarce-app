'use client'
import Popup from '@/components/admin-panel/Popup'
import ProductRow from '@/components/admin-panel/ProductRow'
import { setLoading } from '@/redux/features/loadingSlice'
import { useAppDispatch } from '@/redux/hook'
import axios from 'axios'
import React, { useEffect } from 'react'

export interface IProduct{
  _id: string,
  imgSrc: string,
  fileKey: string,
  name: string,
  price: string,
  category: string
}


export default function DashboardPage() {
  const [products, setProducts] = React.useState<IProduct[]>([])
  const [openPopup, setOpenPopup] = React.useState(false)
  const [updataTable, setUpdataTable] = React.useState(false)

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(setLoading(true))

    axios
    .get('/api/get_products')
    .then(res => {
      setProducts(res.data)
    })
    .catch(err => {
      console.log(err)
    })
    .finally(() => {
      dispatch(setLoading(false))
    })
  },[updataTable])
  // console.log(products)
  return (
    <div>
      <div className='bg-white h-[calc(100vh-96px)] rounded-lg p-4'>
        <h2 className='text-3xl'>All Products</h2>

        <div className='mt-4 h-[calc(100vh-180px)] overflow-y-auto'>
          <table className='w-full'>
            <thead>
              <tr className='text-gary-500 border-t border-b border-[#ececec]'>
                <th>SR No.</th>  
                <th>Name</th>
                <th>Price</th>
                <th>Picture</th>
                <th>Action</th>
              </tr>

            </thead>
            <tbody>
              {products.map((product, index) => (
                <ProductRow
                  key={product._id}
                  srNo={index + 1}
                  setOpenPopup={setOpenPopup}
                  setUpdataTable={setUpdataTable}
                  product={product}                
                />
              ))}
            </tbody>
          </table> 

        </div>
      </div>

      {openPopup && <Popup setOpenPopup={setOpenPopup} setUpdataTable={setUpdataTable}/>}
    </div>
  )
}



/*{
  _id: "afafaafafafaf",
  imgSrc: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  fileKey: 'dadasda',
  name: 'Camara',
  price: '300',
  category: 'Electic Product'
}*/