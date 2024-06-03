"use client"
import React from 'react'
import { MdDashboard, MdManageAccounts } from 'react-icons/md'
import { GrTransaction } from 'react-icons/gr'
import { IoAnalytics, IoSettings } from 'react-icons/io5'
import { RiShoppingCartLine } from 'react-icons/ri'
import { title } from 'process'
import { Logo } from '@/assets/images'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const menus = [
    {
        title: 'Dashboard',
        icon: <MdDashboard />,
        href: '/admin/dashboard'
    },
    {
        title: 'Products',
        icon: <RiShoppingCartLine />,
        href: '/admin/products'
    },
    {
        title: 'Accounts',
        icon: <MdManageAccounts />,
        href: '/admin/orders'
    },
    {
        title: 'Trasactions',
        icon: <GrTransaction />,
        href: '/admin/transactions'
    },
    {
        title: 'Analytics',
        icon: <IoAnalytics />,
        href: '/admin/analytics'
    },
    {
        title: 'Settings',
        icon: <IoSettings />,
        href: '/admin/settings'
    },
]

export default function Sidebar() {
    const pathName = usePathname()
    return (
        <div className='bg-white w-[300px] min-h-screen p-4 shrink-0'>
            <div className='flex items-center gap-4'>
                <Image src={Logo} alt="logo" width={50} height={50} />
                <h1 className='text-2xl font-bold'>Admin Panel</h1>
            </div>

            <ul className='space-y-4 mt-8'>
                {menus.map((menu, index) => 
                    <Link key={index} href={menu.href} className={`flex gap-2 items-center p-4 rounded-lg cursor-pointer hover:bg-pink-600 hover:text-white ${menu.href === pathName ? 'bg-pink-600 text-white' : 'bg-gray-200'}`}><div className='flex items-center gap-2'>
                        <span className='text-xl'>{menu.icon}</span>
                        {menu.title}

                    </div></Link>
                )}
            </ul>
        </div>
    )
}
