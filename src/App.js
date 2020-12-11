import React from "react";
import Home from "./components/Home/Home";
import Navigation from "./components/Navigation/Navigation";
import styled from "styled-components";
import Hero from './components/Hero/Hero';

const Container = styled.div`
	background-color: grey;
`;

const App = () => {
	return (
		<Container>
            <Hero />
			<Navigation />
			<Home />
		</Container>
	);
};

export default App;
