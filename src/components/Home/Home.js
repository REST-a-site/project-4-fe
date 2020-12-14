import React from "react";
import Hero from "../Hero/Hero"
import About from "../About/About"
import Team from "../Team/Team"
import Reservation from "../Reservation/Reservation"
import Contact from "../Contact/Contact"

const Home = () => {
	return (
		<>
			<Hero />
			<About />
			<Team />
			<Reservation />
			<Contact />
		</>
	);
};

export default Home;
