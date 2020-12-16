import React from "react";
import styled from "styled-components";

const Container = styled.div``

const Wrapper = styled.div``

const Icon = styled(Link)``

const Content = styled.div``

const Form = styled.form``

const H1 = styled.h1``

const Label = styled.label``

const Input = styled.input``

const FormButton = styled.button``

const Text = styled.span``

const LogIN = () => {
	return (
		<>
			<Container>
				<Wrapper>
					<Icon to-='/'>921</Icon>
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

export default LogIN;
