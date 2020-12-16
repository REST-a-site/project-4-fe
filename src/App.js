import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages";
import LogIn from "./pages/login";
import Events from "./pages/events";
import Menu from "./pages/menu";
import { AppContext } from "./AppContext";

const App = () => {
	const [userInfo, setUserInfo] = useState()

	if (!userInfo) {
		const storedUser = {
			username: localStorage.getItem(''),
			_id: localStorage.getItem(''),
		};
		if (storedUser.username && storedUser._id) {
			setUserInfo(storedUser);
		}
	}

	return (
		<AppContext.Provider value={{ userInfo, setUserInfo }}>
			<Router>
				<Switch>
					<Route path='/' component={Home} exact />
					<Route path='/login' component={LogIn} exact />
					<Route path='/events' component={Events} exact />
					<Route path='/menu' component={Menu} exact />
				</Switch>
			</Router>
		</AppContext.Provider>
	);
};

export default App;
