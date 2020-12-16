import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
	background: ${({ altBg }) => (altBg ? "#9b9388" : "#1f262E")};
	color: #d9d5b6;

	@media screen and (max-width: 780px) {
		padding: 100px 0;
	}
`;

const Wrapper = styled.div`
	display: grid;
	height: 860px;
	justify-content: center;
	margin-left: auto;
	margin-right: auto;
	max-width: 1100px;
	padding: 0 24px;
	width: 100%;
	z-index: 1;
`;

const Row = styled.div`
	align-items: center;
	display: grid;
	grid-auto-columns: minmax(auto, 1fr);
	grid-template-areas: ${({ imgPosition }) =>
		imgPosition ? `'col2 col1'` : `'col1 col2'`};

	@media screen and (max-width: 780px) {
		grid-template-areas: ${({ imgPosition }) =>
			imgPosition ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
	}
`;

const ColumnOne = styled.div`
	grid-area: col1;
	margin-bottom: 15px;
	padding: 0 15px;
`;

const ColumnTwo = styled.div`
	grid-area: col2;
	margin-bottom: 15px;
	padding: 0 15px;
`;

const WidgetDesktop = styled.div``;

const WidgetMobile = styled.div``

const ImgContainer = styled.div`
	height: 100%;
	max-width: 555px;
`;

const Img = styled.img`
	margin: 0 0 10px 0;
	padding-right: 0;
	width: 100%;
`;

const Reserve = () => {
	const [widgetView, setWidgetView] = useState()

	// when page loads, 


	const openTable = document.getElementById("ot-widget-container0");
	console.log(openTable);

	useEffect(() => {
		const script = document.createElement("script");

		const urlMobile =
			"//www.opentable.com/widget/reservation/loader?rid=432&theme=standard&iframe=true&domain=com&lang=en-US&newtab=false&ot_source=Restaurant%20website";

		const urlDesktop =
			"//www.opentable.com/widget/reservation/loader?rid=432&theme=wide&iframe=true&domain=com&lang=en-US&newtab=false&ot_source=Restaurant%20website";

			console.log(window.innerWidth);

		if (window.innerWidth < 500) {
			script.src = urlMobile;
		} else {
			script.src = urlDesktop;
		}

		script.async = true;
		console.log(
			document.body.childNodes[3].childNodes[3].childNodes[0].childNodes[0]
				.childNodes[0]
		);
		document.body.childNodes[3].childNodes[3].childNodes[0].childNodes[0].childNodes[0].appendChild(
			script
		);
		return () => {
			document.body.childNodes[3].childNodes[3].childNodes[0].childNodes[0].childNodes[0].removeChild(
				script
			);
		};
	}, []);

	if (window.innerWidth < 500) {
		
	}


	return (
		<Container altBg={true}>
			<Wrapper>
				<Row imgPosition={true}>
					<ColumnOne>
						<OpenTable />
					</ColumnOne>
				</Row>
			</Wrapper>
		</Container>
	);
};

export default Reserve;
