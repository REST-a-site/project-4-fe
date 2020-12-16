import React from 'react'

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
