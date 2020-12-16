
import styled, { css } from "styled-components";
import { FadeIn, LazyLoader } from "../Styles/index";
import interior5 from "../media/images/interior5.jpg";
import interior6 from "../media/images/interior6.jpg";
import interior7 from "../media/images/interior7.jpg";

const Container = styled.div`
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

const Title = styled.h1`
    margin-top: 20%;
	color: white;
	animation: 2s ${FadeIn} ease-in;
    font-size: 72px;
    
    @media (min-width: 900px) {
        font-size: 10px;
    }
`;

const Paragraph = styled.p`
	color: white;
	animation: 4s ${FadeIn} ease-in;
	font-size: 24px;
	@media (min-width: 900px) {
		font-size: 20px;
	}
`;
