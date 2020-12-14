import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { FadeIn, LazyLoader } from "../Styles/index";
import interior1 from "../media/images/interior1.jpg";
import interior2 from "../media/images/interior2.jpg";
import interior3 from "../media/images/interior3.jpg";

const HeroContainer = styled.div`
	position: relative;
	height: 100vh;
	margin: 0;
	overflow: hidden;
	object-fit: cover;
	background-attachment: fixed;
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;

	${({ background }) =>
		background &&
		css`
			background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
				url("${({ background }) => background}");
		`}

	@media (min-width: 900px) {
		height: 400px;
	}
`;

const HeroTitle = styled.h1`
    margin-top: 20%;
	color: white;
	animation: 2s ${FadeIn} ease-in;
    font-size: 72px;
    
    @media (min-width: 900px) {
        font-size: 10px;
    }
`;

const HeroP = styled.p`
	color: white;
	animation: 4s ${FadeIn} ease-in;
	font-size: 24px;
	@media (min-width: 900px) {
		font-size: 20px;
	}
`;

const Hero = () => {
	const [background, setBackground] = useState();
	const images = [interior1, interior2, interior3];

	useEffect(() => {
		let randomImage = images[Math.floor(Math.random() * 3)];
		setBackground(randomImage);
	}, []);

	if (!background) return <LazyLoader>Loading...</LazyLoader>;

	return (
		<HeroContainer background={background}>
			<HeroTitle>921steak</HeroTitle>
			<HeroP>best in the game</HeroP>
		</HeroContainer>
	);
};

export default Hero;
