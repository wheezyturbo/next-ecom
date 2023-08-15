import Link from 'next/link';
import React from 'react';
import {BsArrowRightSquareFill} from 'react-icons/bs'
const SideBarEntries = (props) => {
  return (

      <div className="flex items-center p-2 mb-2 bg-opacity-20 backdrop-blur-sm rounded-md text-white hover:shadow-md transition-shadow">
       {props.name}
       <Link className='ml-auto text-emerald-400 text-xl' href=''><BsArrowRightSquareFill/></Link>
    </div>
  );
};

export default SideBarEntries;
