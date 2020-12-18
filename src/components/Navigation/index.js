import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";
import { IconContext } from "react-icons/lib";
import { animateScroll as Scroll } from "react-scroll";
import { HashLink } from "react-router-hash-link";

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

const LogoRouter = styled(LinkRouter)`
	color: #d9d5b6;
	justify-self: flex-start;
	cursor: pointer;
	font-size: 60px;
	display: flex;
	align-items: center;
	margin-left: 24px;
	font-weight: bold;
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

const BurgerLinkScroll = styled(LinkScroll)`
	align-items: center;
	color: #d9d5b6;
	cursor: pointer;
	display: flex;
	height: 100%;
	padding: 0 1rem;
	text-decoration: none;

	&.active {
		border-bottom: 3px solid #ffffff;
	}
`;
const ReserveBtnS = styled(LinkScroll)`
	background: #9b9388;
	border-radius: 0px;
	border: 2.5px solid;
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

const BurgerLinkRouter = styled(LinkRouter)`
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

const RouterHashLink = styled(HashLink)`
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

const RouterHashButton = styled(HashLink)`
	background: #9b9388;
	border-radius: 0px;
	border: 2.5px solid;
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

const LogInButton = styled.nav`
	align-items: center;
	display: flex;

	@media screen and (max-width: 780px) {
		display: none;
	}
`;

// const LogInLinkRouter = styled(LinkRouter)`
// 	background: #9b9388;
// 	border-radius: 0px;
// 	border: 2.5px solid;
// 	color: #d9d5b6;
// 	cursor: pointer;
// 	font-size: 16px;
// 	outline: none;
// 	padding: 10px 22px;
// 	text-decoration: none;
// 	transition: all 0.2s ease-in-out;
// 	white-space: nowrap;

// 	&:hover {
// 		transition: all 0.2s ease-in-out;
// 		background: #fff;
// 		color: #d9d5b6;
// 	}
// `;

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
		Scroll.scrollToTop();
	};

	return (
		<IconContext.Provider value={{ color: "#d9d5b6" }}>
			<NavWrapper scrollValue={scrollValue}>
				<Container>
					<LogoRouter to='/' onClick={scrollHome}>
						921
					</LogoRouter>
					<BurgerButton onClick={toggle}>
						<FaBars />
					</BurgerButton>
					{console.log(window.location.href)}
					{!window.location.href === "http://localhost:3000/events" ? (
						<>
							<BurgerMenu>
								<BurgerItem>
									<BurgerLinkScroll
										to='about'
										exact='true'
										smooth={true}
										duration={500}>
										About
									</BurgerLinkScroll>
								</BurgerItem>
								<BurgerItem>
									<BurgerLinkScroll
										to='contact'
										exact='true'
										smooth={true}
										duration={500}>
										Contact
									</BurgerLinkScroll>
								</BurgerItem>
								<BurgerItem>
									<BurgerLinkScroll
										to='team'
										exact='true'
										smooth={true}
										duration={500}>
										Team
									</BurgerLinkScroll>
								</BurgerItem>
								<BurgerItem>
									<BurgerLinkRouter to='/menu'>Menu</BurgerLinkRouter>
								</BurgerItem>
								<BurgerItem>
									<BurgerLinkRouter to='/events'>
										Private Events
									</BurgerLinkRouter>
								</BurgerItem>
							</BurgerMenu>
							<LogInButton>
								<ReserveBtnS to='reserve' exact='true' smooth={true}>
									Reserve Now!
								</ReserveBtnS>
							</LogInButton>
						</>
					) : (
						<>
							<BurgerMenu>
								<BurgerItem>
									<RouterHashLink smooth to='/#about' exact='true'>
										About
									</RouterHashLink>
								</BurgerItem>
								<BurgerItem>
									<RouterHashLink smooth to='/#contact' exact='true'>
										Contact
									</RouterHashLink>
								</BurgerItem>
								<BurgerItem>
									<RouterHashLink smooth to='/#team' exact='true'>
										Team
									</RouterHashLink>
								</BurgerItem>
								<BurgerItem>
									<BurgerLinkRouter to='/menu' exact='true'>
										Menu
									</BurgerLinkRouter>
								</BurgerItem>
								<BurgerItem>
									<BurgerLinkRouter to='/events'>
										Private Events
									</BurgerLinkRouter>
								</BurgerItem>
							</BurgerMenu>
							<LogInButton>
								<RouterHashButton to='/#reserve' exact='true' smooth={true}>
									Reserve Now!
								</RouterHashButton>
							</LogInButton>
						</>
					)}
				</Container>
			</NavWrapper>
		</IconContext.Provider>
	);
};

export default Nav;
