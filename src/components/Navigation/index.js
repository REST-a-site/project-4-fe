import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";
import { IconContext } from "react-icons/lib";

const NavWrapper = styled.nav`
	align-items: center;
	background: ${({ scrollValue }) => (scrollValue ? "#1F262E" : "transparent")};
	display: flex;
	font-size: 1rem;
	height: 80px;
	margin-top: -80px;
	justify-content: center;
	position: sticky;
	top: 0;
	z-index: 10;

	@media screen and (max-width: 960px) {
		transition: 0.8s all ease;
	}
`;

const Container = styled.div`
	display: flex;
	height: 80px;
	justify-content: space-between;
	max-width: 1100px;
	padding: 0 24px;
	width: 100%;
	z-index: 1;
`;

const Logo = styled(LinkRouter)`
	align-items: center;
	color: #d9d5b6;
	cursor: pointer;
	display: flex;
	font-size: 60px;
	font-weight: bold;
	justify-self: flex-start;
	margin-left: 24px;
	text-decoration: none;

	@media screen and (max-width: 780px) {
        margin-top: -10px;
        font-size: 24px;
	}
`;

const BurgerButton = styled.div`
	display: none;

	@media screen and (max-width: 780px) {
		color: #d9d5b6;
		cursor: pointer;
		display: block;
		font-size: 1.8rem;
		position: absolute;
		right: 0;
		top: 0;
		transform: translate(-100%, 60%);
	}
`;

const BurgerMenu = styled.ul`
	align-items: center;
	display: flex;
	list-style: none;
	margin-right: -24px;
	text-align: center;

	@media screen and (max-width: 780px) {
		display: none;
	}
`;

const BurgerItem = styled.li`
	height: 80px;
`;

const BurgerLink = styled(LinkScroll)`
	align-items: center;
	color: #d9d5b6;
	cursor: pointer;
	display: flex;
	height: 100%;
	padding: 0 1rem;
	text-decoration: none;

	&.active {
		border-bottom: 3px solid #9b9388;
	}
`;

const BurgerRouter = styled(LinkRouter)`
	align-items: center;
	color: #d9d5b6;
	cursor: pointer;
	display: flex;
	height: 100%;
	padding: 0 1rem;
	text-decoration: none;

	&.active {
		border-bottom: 3px solid #9b9388;
	}
`;

const LogInButton = styled.nav`
	align-items: center;
	display: flex;

	@media screen and (max-width: 768px) {
		display: none;
	}
`;

const LogInLink = styled(LinkRouter)`
	background: #9b9388;
	border-radius: 50px;
	border: none;
	color: #d9d5b6;
	cursor: pointer;
	font-size: 16px;
	outline: none;
	padding: 10px 22px;
	text-decoration: none;
	transition: all 0.2s ease-in-out;
	white-space: nowrap;

	&:hover {
		transition: all 0.2s ease-in-out;
		background: #fff;
		color: #d9d5b6;
	}
`;

const Nav = ({ toggle }) => {
	const [scrollValue, setScrollValue] = useState(false);

	const changeScroll = () => {
		if (window.scrollY >= 80) {
			setScrollValue(true);
		} else {
			setScrollValue(false);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", changeScroll);
	}, []);

	const scrollHome = () => {
        // window.scroll.scrollToTop()
        console.log('need to fix this');
	};

	return (
		<IconContext.Provider value={{ color: "#d9d5b6" }}>
			<NavWrapper scrollValue={scrollValue}>
				<Container>
					<Logo to='/' onClick={scrollHome}>
						921
					</Logo>
					<BurgerButton onClick={toggle}>
						<FaBars />
					</BurgerButton>
					<BurgerMenu>
						<BurgerItem>
							<BurgerRouter to='/'>Home</BurgerRouter>
						</BurgerItem>
						<BurgerItem>
							<BurgerRouter to='/menu'>Menu</BurgerRouter>
						</BurgerItem>
						<BurgerItem>
							<BurgerRouter to='/events'>Private Events</BurgerRouter>
						</BurgerItem>
						<BurgerItem>
							<BurgerLink to='reservations' exact='true'>
								Reservations
							</BurgerLink>
						</BurgerItem>
						<BurgerItem>
							<BurgerLink to='about' exact='true'>
								About
							</BurgerLink>
						</BurgerItem>
						<BurgerItem>
							<BurgerLink to='contact' exact='true'>
								Contact
							</BurgerLink>
						</BurgerItem>
						<BurgerItem>
							<BurgerLink to='team' exact='true'>
								Team
							</BurgerLink>
						</BurgerItem>
					</BurgerMenu>
					<LogInButton>
						<LogInLink to='/login' exact='true'>
							LogIn
						</LogInLink>
					</LogInButton>
				</Container>
			</NavWrapper>
		</IconContext.Provider>
	);
};

export default Nav;
