import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MenuSection from '../MenuSection';
import styled from 'styled-components'

const Container = styled.div`
	background: linear-gradient(108deg, #d9d5b6 0%, #1f262e 100%);
	bottom: 0;
	left: 0;
	min-height: 700px;
	padding-top: 80px;
	right: 0;
	top: 0;
	z-index: 0;
`;
const Title = styled.h1``

const LazyLoader = styled.h2``


const Menu = () => {
    const [menu, setMenu] = useState();
    const sections = ["Appetizers", "Shellfish", "Salads", "Entrees", "Prime Steaks", "Large Format Steak", "Sides"]

    let url = 'http://restasitebackend.herokuapp.com/api/menu';
    
	useEffect(() => {
        axios(url)
        .then((res) => {
            setMenu(res.data);
            console.log(res.data)
        })
        .catch(console.error);
	}, []);
    
	if (!menu) {
		return <LazyLoader>Loading...</LazyLoader>;
    }
    
    return (
        <Container>
            <Title>Dinner</Title>
            {sections.map((section, i) => {
                return <MenuSection key={i} menu={menu} section={section} />
            })}
        </Container>
    )
}

export default Menu
