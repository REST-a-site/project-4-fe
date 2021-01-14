import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
	background: ${({ altBg }) => (altBg ? "#9b9388" : "#1f262E")};
	color: #d9d5b6;
	bottom: 0;
	left: 0;
	min-height: 700px;
	overflow: hidden;
	right: 0;
	top: 0;
	z-index: 0;
	padding-top: 5vh;
	padding-bottom: 5vh;

	@media screen and (max-width: 780px) {
		padding: 100px 0;
	}
`;

const Wrapper = styled.div`
	margin-left: auto;
	margin-right: auto;
	max-width: 1100px;
	padding: 0 24px;
	width: 100%;
	z-index: 1;
	display: flex;
	flex-direction: column;
	height: 100%;
	justify-content: center;

	@media screen and (max-width: 400px) {
		height: 80%;
	}
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

const ImgContainer = styled.div`
	height: 100%;
	max-width: 555px;
`;

const Img = styled.img`
	margin: 0 0 10px 0;
	padding-right: 0;
	width: 100%;
	height: 550px;

	@media screen and (max-width: 780px) {
		display: none;
	}
`;

export const Form = styled.form`
	background: #181a1b;
	border-radius: 4px;
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);
	display: grid;
	height: auto;
	margin: 0 auto;
	max-width: 400px;
	padding: 70px 32px;
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

export const InputTextArea = styled.textarea`
	width: 100%;
	resize: none;
`;

const Contact = () => {
	const [contact, setContact] = useState();
	const [name, setName] = useState();
	const [email, setEmail] = useState();

	return (
		<Container altBg={true} id='contact'>
			<Wrapper>
				<Row imgPosition={true}>
					<ColumnOne>
						<Form>
							<h1>Contact Us:</h1>
							<Label htmlFor='name'>Name:</Label>
							<InputTextArea
								type='text'
								rows='3'
								name='name'
								id='name'
								form='nameform'
								onChange={(event) => setName(event.target.value)}
								value={name}
							/>
							<Label htmlFor='email'>Email:</Label>
							<InputTextArea
								type='text'
								rows='3'
								name='email'
								id='email'
								form='emailform'
								onChange={(event) => setEmail(event.target.value)}
								value={email}
							/>
							<Label htmlFor='additionalDetails'>Additional Details:</Label>
							<InputTextArea
								type='text'
								rows='8'
								name='details'
								id='details'
								form='detailsform'
								onChange={(event) => setContact(event.target.value)}
								value={contact}
							/>
							<FormButton>Submit</FormButton>
						</Form>
					</ColumnOne>
					<ColumnTwo>
						<ImgContainer>
							<Img src={require("../../images/food3.jpg").default} alt='food' />
						</ImgContainer>
					</ColumnTwo>
				</Row>
			</Wrapper>
		</Container>
	);
};

export default Contact;
