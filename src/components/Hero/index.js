import React from "react";
import Video from "../../videos/video.mp4";
import styled from "styled-components";
import { Button } from "../Styles";

const Container = styled.div`
	align-items: center;
	background: #eeece3;
	display: flex;
	height: 800px;
	justify-content: center;
	padding: 0 30px;
	position: relative;
	z-index: 1;
    
`;

const Background = styled.div`
	bottom: 0;
	height: 100%;
	left: 0;
	overflow: hidden;
	position: absolute;
	right: 0;
	top: 0;
	width: 100%;
`;

const VideoImport = styled.video`
	--o-object-fit: cover;
	height: 100%;
	object-fit: cover;
	width: 100%;
    background: #eeece3;
`;

const Content = styled.div`
	align-items: center;
	display: flex;
	flex-direction: column;
	max-width: 1200px;
	padding: 8px 24px;
	position: absolute;
	z-index: 3;
`;

const H1 = styled.h1`
	color: #eeece3;
	font-size: 72px;
	text-align: center;

	@media screen and (max-width: 780px) {
		font-size: 60px;
	}

	@media screen and (max-width: 480px) {
		font-size: 40px;
	}
`;

const P = styled.p`
	color: #eeece3;
	font-size: 40px;
	margin-top: 24px;
	max-width: 600px;
	text-align: center;

	@media screen and (max-width: 780px) {
		font-size: 32px;
	}

	@media screen and (max-width: 480px) {
		font-size: 20px;
	}
`;

const Wrapper = styled.div`
	align-items: center;
	display: flex;
	flex-direction: column;
	margin-top: 32px;
`;

const Hero = () => {
	return (
		<Container>
			<Background>
				<VideoImport autoPlay loop muted src={Video} type='video/mp4' />
			</Background>
			<Content>
				<H1>921steak</H1>
				<P>best steak in the game</P>
				<Wrapper>
					<Button to='reserve' primary='true' exact='true' >Make Reservations</Button>
				</Wrapper>
			</Content>
		</Container>
	);
};

export default Hero;

// video tutorial here: https://www.youtube.com/watch?v=Nl54MJDR2p8&amp%3Bt=12846s&ab_channel=BrianDesign