import React, { useState, useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom';

const Container = styled.div`
	background: linear-gradient(
		108deg,
		#d9d5b6 0%,
		#1F262E 100%
	);
	bottom: 0;
	left: 0;
	min-height: 700px;
	overflow: hidden;
	position: fixed;
	right: 0;
	top: 0;
	z-index: 0;
`;

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
	justify-content: center;

	@media screen and (max-width: 400px) {
		height: 80%;
	}
`;

const Icon = styled(Link)`
    color: #1F262E;
	font-size: 32px;
	font-weight: 700;
	margin-left: 32px;
	margin-top: 32px;
	text-decoration: none;

	@media screen and (max-width: 480px) {
		margin-left: 16px;
		margin-top: 8px;
	}
`;

const Content = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
	justify-content: center;

	@media screen and (max-width: 480px) {
		padding: 10px;
	}
`;

const Form = styled.form`
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

const H1 = styled.h1`
	color: #d9d5b6;
	font-size: 20px;
	font-weight: 400;
	margin-bottom: 40px;
	text-align: center;
`;

const Label = styled.label`
	color: #d9d5b6;
	font-size: 14px;
	margin-bottom: 8px;
`;

const Input = styled.input`
	border-radius: 4px;
	border: none;
	margin-bottom: 32px;
	padding: 16px 16px;
`;

const FormButton = styled.button`
	color: #1F262E;
	border-radius: 4px;
	border: none;
	background: #d9d5b6;
	cursor: pointer;
	font-size: 20px;
	padding: 16px 0;
`;

const Text = styled.span`
	color: #d9d5b6;
	font-size: 14px;
	margin-top: 24px;
	text-align: center;
`;

const LogIn = () => {
	return (
		<>
			<Container>
				<Wrapper>
					<Icon to='/'>921</Icon>
					<Content>
						<Form>
							<H1>Log in to view account</H1>
							<Label htmlFor='for'>Email</Label>
							<Input type='email' required></Input>
							<Label htmlFor='for'>Password</Label>
							<Input type='password'></Input>
							<FormButton type='submit'>Continue</FormButton>
							<Text>Forgot password?</Text>
						</Form>
					</Content>
				</Wrapper>
			</Container>
		</>
	);
};

export default LogIn;
