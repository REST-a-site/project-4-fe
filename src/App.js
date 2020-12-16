import React from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import Home from "./pages";
import LogIn from "./pages/login";
import Events from "./pages/events";
import Menu from "./pages/menu";
import styled from "styled-components";

const Container = styled.div`
	box-sizing: border-box;
	padding: 0;
	margin: 0;
	font-family: "Barlow", sans-serif;
`;

const App = () => {
	return (
		<Container>
			<Router>
				<Switch>
					<Route path='/' component={Home} exact />
					<Route path='/login' component={LogIn} exact />
					<Route path='/events' component={Events} exact />
					<Route path='/menu' component={Menu} exact />
				</Switch>
			</Router>
		</Container>
	);
};

export default App;
