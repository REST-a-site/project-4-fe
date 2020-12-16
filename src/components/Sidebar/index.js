import React from "react";
import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link as LinkScroll } from "react-scroll";
import { Link as LinkRouter } from "react-router-dom";

const Container = styled.aside`
	align-items: center;
	background: #1F262E;
	display: grid;
	height: 100%;
	left: 0;
	opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
	position: fixed;
	top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
    transition: 0.3s ease-in-out;
	width: 100%;
	z-index: 20;
`;

const Icon = styled.div`
	background: transparent;
	cursor: pointer;
	font-size: 2rem;
	outline: none;
	position: absolute;
	right: 1.5rem;
	top: 1.2rem;
`;

const CloseIcon = styled(FaTimes)`
	color: #d9d5b6;
`;

const Wrapper = styled.div`
	color: #d9d5b6;
`;

const Menu = styled.ul`
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: repeat(6, 80px);
	text-align: center;

	@media screen and (max-width: 480px) {
		grid-template-rows: repeat(6, 60px);
	}
`;

const MenuLinkScroll = styled(LinkScroll)`
	align-items: center;
	color: #d9d5b6;
	cursor: pointer;
	display: flex;
	font-size: 1.5rem;
	justify-content: center;
	list-style: none;
	text-decoration: none;
	transition: 0.2s ease-in-out;

	&:hover {
		color: #181a1b;
		transition: 0.2s ease-in-out;
	}
`;

const MenuLinkRouter = styled(LinkRouter)`
	align-items: center;
	color: #d9d5b6;
	cursor: pointer;
	display: flex;
	font-size: 1.5rem;
	justify-content: center;
	list-style: none;
	text-decoration: none;
	transition: 0.2s ease-in-out;

	&:hover {
		color: #181a1b;
		transition: 0.2s ease-in-out;
	}
`;

const LogIn = styled.div`
	display: flex;
	justify-content: center;
`;

const LogInRoute = styled(LinkRouter)`
	background: #181a1b;
	border-radius: 0px;
	border: 5px solid;
	color: #d9d5b6;
	cursor: pointer;
	font-size: 16px;
	outline: none;
	padding: 16px 64px;
	text-decoration: none;
	transition: all 0.2s ease-in-out;
	white-space: nowrap;

	&:hover {
		transition: all 0.2s ease-in-out;
		background: #fff;
		color: #d9d5b6;
	}
`;

const Sidebar = ({ isOpen, toggle }) => {
	return (
		<Container isOpen={isOpen} onClick={toggle}>
			<Icon onClick={toggle}>
				<CloseIcon />
			</Icon>
			<Wrapper>
				<Menu>
					<MenuLinkRouter to='/' onClick={toggle}>
						Home
					</MenuLinkRouter>
					<MenuLinkRouter to='/events' onClick={toggle}>
						Events
					</MenuLinkRouter>
					<MenuLinkRouter to='/menu' onClick={toggle}>
						Menu
					</MenuLinkRouter>
					<MenuLinkScroll to='reservations' onClick={toggle}>
						Reservations
					</MenuLinkScroll>
					<MenuLinkScroll to='about' onClick={toggle}>
						About
					</MenuLinkScroll>
					<MenuLinkScroll to='contact' onClick={toggle}>
						Contact
					</MenuLinkScroll>
					<MenuLinkScroll to='team' onClick={toggle}>
						Team
					</MenuLinkScroll>
				</Menu>
			</Wrapper>
			<LogIn>
				<LogInRoute to='/login'>Log In</LogInRoute>
			</LogIn>
		</Container>
	);
};

export default Sidebar;
