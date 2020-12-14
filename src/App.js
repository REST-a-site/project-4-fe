import React, { Fragment } from "react";
import Home from "./components/Home/Home";
import Navigation from "./components/Navigation/Navigation";
import styled from "styled-components";
import { GlobalStyle } from "./components/Styles/index";

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

const App = () => {
	return (
		<Fragment>
			<GlobalStyle />
			<Content>
				<Navigation />
				<Home />
				{/* PrivateEvents, Menu, Admin pages will go here */}
				<Footer>
					Developed by <a href='https://github.com/921steak'>921steak</a>.
				</Footer>
			</Content>
		</Fragment>
	);
};

export default App;
