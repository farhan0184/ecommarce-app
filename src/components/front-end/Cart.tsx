import { useAppSelector } from '@/redux/hook'
import React from 'react'
import { RxCross1 } from 'react-icons/rx';
import CartProduct from './CartProduct';
import { useOutsideClick } from '@/hooks/useOutsideClick';

interface PropsType {
    setShowCart: React.Dispatch<React.SetStateAction<boolean>>
}
export default function Cart({ setShowCart }: PropsType) {
    const ref = useOutsideClick(() => {
        setShowCart(false)
    });
    const product = useAppSelector((state) => state.cartReducer);
    const getTotal = () => {
        let total = 0
        product.forEach((item) => {
            total = total + item.price * item.quantity
        })
        return total
    }
    return (
        <div className='bg-[#0000007d] w-full min-h-screen fixed left-0 top-0 z-10 overflow-y-scroll' >
            <div className="max-w-[400px] w-full min-h-screen bg-white absolute right-0 top-0 p-6 z-50" ref={ref}>
                <RxCross1
                    className='absolute right-0 top-0 m-6 text-[24px] cursor-pointer'
                    onClick={() => setShowCart(false)}
                />
                <h3 className='pt-6 text-lg font-medium text-gray-600 uppercase'>Your Cart</h3>
                <div className='mt-6 space-y-2'>
                    {product.map((item) => (
                        <CartProduct
                            key={item.id}
                            id={item.id}
                            img={item.img}
                            title={item.title}
                            price={item.price}
                            quantity={item.quantity}
                        />
                    ))}
                </div>

                <div className='flex justify-between item-center font-medium text-xl py-4'>
                    <p>Total:</p>
                    <p>${getTotal()}.00</p>
                </div>

                <button className='bg-black text-white text-center w-full rounded-3xl py-2 hover:bg-sky-600 mb-4 mt-4'>
                    View Cart
                </button>
                <button className='bg-black text-white text-center w-full rounded-3xl py-2 hover:bg-sky-600 '>
                    CheckOut
                </button>
            </div>

        </div>
    )
}
