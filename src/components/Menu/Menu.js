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
			{menu.map((el) => {
				return (
					<>
						<h1>{el.menu_name}</h1>
						<h4>{el.menu_description}</h4>
						{el.menu_item_names.map((el) => {
							return (
								<>
									<h3>{el.item_name}</h3>
									<h4>{el.item_description}</h4>
								</>
							);
						})}
					</>
				);
			})}
		</>
	);
};

export default Menu;
