import styled, { keyframes, createGlobalStyle } from "styled-components";

export const Container = styled.div`
	font-size: 20px;
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
	font-size: 30px;
	align-items: center;
	justify-content: center;
	flex-direction: row;
`;

export const GlobalStyle = createGlobalStyle`
	body, html {
		height: 100%;
	}
	body {
		font-family: Sans-Serif;
	}
`
