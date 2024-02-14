import React from 'react'

const Hello = (props) => {
  return (
    <div>
      <center><h1>Product {props.name} Token id={props.id} price={props.price}</h1></center>
    </div>
  )
}

export default Hello