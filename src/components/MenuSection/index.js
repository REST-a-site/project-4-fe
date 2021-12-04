import React from 'react';
import MenuItem from '../MenuItem';
import styled from 'styled-components';

const Container = styled.div``;
const MenuDescription = styled.div``;
const MenuPrice = styled.div``;

const SectionName = styled.h1``;

const MenuSection = ({ section }) => {
	return (
		<Container>
			{section.map((el) => {
				if (el.menu_section_name.includes('Dinner')) {
					return (
						<>
							<SectionName>{el.menu_section_alias}</SectionName>
							{el.menu_items.map((el) => {
								return (
									<>
										<MenuItem item={el.menu_item_name}>
											{el.menu_item_name}
										</MenuItem>
										<MenuDescription>
											{el.menu_item_description}
										</MenuDescription>
										<MenuPrice>{el.menu_item_price}</MenuPrice>
									</>
								);
							})}
						</>
					);
				} else return 'hi';
			})}
			{/* {menu[0].menu_item_name.map((el, i) => {
				return menu[0].menu_item_name[i].menu_section === section ? (
					<MenuItem key={i} index={i} item={menu[0].menu_item_name[i]} />
				) : null;
			})} */}
		</Container>
	);
};

export default MenuSection;
