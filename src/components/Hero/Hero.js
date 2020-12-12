import React, { useState } from "react";
import styled from "styled-components";
import { FadeIn } from "../Styles/index";
import interior1 from "../media/images/interior1.jpg";
import interior2 from "../media/images/interior2.jpg";
import interior3 from "../media/images/interior3.jpg";

const HeroContainer = styled.div`
	position: relative;
    background-image: url(${interior1});
    height: 100vh;
    margin: 0;
    overflow: hidden;
    object-fit: cover;
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;
`;

const HeroTitle = styled.h1`
	animation: 2s ${FadeIn} ease-in;
	font-size: 72px;
`;

const HeroImage = styled.img`

`;

const HeroP = styled.p`
	animation: 4s ${FadeIn} ease-in;
	font-size: 24px;
`;

const Hero = () => {
	const [background, setBackground] = useState([]);

	return (
		<HeroContainer>
			<HeroTitle>921steak</HeroTitle>
			<HeroP>best in the game</HeroP>
		</HeroContainer>
	);
};

export default Hero;
