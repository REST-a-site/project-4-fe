import React from "react";
import styled, { css } from "styled-components";

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
	float: center;
	margin: 5%;
	text-align: center;
`



const Navigation = ({ navStyle, setNavStyle }) => {
	return (
		<NavContainer navStyle={navStyle} setNavStyle={setNavStyle} >
			<Link href=''>Home</Link>
			<Link href=''>Menu</Link>
			<Link href=''>Events</Link>
		</NavContainer>
	);
};

export default Navigation;
