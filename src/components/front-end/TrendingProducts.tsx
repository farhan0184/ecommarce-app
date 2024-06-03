'use client'
import axios from 'axios'
import React, { useEffect } from 'react'
import ProductCard from './ProductCard'

interface PropsType {
    _id: string
    imgSrc: string
    fileKey: string
    name: string
    category: string
    price: number
}

export default function TrendingProducts() {
    const [products, setProducts] = React.useState([])
    useEffect(() => {
        axios.get('/api/get_products').then((res) => {
            setProducts(res.data)

        }).catch((err) => {
            console.log(err)
        })
    }, [])
    return (
        <div className='w-[80%] mx-auto mt-32'>
            <div className=''>
                <div className='sm:flex justify-between items-center'>
                    <h2 className='text-4xl font-medium'>Trending Products</h2>

                    <div className='text-gray-500 flex gap-4 text-xl mt-4 sm:mt-0'>
                        <div>Featured</div>
                        <div>Top Sellers</div>
                    </div>
                </div>


                <div className='grid gap-6  sm:grid-cols-2 md:*grid-cols-3 xl:grid-cols-4 mt-8'>
                    {products.map((item: PropsType) => (
                        <ProductCard
                            key={item._id}
                            id={item._id}
                            title={item.name}
                            img={item.imgSrc}
                            price={item.price}
                            category={item.category}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
