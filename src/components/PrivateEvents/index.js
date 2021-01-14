import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
	background: ${({ altBg }) => (altBg ? "#9b9388" : "#1f262E")};
	color: #d9d5b6;
	margin-top: 150px;
	margin-bottom: 50px;

	@media screen and (max-width: 780px) {
		margin-top: 100px;
	}

	@media screen and (max-width: 400px) {
		margin-bottom: -100px;
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

const Intro = styled.p`
	color: #9b9388;
	font-size: 16px;
	font-weight: 700;
	letter-spacing: 1.4px;
	line-height: 16px;
	margin-bottom: 16px;
	text-transform: uppercase;
`;

const Description = styled.p`
	color: ${({ altText }) => (altText ? "#3b3517" : "#d9d5b6")};
	font-size: 18px;
	line-height: 24px;
	margin-bottom: 35px;
	max-width: 440px;
`;

const H1 = styled.h1`
	color: ${({ altTwoText }) => (altTwoText ? "#9b9388" : "#3b3517")};
	font-size: 48px;
	font-weight: 600;
	line-height: 1.1;
	margin-bottom: 24px;

	@media screen and (max-width: 480px) {
		font-size: 32px;
	}
`;

const ImgContainer = styled.div`
	height: 100%;
	max-width: 555px;

	@media screen and (max-width: 780px) {
		display: none;
	}
`;

const Img = styled.img`
	margin: 0 0 10px 0;
	padding-right: 0;
	width: 100%;
`;

export const Form = styled.form`
	background: #181a1b;
	border-radius: 4px;
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);
	display: grid;
	height: auto;
	margin: 0 auto;
	max-width: 400px;
	padding: 80px 32px;
	width: 100%;
	z-index: 1;

	@media screen and (max-width: 400px) {
		padding: 32px 32px;
	}
`;

export const Label = styled.label`
	color: #d9d5b6;
	font-size: 14px;
	margin-bottom: 8px;
`;

export const InputText = styled.input`
	border-radius: 4px;
	border: none;
	margin-bottom: 32px;
	padding: 16px 16px;
`;

export const InputTextArea = styled.textarea`
	width: 100%;
`;

export const InputSelect = styled.select`
	border-radius: 4px;
	border: none;
	margin-bottom: 32px;
	padding: 16px 16px;
`;

export const FormButton = styled.button`
	color: #1f262e;
	border-radius: 4px;
	border: none;
	background: #d9d5b6;
	cursor: pointer;
	font-size: 20px;
	padding: 16px 0;
	margin-top: 10px;
`;

export const Text = styled.span`
	color: #d9d5b6;
	font-size: 14px;
	margin-top: 24px;
	text-align: center;
`;

const PrivateEvents = () => {
	const [partySize, setPartySize] = useState(0);
	const [partyType, setPartyType] = useState("");
	const [partyDetails, setPartyDetails] = useState("");

	const handleSubmit = (event) => {
		event.preventDefault();
	};
	return (
		<Container>
			<Wrapper>
				<Row>
					<ColumnOne>
						<Intro>Private Bookings</Intro>
						<H1>Our many private dining options are available.</H1>
						<Description>
							Please tell us more about your goals, and one of our event
							consultants will reach out!
						</Description>
						<Form onClick={handleSubmit}>
							<Label htmlFor='partySize'>Party Size</Label>
							<InputSelect
								name='size'
								id='size'
								form='sizeform'
								onChange={(event) => setPartySize(event.target.value)}
								value={partySize}>
								<option value='1-15'>1-15</option>
								<option value='16-30'>16-30</option>
								<option value='31-50'>31-50</option>
								<option value='50+'>50+</option>
							</InputSelect>
							<Label htmlFor='partyType'>Party Type</Label>
							<InputSelect
								name='type'
								id='type'
								form='typeform'
								onChange={(event) => setPartyType(event.target.value)}
								value={partyType}>
								<option value='WeddingReception'>Wedding Reception</option>
								<option value='birthdayParty'>Birthday Party</option>
								<option value='CorporateEvent'>Corporate Event</option>
								<option value='SeatedDinner'>Seated Dinner</option>
								<option value='WeddingReception'>Wedding Reception</option>
							</InputSelect>
							<Label htmlFor='additionalDetails'>Additional Details:</Label>
							<InputTextArea
								type='text'
								rows='8'
								name='details'
								id='details'
								form='detailsform'
								onChange={(event) => setPartyDetails(event.target.value)}
								value={partyDetails}
							/>
							<FormButton>Submit</FormButton>
						</Form>
					</ColumnOne>
					<ColumnTwo>
						<ImgContainer>
							<Img
								src={
									"https://scontent.fapa1-1.fna.fbcdn.net/v/t1.0-9/12140844_1689385131347326_3486717635046120710_n.jpg?_nc_cat=108&ccb=2&_nc_sid=19026a&_nc_ohc=4csiMtHC0b8AX97BnJd&_nc_ht=scontent.fapa1-1.fna&oh=c91fa824f13e04c7d1a330cbe58b846f&oe=6001A5A5"
								}
							/>
						</ImgContainer>
						{/* <ImgContainer>
							<Img src={require("../../images/food2.jpg").default} />
						</ImgContainer> */}
					</ColumnTwo>
				</Row>
			</Wrapper>
		</Container>
	);
};

export default PrivateEvents;
