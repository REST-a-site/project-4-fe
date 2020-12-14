import React, { Fragment } from "react";
import styled from "styled-components";
import { Container } from "../Styles/index";
import Hero from "../Hero/Hero"
import About from "../About/About"
import Team from "../Team/Team"
import Reservation from "../Reservation/Reservation"
import Contact from "../Contact/Contact"

const Home = () => {
	return (
		<Fragment>
			<Hero />
			<About />
			<Team />
			<Reservation />
			<Contact />
		</Fragment>
	);
};

export default Home;
