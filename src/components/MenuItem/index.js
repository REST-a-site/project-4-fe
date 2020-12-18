import React from 'react';
import styled from 'styled-components';

const Container = styled.div``

const ItemName = styled.p``
    
const MenuItem = ({ item }) => {

    return (
        <Container>
              <ItemName>{item.item_name}</ItemName>  
        </Container>

    )
}

export default MenuItem;


