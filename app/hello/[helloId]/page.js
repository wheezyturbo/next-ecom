import React from 'react'

const page = ({params}) => {
  return (
    <div> hello {params.helloId}</div>
  )
}

export default page