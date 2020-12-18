import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import {
	Container,
	Wrapper,
	Icon,
	Content,
	Form,
	H1,
	Label,
	Input,
	FormButton,
	Text,
} from "./styles";

const LogIn = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const history = useHistory();

	const handleSubmit = (event) => {
		event.preventDefault();
		axios({
			method: "POST",
			url: "https://restasitebackend.herokuapp.com/token/login",
			data: {
				username: email,
				password,
			},
		})
			.then((res) => {
				console.log("res from axios:", res.data.auth_token);
				localStorage.setItem("token", res.data.auth_token);
				history.push("/")
			})
			.catch(console.error);
	};

	return (
		<>
			<Container>
				<Wrapper>
					<Icon to='/'>921</Icon>
					<Content>
						<Form onSubmit={handleSubmit}>
							<H1>Log in to view account</H1>
							<Label htmlFor='for'>Email</Label>
							<Input
								type='email'
								required
								onChange={(event) => setEmail(event.target.value)}
								value={email}
							/>
							<Label htmlFor='for'>Password</Label>
							<Input
								type='password'
								required
								onChange={(event) => setPassword(event.target.value)}
								value={password}
							/>
							<FormButton>Continue</FormButton>
							<Text>Forgot password?</Text>
						</Form>
					</Content>
				</Wrapper>
			</Container>
		</>
	);
};

export default LogIn;
