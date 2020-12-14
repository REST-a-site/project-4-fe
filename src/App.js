import React, { Fragment } from "react";
import Home from "./components/Home/Home";
import Menu from './components/Menu/Menu'
import PrivateEvents from './components/PrivateEvents/PrivateEvents'
// import Navigation from "./components/Navigation/Navigation";
import styled, { css } from "styled-components";
import { GlobalStyle } from "./components/Styles/index";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import logo from './components/media/images/temporaryLogo.png'

const Content = styled.div`
	display: flex;
	text-align: center;
	justify-content: center;
	flex-direction: column;
	height: 100%;
	scroll-behavior: smooth;
	background-color: grey;
`;

const Footer = styled.footer`
	padding-top: 20px;
	padding-bottom: 20px;
	text-align: center;
`;

const Logo = styled.img`
	float: left;
	max-width: 10%;
	max-height: 10%;
`;

const Nav = styled.nav`
	overflow: hidden;
`

const NavListItem = styled.li`
	list-style-type: none;
`;

const NavContainer = styled.div`
	overflow: hidden;
	onscroll=${{
		myFunction() {
			let sticky = NavContainer.offsetTop;
			if (window.pageYOffset >= sticky) {
				css`
					position: fixed;
					top: 0;
					width: 100%;
				`;
			}
		},
	}}

`;

const NavDiv = styled.div`
	float: right;
	margin: 1.5%;
	text-align: center;
`;

const App = () => {
	return (
		<Fragment>
			<GlobalStyle />
			<Content>
				<Router>
					<NavContainer>
						<Nav>
							<Logo src={logo}></Logo>
							<ul>
								<NavListItem>
									<Link to='/' exact>
										<NavDiv>Home</NavDiv>
									</Link>
								</NavListItem>
								<NavListItem>
									<Link to='/menu'>
										<NavDiv>Menu</NavDiv>
									</Link>
								</NavListItem>
								<NavListItem>
									<Link to='/events'>
										<NavDiv>Events</NavDiv>
									</Link>
								</NavListItem>
							</ul>
						</Nav>
					</NavContainer>

					<Switch>
						<Route path='/' exact>
							<Home />
						</Route>
						<Route path='/menu' exact>
							<Menu />
						</Route>
						<Route path='/events' exact>
							<PrivateEvents />
						</Route>
					</Switch>
				</Router>
				{/* <Navigation /> */}
				{/* <Home /> */}
				{/* PrivateEvents, Menu, Admin pages will go here */}
				<Footer>
					Developed by{" "}
					<a href='https://github.com/orgs/REST-a-site/people' target='_blank'>
						921steak
					</a>
					.
				</Footer>
			</Content>
		</Fragment>
	);
};

export default App;
