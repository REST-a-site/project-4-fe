import React from 'react'
import MenuItem from '../MenuItem'

const MenuSection = ({ menu, section }) => {

    // console.log('return', menu[0].menu_item[0].menu_section)
    console.log('return', menu[0].menu_item[0])
    return (
        <div>
                {(menu[0].menu_item.map((el, i) => {
                    if (menu[0].menu_item[i].menu_section === section) {
                         return <MenuItem item={menu[0].menu_item[i]}/>         
                    }}
                ))}
        </div>
    )
}

export default MenuSection

