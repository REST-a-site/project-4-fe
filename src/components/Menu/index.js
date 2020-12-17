import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MenuSection from '../MenuSection';

const Menu = () => {
    const [menu, setMenu] = useState();

    let url = 'http://restasitebackend.herokuapp.com/api/menu';
    
	useEffect(() => {
        axios(url)
        .then((res) => {
            setMenu(res.data);
            console.log(res.data)
        })
        .catch((error) => {});
	}, []);
    
	if (!menu) {
		return 'Loading...';
    }
    
    return (
        <div>
            <h1>Dinner</h1>
            <MenuSection menu={menu} section='Appetizers'/>
            <MenuSection menu={menu} section='Shellfish'/>
            <MenuSection menu={menu} section='Salads'/>
            <MenuSection menu={menu} section='Entrees'/>
            <MenuSection menu={menu} section='Prime Steaks'/>
            <MenuSection menu={menu} section='Large Format Steak'/>
            <MenuSection menu={menu} section='Sides'/>
        </div>
    )
}

export default Menu
