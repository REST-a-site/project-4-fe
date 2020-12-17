import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages";
import LogIn from "./pages/login";
import Events from "./pages/events";
import Menu from "./pages/menu";

const App = () => {
	const [ token, setToken ] = useState ('')

	return (

			<Router>
				<Switch>
					<Route path='/' component={Home} exact />
					<Route exact path='/login' render={() => {
						return <LogIn setToken={setToken} token={token} />
					}} 
					/>
					<Route path='/events' component={Events} exact />
					<Route path='/menu' component={Menu} exact />
				</Switch>
			</Router>
	);
};

export default App;
