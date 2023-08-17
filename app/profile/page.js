'use client'
import React,{useContext} from 'react'
import { UserContext } from '@/context/UserContext'
import { useRouter } from 'next/navigation'

const page = () => {
    const router = useRouter();
    const logout = ()=>{
        user.setUser(null);
        router.push('/login')
    }
    
const user = useContext(UserContext);
  return (
    <button className='bg-red-500' onClick={logout}>logout</button>
  )
}

export default page