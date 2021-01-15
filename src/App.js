import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages";
import LogIn from "./pages/login";
import Events from "./pages/events";
import Menu from "./pages/menu";
import Edit from "./pages/edit";
import axios from "axios";

const App = () => {
	const url = "https://be-921.herokuapp.com/api/menus";

	useEffect(() => {
		axios(url)
			.then((res) => {
				// console.log(res);
			})
			.catch(console.error);
	}, []);

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
