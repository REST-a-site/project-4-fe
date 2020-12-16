import React, { useState, useEffect } from "react";
import styled from "styled-components";
import food from "../media/images/food2.jpg";
import interior from "../media/images/interior1.jpg";
import { LazyLoader } from "../Styles";

const Container = styled.div`
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	min-height: 100vh;
	margin: 0;
`;

const Image = styled.img`
	height: 40%;
	width: 40%;
	margin-top: 5%;
	margin-left: 2.5%;
	justify-content: flex-start;
`;

const H1 = styled.h1`
	text-align: left;
	margin-left: 2.5%;
	margin-bottom: -10%;
	z-index: +1;
`;

const H2 = styled.h2`
	font-size: 20px;
	text-align: right;
	height: 40%;
	width: 40%;
	justify-content: flex-end;
`;

const Paragraph = styled.p``;

const Parallax = styled.div``;

const Row = styled.div`
	flex-direction: row;
	justify-content: center;
	flex-wrap: no;
`;

const About = () => {
	const [background, setBackground] = useState();
	const images = [food, interior];

	useEffect(() => {
		let randomImage = images[Math.floor(Math.random() * 2)];
		setBackground(randomImage);
	});

	if (!background) return <LazyLoader>Loading...</LazyLoader>;

	return (
		<Container>
			<H1>About</H1>
			<Row>
				<Image src={background}></Image>
				<H2>CHICAGO’S PREMIER STEAKHOUSE WITH A MODERN TWIST</H2>
			</Row>
			<Paragraph>
				THE WEST LOOP OF CHICAGO—AND MORE SPECIFICALLY, FULTON MARKET—IS WHERE
				AMERICAN STEAK WAS BORN. THE TEAM OF BOKA RESTAURANT GROUP, B.
				HOSPITALITY, EXECUTIVE CHEF CHRIS PANDEL, AND WORLD RENOWNED DESIGNERS,
				AVROKO, HAVE CREATED SWIFT & SONS—A PLACE THAT NOT ONLY ELEVATES WHAT
				HAS ALREADY BEEN DONE, BUT EVOLVES THE AMERICAN STEAKHOUSE FOR THE
				MODERN DINER.
			</Paragraph>
			<Paragraph>
				In 19th century Chicago, the cattle trade was one of the most
				prestigious businesses of which to be involved, with one of the industry
				pioneers being Gustavus Franklin Swift. The design for Swift & Sons
				takes its inspiration from this titan of the industry, re-imagining what
				this fictitious company's headquarters might look like in the
				retro-future.
			</Paragraph>
			<H2>BOKA RESTAURANT GROUP DELIVERS SWIFT & SONS</H2>
			<Paragraph>
				The experience mirrors that of walking into a luxury, old boys'
				club—turn of the 20th century office building with high ceilings,
				stained glass lighting, and mosaic marble floors. Raw concrete columns
				and mushroom capitals are left exposed, providing peeks to the original
				architecture of the building which was (not un-ironically) once a Cold
				Storage facility in the middle of the meatpacking center of Chicago.
			</Paragraph>
		</Container>
	);
};

export default About;
