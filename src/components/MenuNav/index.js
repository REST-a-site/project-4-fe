import React from "react";
import styled from "styled-components";

const Container = styled.div`
	height: 10vh;
	display: flex;
	flex-direction: row;
	justify-content: center;
	margin-top: 10vh;
`;

const LazyLoader = styled.h2``;

const MenuButton = styled.div`
	margin: 2.5vh;
	border-radius: 0px;
	background: ${({ primary }) => (primary ? "#181A1B" : "#3B3517")};
	white-space: nowrap;
	padding: ${({ big }) => (big ? "16px 50px" : "14px 32px")};
	color: ${({ dark }) => (dark ? "#D9D5B6" : "#D9D5B6")};
	font-size: ${({ fontBig }) => (fontBig ? "28x" : "22px")};
	outline: 5px solid #181a1b;
	border: none;
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;
	transition: all 0.2s ease-in-out;

	&:hover {
		transition: all 0.2s ease-in-out;
		background: ${({ primary }) => (primary ? "#D9D5B6" : "#D9D5B6")};
		color: ${({ dark }) => (dark ? "#181A1B" : "#3B3517")};
	}
`;

const MenuNav = ({ menuLinks, setMenuId }) => {
	let handleClick = (e) => {
		return setMenuId(Number(e.target.id));
	};

	if (!menuLinks) {
		return <LazyLoader>Loading...</LazyLoader>;
	}

	return (
		<Container>
			{menuLinks.map((name, i) => {
				return (
					<MenuButton id={name[1].toString()} onClick={handleClick} key={i}>
						{name[0]}
					</MenuButton>
				);
			})}
		</Container>
	);
};

export default MenuNav;
