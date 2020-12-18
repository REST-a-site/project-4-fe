import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Navigation from '../components/Navigation';
import PrivateEvents from '../components/PrivateEvents';
import Footer from '../components/Footer';

const Events = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => {
		setIsOpen(!isOpen);
	};
	return (
		<>
			<Sidebar isOpen={isOpen} toggle={toggle} />
			<Navigation toggle={toggle} />
			<PrivateEvents />
			<Footer />
		</>
	);
};

export default Events;
