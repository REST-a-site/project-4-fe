import React from "react";
import Home from "./components/Home/Home";
import Navigation from "./components/Navigation/Navigation";
import styled from "styled-components";

const Container = styled.div`
	background-color: grey;
`;

const App = () => {
	return (
		<Container>
			<Navigation />
			<Home />
		</Container>
	);
};

export default App;
