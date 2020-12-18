import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MenuSection from '../MenuSection';
import styled from 'styled-components'

const Container = styled.div`

`
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
