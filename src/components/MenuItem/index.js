import React from 'react'

const MenuItem = ({ item }) => {

    return (
        <div>
              <h1>{item.item_name}</h1>  
              <p>{item.item_description}</p>
              <p>{item.price}</p>
        </div>
    )
}

export default MenuItem
