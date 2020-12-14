import React from "react";
import styled, { css } from "styled-components";
import logo from "../media/images/temporaryLogo.png";

const NavContainer = styled.div`
	overflow: hidden;
	onscroll=${{myFunction() {
		let sticky = NavContainer.offsetTop
		if (window.pageYOffset >= sticky) {
			css`
				position: fixed;
				top: 0;
				width: 100%;
			`
		}
	}}}

`

const Link = styled.a`
	float: right;
	margin: 1.5%;
	text-align: center;
`

const Logo = styled.img`
	float: left;
	max-width: 10%;
	max-height: 10%;
`



const Navigation = ({ navStyle, setNavStyle }) => {
	return (
		<NavContainer navStyle={navStyle} setNavStyle={setNavStyle} >
			<Logo src={logo}></Logo>
			<Link href=''>Home</Link>
			<Link href=''>Menu</Link>
			<Link href=''>Events</Link>
		</NavContainer>
	);
};

export default Navigation;
