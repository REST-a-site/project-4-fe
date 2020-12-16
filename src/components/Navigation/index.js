import React from 'react'
import styled from 'styled-components'
import { Link as LinkRouter } from 'react-router-dom'
import { Link as LinkScroll } from 'react-scroll'

const Nav = styled.nav``

const Container = styled.div``

const Logo = styled(LinkRouter)``

const BurgerButton = styled.div``

const BurgerMenu = styled.ul``

const BurgerItem = styled.li``

const BurgerLink = styled(LinkScroll)``

const LogInButton = styled.nav``

const LogInLink = styled(LinkRouter)``

const Nav = () => {
    return (
        <Nav>
            <Container>
                <Logo to='/'>921</Logo>
                <BurgerButton>
                    burger menu here
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
                        <BurgerLink to='reservations' exact='true'>Reservations</BurgerLink>
                    </BurgerItem>
                    <BurgerItem>
                        <BurgerLink to='about' exact='true'>About</BurgerLink>
                    </BurgerItem>
                    <BurgerItem>
                        <BurgerLink to='contact' exact='true'>Contact</BurgerLink>
                    </BurgerItem>
                    <BurgerItem>
                        <BurgerLink to='team' exact='true'>Team</BurgerLink>
                    </BurgerItem>
                </BurgerMenu>
                <LogInButton>
                    <LogInLink to='/login' exact='true'>LogIn</LogInLink>
                </LogInButton>
            </Container>
        </Nav>
    )
}

export default Nav
