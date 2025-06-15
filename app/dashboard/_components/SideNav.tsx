"use client"
import React, { useEffect } from 'react'
import Image from 'next/image'
import { FileClock, Home, Settings, WalletCards } from 'lucide-react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const SideNav = () => {
    const MenuList=[
        {
            name:'Home',
            icon:Home,
            path:'/dashboard'
        },
        {
            name:'History',
            icon:FileClock,
            path:'dashboard/history'
        },
        {
            name:'Billing',
            icon:WalletCards,
            path:'/dashboard/billing'
        },
        {
            name:'Setting',
            icon:Settings,
            path:'/dashboard/setting'
        }
    ]

    const path=usePathname();

    
  return (
    <div className='h-screen p-5 shadow-sm border bg-white'>
        <Link href="/" className='flex justify-center'>
            <Image src={'/logo.svg'} alt='logo' width={100} height={40}></Image>
        </Link>
        <hr className='mt-6 border'/>
        <div className='mt-3'>
            {
                MenuList.map((menu,index)=>{
                    return <div key={index} className={`flex gap-2 items-center mb-2 p-3 hover:bg-primary hover:text-white rounded-lg cursor-pointer ${path==menu.path && 'bg-primary text-white'}`}>
                        <menu.icon className='h-6 w-6'></menu.icon>
                        <h2 className='text-lg'>{menu.name}</h2>
                    </div>
                })
            }
        </div>
    </div>
  )
}

export default SideNav