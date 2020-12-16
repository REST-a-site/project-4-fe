import React from "react";
import './App.css'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages";
import LogIn from "./pages/login";
import Events from "./pages/events";
import Menu from "./pages/menu";

const App = () => {
	return (
			<Router>
				<Switch>
					<Route path='/' component={Home} exact />
					<Route path='/login' component={LogIn} exact />
					<Route path='/events' component={Events} exact />
					<Route path='/menu' component={Menu} exact />
				</Switch>
			</Router>
	);
};

export default App;
