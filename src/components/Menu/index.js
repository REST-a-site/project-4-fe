import React from "react";
import MenuSection from "../MenuSection";
import styled from "styled-components";

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
const Title = styled.h1``;

const Menu = ({ menu }) => {
	// console.log(menu);
	return (
		<Container>
			<Title>{menu.menu_name}</Title>
			{menu.menu_section_name.map((section, i) => (
				<MenuSection key={i} section={section} />
			))}
		</Container>
	);
};

export default Menu;
