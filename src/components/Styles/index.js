import styled, { keyframes, createGlobalStyle } from "styled-components";

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
