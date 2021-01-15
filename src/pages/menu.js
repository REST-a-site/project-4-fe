import React, { useState, useEffect } from "react";
import Menu from "../components/Menu";
import Sidebar from "../components/Sidebar";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import MenuNav from "../components/MenuNav";
import styled from "styled-components";
import axios from "axios";

const LazyLoader = styled.h2``;

const MenuPage = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [menuId, setMenuId] = useState(2); // this is just the id #
	const [menu, setMenu] = useState(); // actual menu object
	const [menuLinks, setMenuLinks] = useState();
	const url = "https://be-921.herokuapp.com/api/menus";

	useEffect(() => {
		axios(url)
			.then((res) => {
				// below sets dinner to default
				setMenu(res.data.filter((e) => e.id === menuId)[0]);
				setMenuLinks(
					res.data.map((e) => {
						return [e.menu_name, e.id];
					})
				);
			})
			.catch(console.error);
	}, [menuId]);

	const toggle = () => {
		setIsOpen(!isOpen);
	};

	if (!menu || !menuId) {
		return <LazyLoader>Loading...</LazyLoader>;
	}

	return (
		<>
			<Sidebar isOpen={isOpen} toggle={toggle} />
			<Navigation toggle={toggle} />
			<MenuNav menuLinks={menuLinks} setMenuId={setMenuId} />
			<Menu menu={menu} />
			<Footer />
		</>
	);
};

export default MenuPage;
