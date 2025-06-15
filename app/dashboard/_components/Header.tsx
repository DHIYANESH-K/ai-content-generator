import { Search } from 'lucide-react'
import React from 'react'
import { UserButton } from '@clerk/nextjs'

const Header = () => {
  return (
    <div className='p-5 shadow-sm border-b-2 bg-white flex justify-between items-center'>
        <div className='flex gap-2 items-center p-2 border rounded-md max-w-md bg-white'>
            <Search/>
            <input className='outline-none' type='text' placeholder='search'></input>
        </div>
        <div className='flex gap-8 items-center '>
            <h2 className='bg-primary p-1 rounded-full text-xs texr-white px-2'>Join Membership just for $9.99/Month</h2>
            <UserButton />
        </div>
    </div>
  )
}

export default Header