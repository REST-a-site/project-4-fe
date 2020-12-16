import React from "react";
import styled from 'styled-components'
import { FaTimes } from "react-icons/fa"
import { Link as LinkScroll } from 'react-scroll'
import { Link as LinkRouter } from 'react-router-dom'

const Container = styled.aside``

const Icon = styled.div``

const CloseIcon = styled(FaTimes)``

const Wrapper = styled.div``

const Menu = styled.ul`
`
const MenuLink = styled(LinkScroll)``

const LogIn = styled.div``

const LogInRoute = styled(LinkRouter)``

const Sidebar = () => {
	return (
		<Container>
			<Icon>
				<CloseIcon />
			</Icon>
			<Wrapper>
                <Menu>
                    <MenuLink to=''></MenuLink>
                </Menu>
            </Wrapper>
            <LogIn>
                <LogInRoute>LogIn</LogInRoute>
            </LogIn>
		</Container>
	);
};

export default Sidebar;
