import React from 'react';
import GridCard from './GridCard';
import db from '@/db/db';
const Grid = () => {
  return (
    <div className="ml-52 w-8/12">
      <h1 className="text-2xl font-bold mb-4">Grid of Cards</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {db.products.map((e) => (
          <GridCard key={e.name} name={e.name}/>
        ))}
      </div>
    </div>
  );
};

export default Grid;
