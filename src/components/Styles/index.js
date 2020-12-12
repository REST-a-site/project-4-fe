import styled, { keyframes } from "styled-components";

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
