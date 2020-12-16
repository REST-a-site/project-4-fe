import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { GlobalStyle } from '../Styles/index';
import Axios from 'axios';

let url = 'https://warm-fjord-68987.herokuapp.com/api/menu';
const Menu = () => {
	//will need state
	const [menu, setMenu] = useState();
	//will need useEffect for Axios
	useEffect(() => {
		Axios(url)
			.then((res) => {
				setMenu(res.data);
			})
			.catch((error) => {});
	}, []);

	//will need a lazy loader
	if (!menu) {
		return 'Loading...';
	}
	return (
		<>
			<GlobalStyle />
			{console.log(menu[0].menu_item_names)}
			<h2>{menu[0].menu_name}</h2>
			<h4>{menu[0].menu_description}</h4>
			<div>
				{menu[0].menu_item_names.map((el) => (
					<>
                        <h1>{el.item_name}</h1>
                        <h3>{el.price}</h3>
						<h5>{el.item_description}</h5>
					</>
				))}
			</div>
			Appetizers Salads
		</>
	);
};

export default Menu;
