import React, { useState } from "react";
import Menu from "../components/Menu";
import Sidebar from "../components/Sidebar";
import Navigation from "../components/Navigation";

const MenuPage = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => {
		setIsOpen(!isOpen);
	};
	return (
		<>
			<Sidebar isOpen={isOpen} toggle={toggle} />
			<Navigation toggle={toggle} />
			<Menu />
		</>
	);
};

export default MenuPage;
