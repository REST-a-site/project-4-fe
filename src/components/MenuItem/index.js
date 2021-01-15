// import axios from "axios";
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div``;

const ItemName = styled.p``;

const ItemLink = styled(Link)``;

const MenuItem = ({ item }) => {
	let handleClick = (e) => {};

	return (
		<Container>
			{localStorage.token ? (
				<ItemLink to='/edit' item={item} onClick={handleClick}>
					{item.menu_item_name}
				</ItemLink>
			) : (
				<ItemName>{item.menu_item_name}</ItemName>
			)}
		</Container>
	);
};

export default MenuItem;
