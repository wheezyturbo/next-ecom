import React from 'react'
import {FiSearch} from "react-icons/fi";
import {LuShoppingCart,LuHeart,} from 'react-icons/lu';
import {CgProfile} from 'react-icons/cg';
import Link from 'next/link';
const Header = () => {
  return (
    <nav className="flex w-full text-white p-5 items-center justify-evenly">
        <div className="nav-left flex-auto">
            <h1 className="text-center font-bold text-3xl">Test</h1>
        </div>
        <div className="nav-center flex-auto bg-gradient-to-tr from-primary to-secondary rounded-full w-min flex h-10">
        <input
      type="search"
      className="relative m-0 block w-10/12 flex-auto rounded-full border-none  bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-slate-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-slate-200 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
      placeholder="Search"
      aria-label="Search"
      aria-describedby="button-addon2" />
      <button className='w-1/12 '>
      <FiSearch/>
      </button>
        </div>
        <div className="nav-right flex-auto flex gap-3 w-1/12 text-xl">
            <Link href='#' className='ml-auto'><LuShoppingCart/></Link>
            <Link href='#'><LuHeart/></Link>
            <Link href='/login' className='mr-auto'><CgProfile/></Link>
        </div>
    </nav>
  )
}

export default Header