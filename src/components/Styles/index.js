import styled, { keyframes } from "styled-components";
import { Link } from "react-scroll";

// button from https://www.youtube.com/watch?v=Nl54MJDR2p8&amp%3Bt=12846s&ab_channel=BrianDesign

export const Button = styled(Link)`
	border-radius: 0px;
	background: ${({ primary }) => (primary ? "#181A1B" : "#3B3517")};
	white-space: nowrap;
	padding: ${({ big }) => (big ? "16px 50px" : "14px 32px")};
	color: ${({ dark }) => (dark ? "#D9D5B6" : "#D9D5B6")};
	font-size: ${({ fontBig }) => (fontBig ? "28x" : "22px")};
	outline: 5px solid #181A1B;
	border: none;
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;
	transition: all 0.2s ease-in-out;

	&:hover {
		transition: all 0.2s ease-in-out;
		background: ${({ primary }) => (primary ? "#D9D5B6" : "#D9D5B6")};
		color: ${({ dark }) => (dark ? "#181A1B" : "#3B3517")}; not working
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
