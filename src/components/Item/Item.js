import React from 'react'
import { Link } from 'react-router-dom'

const Item = (props) => {
    const { name, id } = props;
  return (
    <Link to={`/item/detail/${id}`}>
        <div>
            <h1>{name}</h1>
            <h3>{id}</h3>
        </div>
    </Link>
  )
}

export default Item