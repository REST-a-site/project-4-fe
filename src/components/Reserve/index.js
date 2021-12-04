import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ReserveDesktop from "../ReserveDesktop";
import ReserveMobile from "../ReserveMobile";

const Container = styled.div``;



const Reserve = () => {
	const [windowSize, setWindowSize] = useState();

	const breakpoint = 820;

	useEffect(() => {
		setWindowSize(window.innerWidth);
	}, []);

	window.addEventListener("resize", () => {
		setWindowSize(window.innerWidth);
	});

	if (!windowSize) return <h1>Loading...</h1>

	return (
		<Container id ='reserve'>
			{windowSize < breakpoint ? <ReserveMobile /> : <ReserveDesktop />}

		</Container>
	);
};

export default Reserve;
