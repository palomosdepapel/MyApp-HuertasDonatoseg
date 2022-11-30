import React from 'react'

const ItemListContainer = (props) => {
  const {mensaje} = props; // es un objeto
  return (
    <div>
        <h1>ItemListContainer <span>({mensaje})</span></h1>
    </div>
  )
}

export default ItemListContainer