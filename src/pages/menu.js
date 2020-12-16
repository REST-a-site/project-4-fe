import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
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
			{menu.map((el) => {
				return (
					<>
						<h1>{el.menu_name}</h1>
						<h4>{el.menu_description}</h4>
						{el.menu_item_names.map((el) => {
							return (
								<>
									{/* Here is the first section of food
									Only render this section if the menu_section === "Appetizers" */}
									Appetizers
									<h3>{el.item_name}</h3>
									<h4>{el.item_description}</h4>
									<p> Active: {el.item_active ? 'Yes' : 'No'}</p>
									Shellfish
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
