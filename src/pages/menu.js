import React, { useState, useEffect } from 'react';
// import styled from 'styled-components';
import Axios from 'axios';

let url = 'http://restasitebackend.herokuapp.com/api/menu';
const Menu = () => {
	const [menu, setMenu] = useState();

	useEffect(() => {
		Axios(url)
			.then((res) => {
				setMenu(res.data);
			})
			.catch((error) => {});
	}, []);

	if (!menu) {
		return 'Loading...';
	}
	console.log(menu)
	return (
		<>
			{menu.map((el) => {
				return (
					<>
					<h1>{el.section_name}</h1>
					{el.menu_item.map((el) => {
						return (
							<>
							<h2>{el.menu_section}</h2>
							<h3>{el.item_name}</h3>
							<p>{el.item_description}</p>
							<p>{el.price}</p>
					</>
						)
					})};
				</>
				)
			})};
		</>
	);
};

export default Menu;

