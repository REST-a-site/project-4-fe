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
            <MenuSection key='1' menu={menu} section='Appetizers'/>
            <MenuSection key='2' menu={menu} section='Shellfish'/>
            <MenuSection key='3' menu={menu} section='Salads'/>
            <MenuSection key='4' menu={menu} section='Entrees'/>
            <MenuSection key='5' menu={menu} section='Prime Steaks'/>
            <MenuSection key='6' menu={menu} section='Large Format Steak'/>
            <MenuSection key='7' menu={menu} section='Sides'/>
        </div>
    )
}

export default Menu
