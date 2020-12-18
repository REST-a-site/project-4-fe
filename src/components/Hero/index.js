import React, { useState } from "react";
import Video from "../../videos/video.mp4";
import styled from "styled-components";
import { Link as LinkScroll } from "react-scroll";
import { useHistory } from "react-router-dom";

const Container = styled.div`
	align-items: center;
	background: #181a1b;
	display: flex;
	height: 800px;
	justify-content: center;
	padding: 0 28px;
	position: relative;
	z-index: 1;

	:before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: linear-gradient(
				180deg,
				rgba(0, 0, 0, 0.2) 0%,
				rgba(0, 0, 0, 0.6) 100%
			),
			linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
		z-index: 2;
	}
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
	background: #181a1b;
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
	color: #d9d5b6;
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
	color: #d9d5b6;
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

const ReserveBtn = styled(LinkScroll)`
	background: #9b9388;
	border-radius: 0px;
	border: 2.5px solid;
	color: #d9d5b6;
	cursor: pointer;
	font-size: 16px;
	outline: none;
	padding: 10px 22px;
	text-decoration: none;
	transition: all 0.2s ease-in-out;
	white-space: nowrap;

	&:hover {
		transition: all 0.2s ease-in-out;
		background: #fff;
		color: #d9d5b6;
	}
`;

const LogoutBtn = styled.button`
	background: #9b9388;
	border-radius: 0px;
	border: 2.5px solid;
	color: #d9d5b6;
	cursor: pointer;
	font-size: 16px;
	outline: none;
	padding: 10px 22px;
	text-decoration: none;
	transition: all 0.2s ease-in-out;
	white-space: nowrap;

	&:hover {
		transition: all 0.2s ease-in-out;
		background: #fff;
		color: #d9d5b6;
	}
`;

const Hero = () => {
	const [hover, setHover] = useState(false);
	const history = useHistory();

	const onHover = () => {
		setHover(!hover);
	};

	const handleClick = () => {
		localStorage.clear();
		history.push('/')
	};

	return (
		<Container>
			<Background>
				<VideoImport autoPlay loop muted src={Video} type='video/mp4' />
			</Background>
			<Content>
				<H1>921steak</H1>

				{localStorage.token ? (
					<P>Welcome back, Admin.</P>
				) : (
					<P>best steak in the game</P>
				)}

				<Wrapper>
					{localStorage.token ? (
						<LogoutBtn
							to='reserve'
							primary='true'
							exact='true'
							dark='true'
							smooth={true}
							duration={500}
							onMouseEnter={onHover}
							onMouseLeave={onHover}
							onClick={handleClick}>
							Log Out
						</LogoutBtn>
					) : (
						<ReserveBtn
							to='reserve'
							primary='true'
							exact='true'
							dark='true'
							smooth={true}
							duration={500}
							onMouseEnter={onHover}
							onMouseLeave={onHover}>
							Make A Reservation!
						</ReserveBtn>
					)}
				</Wrapper>
			</Content>
		</Container>
	);
};

export default Hero;

// video tutorial here: https://www.youtube.com/watch?v=Nl54MJDR2p8&amp%3Bt=12846s&ab_channel=BrianDesign
