import React from "react";
import Home from "./components/Home/Home";
import Navigation from "./components/Navigation/Navigation";
import styled from "styled-components";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Reservation from "./components/Reservation/Reservation";
import Team from "./components/Team/Team";
import Contact from "./components/Contact/Contact";
import { Container } from "./components/Styles/index";

const App = () => {
	return (
		<Container>
			<Hero />
			<Navigation />
			<Home />
			<About />
			<Team />
			<Reservation />
			<Contact />
		</Container>
	);
};

export default App;
