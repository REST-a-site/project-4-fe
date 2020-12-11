import React from "react";
import Home from "./components/Home/Home";
import Navigation from "./components/Navigation/Navigation";
import styled from "styled-components";
import Hero from './components/Hero/Hero';
import About from './components/About/About'

const Container = styled.div`
	background-color: grey;
`;

const App = () => {
	return (
		<Container>
            <Hero />
			<Navigation />
			<Home />
            <About />
		</Container>
	);
};

export default App;
