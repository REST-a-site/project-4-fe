// import axios from "axios";
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div``;

const ItemName = styled.p``;

const ItemLink = styled(Link)``;

const MenuItem = ({ item, index }) => {
	let handleClick = (e) => {
		//let url = "https://921-be.herokuapp.com/api/menus";
	};

	return (
		<Container>
			{localStorage.token ? (
				<ItemLink to='/edit' item={item} onClick={handleClick}>
					{item}
				</ItemLink>
			) : (
				<ItemName>{item}</ItemName>
			)}
		</Container>
	);
};

export default MenuItem;
