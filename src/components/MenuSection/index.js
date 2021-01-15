import React from "react";
import MenuItem from "../MenuItem";
import styled from "styled-components";

const Container = styled.div``;

const SectionName = styled.h1``;

const MenuSection = ({ section }) => {
	// console.log(section);

	return (
		<Container>
			<SectionName>{section.menu_section_name}</SectionName>

			{section.menu_items.map((el, i) => {
				return <MenuItem key={i} item={section.menu_items[i]} />;
			})}
		</Container>
	);
};

export default MenuSection;
