import React from 'react';
import SideBarEntries from './SideBarEntries';
import db from '@/db/db';
const SideBar = (props) => {
  return (
    <div className="w-2/12 mt-20 fixed top-20 left-10 z-10">
          <div className="rounded-lg shadow-lg bg-opacity-10 backdrop-blur-md bg-primary p-4">
      <h1 className="text-2xl font-bold text-accent mb-4">Categories</h1>
      {props.category === undefined?db.categories.map(e=><SideBarEntries name={e}/>):db.categories.map(e=><SideBarEntries name={e} category = {props.category}/>)}
    </div>
    </div>
  );
};

export default SideBar;
