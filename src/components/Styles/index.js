import styled, { keyframes, createGlobalStyle } from "styled-components";
import { Link } from 'react-scroll'

// button from https://www.youtube.com/watch?v=Nl54MJDR2p8&amp%3Bt=12846s&ab_channel=BrianDesign

export const Button = styled(Link)`
	border-radius: 50px;
	background: ${({ primary }) => (primary ? "#01BF71" : "#010606")};
	white-space: nowrap;
	padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
	color: ${({ dark }) => (dark ? "#010606" : "#fff")};
	font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
	outline: none;
	border: none;
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;
	transition: all 0.2s ease-in-out;

	&:hover {
		transition: all 0.2s ease-in-out;
		background: ${({ primary }) => (primary ? "#fff" : "#01BF71")};
	}
`;

export const FadeIn = keyframes`
0% {
	opacity: 0;
}

100% {
	opacity: 1;
}
`;

export const LazyLoader = styled.h4`
	display: flex;
	font-size: 30px;
	align-items: center;
	justify-content: center;
	flex-direction: row;
`;

export const GlobalStyle = createGlobalStyle`
	a {
		text-decoration: none;
	}
	body, html {
		height: 100%;
		scroll-behavior: smooth;
	}
	body {
		font-family: Sans-Serif;
		font-size: 18px;
		padding: 0;
		margin: 0;
	}
`
