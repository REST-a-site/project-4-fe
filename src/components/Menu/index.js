import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MenuSection from '../MenuSection';
import styled from 'styled-components';

const Container = styled.div`
	background: linear-gradient(108deg, #1f262e 30%, #d9d5b6 100%);
	bottom: 0;
	left: 0;
	min-height: 700px;
	padding-top: 80px;
	padding-bottom: 80px;
	right: 0;
	top: 0;
	z-index: 0;

	// change this
	color: #9b9388;
	text-align: center;
`;

const LazyLoader = styled.h2``;

const Menu = () => {

	const [menu, setMenu] = useState([]);
	const url = 'https://be-921.herokuapp.com/api/sections';


	useEffect(() => {
		axios(url)
			.then((res) => {
				setMenu(res.data);
			})
			.catch(console.error);
	}, []);

	if (!menu) {
		return <LazyLoader>Loading...</LazyLoader>;
	}

	return (
		<Container>
			<MenuSection section={menu}></MenuSection>
		</Container>
	);
};

export default Menu;
