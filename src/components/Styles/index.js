import styled, { keyframes } from "styled-components";
import { Link } from "react-scroll";

// button from https://www.youtube.com/watch?v=Nl54MJDR2p8&amp%3Bt=12846s&ab_channel=BrianDesign

export const Button = styled(Link)`
	border-radius: 50px;
	background: ${({ primary }) => (primary ? "#3b3517" : "#9b9388")};
	white-space: nowrap;
	padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
	color: ${({ dark }) => (dark ? "#9b9388" : "#D9D5B6")};
	font-size: ${({ fontBig }) => (fontBig ? "24px" : "20px")};
	outline: none;
	border: none;
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;
	transition: all 0.2s ease-in-out;

	&:hover {
		transition: all 0.2s ease-in-out;
		background: ${({ primary }) => (primary ? "#9b9388" : "#3b3517")};
		/* color: ${({ dark }) => (dark ? "#D9D5B6" : "3B3517")}; not working */
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


