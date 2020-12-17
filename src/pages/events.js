import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import SimpleNavigation from '../components/SimpleNavigation';
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
			<SimpleNavigation toggle={toggle} />
			<PrivateEvents />
			<Footer />
		</>
	);
};

export default Events;
