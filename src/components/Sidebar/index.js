import React from "react";
import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link as LinkScroll } from "react-scroll";
import { Link as LinkRouter } from "react-router-dom";

const Container = styled.aside``;

const Icon = styled.div``;

const CloseIcon = styled(FaTimes)``;

const Wrapper = styled.div``;

const Menu = styled.ul``;

const MenuLinkScroll = styled(LinkScroll)``;

const MenuLinkRouter = styled(LinkRouter)``;

const LogIn = styled.div``;

const LogInRoute = styled(LinkRouter)``;

const Sidebar = ({ isOpen, toggle }) => {
	return (
		<Container isOpen={isOpen} onClick={toggle}>
			<Icon onClick={toggle}>
				<CloseIcon />
			</Icon>
			<Wrapper>
				<Menu>
                    <MenuLinkRouter to='/' onClick={toggle}>Home</MenuLinkRouter>
                    <MenuLinkRouter to='/events' onClick={toggle}>Events</MenuLinkRouter>
                    <MenuLinkRouter to='/menu' onClick={toggle}>Menu</MenuLinkRouter>
					<MenuLinkScroll to='reservations' onClick={toggle}>Reservations</MenuLinkScroll>
					<MenuLinkScroll to='about' onClick={toggle}>About</MenuLinkScroll>
					<MenuLinkScroll to='contact' onClick={toggle}>Contact</MenuLinkScroll>
					<MenuLinkScroll to='team' onClick={toggle}>Team</MenuLinkScroll>
				</Menu>
			</Wrapper>
			<LogIn>
				<LogInRoute to='/login'>LogIn</LogInRoute>
			</LogIn>
		</Container>
	);
};

export default Sidebar;
