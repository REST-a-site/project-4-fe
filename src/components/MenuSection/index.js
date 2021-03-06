import React from "react";
import MenuItem from "../MenuItem";
import styled from "styled-components";

const Container = styled.div``;

const SectionName = styled.h1``;

const MenuSection = ({ menu, section }) => {
	return (
		<Container>
			<SectionName>{section}</SectionName>

			{menu[0].menu_item_name.map((el, i) => {
				return menu[0].menu_item_name[i].menu_section === section ? (
					<MenuItem key={i} index={i} item={menu[0].menu_item_name[i]} />
				) : null;
			})}
		</Container>
	);
};

export default MenuSection;
