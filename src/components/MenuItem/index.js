import React from 'react'

const MenuItem = ({ item }) => {

    console.log(item)

    return (
        <div>
              <h1>{item.item_name}</h1>  
        </div>
    )
}

export default MenuItem
