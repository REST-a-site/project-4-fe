import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages";
import LogIn from "./pages/login";
import Events from "./pages/events";
import Menu from "./pages/menu";
import Edit from "./pages/edit";

const App = () => {

	console.log('localstorage from app.js', localStorage);

	return (
		<Router>
			<Switch>
				<Route path='/' component={Home} exact />
				<Route
					exact
					path='/login'
					render={() => {
						return <LogIn />;
					}}
				/>
				<Route path='/events' component={Events} exact />
				<Route path='/menu' component={Menu} exact />
				<Route path='/edit' component={Edit} exact />
			</Switch>
		</Router>
	);
};

export default App;
