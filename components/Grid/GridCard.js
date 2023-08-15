import Link from 'next/link';
import React from 'react';

const GridCard = (props) => {
  const url = `/details/${props.name}`;
  return (
    <div className="bg-accent text-text rounded-lg shadow-lg p-4 backdrop-blur-md backdrop-filter bg-opacity-30">
    <Link href={url}>
      <div className="relative w-full h-0 pb-[100%] mb-4 rounded-md overflow-hidden">
          <img src="https://images.unsplash.com/photo-1611675745374-34fa54cc3c98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=627&q=80" alt="Card Image" className="absolute inset-0 w-full h-full object-cover" />
      </div>
      <h2 className="text-lg font-semibold">{props.name}</h2>
          </Link>
    </div>
  );
};

export default GridCard;
