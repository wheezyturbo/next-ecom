import Header from '@/components/Header/Header'
import React from 'react'

const page = ({params}) => {
  return (
    <>
        <Header/>
        <h1>{params.prodName}</h1>
    </>
  )
}

export default page