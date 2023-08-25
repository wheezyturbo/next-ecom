'use client'
import React,{useContext, useEffect} from 'react'
import { UserContext } from '@/context/UserContext'
import { useRouter } from 'next/navigation'
import { CartContext } from '@/context/CartContext'
import Link from 'next/link'

const page = () => {
    const user = useContext(UserContext);
    const cart = useContext(CartContext);
    const router = useRouter();
    const logout = ()=>{
        user.setUser(null);
        cart.setCartItems([])
        router.push('/login')
    }
    

  return (
    <div className='flex justify-center items-center'>
    {user.user!=null?<button className='bg-red-500 px-3 py-1 rounded-md hover:bg-red-700' onClick={logout}>logout</button>:<><span>Please</span><Link href='/login' className='ml-2 text-red-500'>Login</Link></>}
    </div>
  )
}

export default page