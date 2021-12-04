import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
	background: linear-gradient(108deg, #d9d5b6 0%, #1f262e 100%);
	bottom: 0;
	left: 0;
	min-height: 700px;
	overflow: hidden;
	position: fixed;
	right: 0;
	top: 0;
	z-index: 0;
`;

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
	justify-content: center;

	@media screen and (max-width: 400px) {
		height: 80%;
	}
`;

export const Icon = styled(Link)`
	color: #1f262e;
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

export const Content = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
	justify-content: center;

	@media screen and (max-width: 480px) {
		padding: 10px;
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
	padding: 80px 32px;
	width: 100%;
	z-index: 1;

	@media screen and (max-width: 400px) {
		padding: 32px 32px;
	}
`;

export const H1 = styled.h1`
	color: #d9d5b6;
	font-size: 20px;
	font-weight: 400;
	text-align: center;
`;

export const Label = styled.label`
	color: #d9d5b6;
	font-size: 14px;
	margin-bottom: 8px;
`;

export const Input = styled.input`
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
`;

export const ShouldNotLogin = styled(Link)`
	color: #d9d5b6;
	font-size: 14px;
	margin: 40px;
	text-align: center;
`;
