import React from 'react'

function BoxHeader(props) {
  return (
    <h2 className='text-lg font-semibold w-full mb-2'> {props.children}</h2>
  )
}

export default BoxHeader