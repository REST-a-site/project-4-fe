import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
// import { useHistory } from "react-router-dom";
// import axios from "axios";
// import { AppContext } from '../../AppContext'

const Container = styled.div`
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
	color: #1f262e;
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
	// const { userInfo, setUserInfo } = useContext(AppContext);
	// const [sent, setSent] = useState(false);
	// const history = useHistory();

	// const handleSubmit = (e) => {
	// 	e.preventDefault();
	// 	setSent(true);
	// 	setFormState({ ...formState, formErr: "" });
	// 	axios({
	// 		method: "post",
	// 		url: "http://localhost:8000/token/login/",
	// 		data: {
	// 			email: email,
	// 			password: password,
	// 		},
	// 	})
	// 		.then((res) => {
	// 			setUserInfo({
	// 				_id: res.data._id,
	// 				email: res.data.email,
	// 			});
	// 		})
	// 		.then((res) => {
	// 			if (!formState.formErr) {
	// 				history.push("/");
	// 			}
	// 		})
	// 		.catch((res) => {
	// 			handleBadResponse(res);
	// 			return res;
	// 		});
	// };

	return (
		<>
			<Container>
				<Wrapper>
					<Icon to='/'>921</Icon>
					<Content>
						<Form>
							<H1>Log in to view account</H1>
							<Label htmlFor='for'>Email</Label>
							<Input
								type='email'
								required
								// onChange={(event) => setEmail(event.target.value)}
								// value={email}
								>

								</Input>
							<Label htmlFor='for'>Password</Label>
							<Input
								type='password'
								required
								// onChange={(event) => setPassword(event.target.value)}
								// value={password}
								></Input>
							<FormButton type='submit' 
							// onSubmit={handleSubmit}
							>
								Continue
							</FormButton>
							<Text>Forgot password?</Text>
						</Form>
					</Content>
				</Wrapper>
			</Container>
		</>
	);
};

export default LogIn;
