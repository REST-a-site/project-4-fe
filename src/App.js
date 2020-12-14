import React, { Fragment } from "react";
import Home from "./components/Home/Home";
import Navigation from "./components/Navigation/Navigation";
import styled from "styled-components";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Reservation from "./components/Reservation/Reservation";
import Team from "./components/Team/Team";
import Contact from "./components/Contact/Contact";
import { GlobalStyle } from "./components/Styles/index";

const Content = styled.div`
	display: flex;
	text-align: center;
	justify-content: center;
	flex-direction: column;
	height: 100%;
	scroll-behavior: smooth;
	background-color: grey;
`;

const App = () => {
	return (
		<Fragment>
			<GlobalStyle />
			<Content>
				<Hero />
				<Navigation />
				<Home />
				<About />
				<Team />
				<Reservation />
				<Contact />
			</Content>
		</Fragment>
	);
};

export default App;
