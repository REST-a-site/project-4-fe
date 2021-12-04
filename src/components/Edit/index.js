import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";

const Container = styled.div`
	background: linear-gradient(108deg, #d9d5b6 0%, #1f262e 100%);
	bottom: 0;
	left: 0;
	min-height: 700px;
	overflow: hidden;
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
	text-align: center;
	padding-bottom: 10px;
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

const InputSelect = styled.select`
	border-radius: 4px;
	border: none;
	margin-bottom: 32px;
	padding: 16px 16px;
`;

const InputTextArea = styled.textarea`
	border-radius: 4px;
	border: none;
	margin-bottom: 32px;
	padding: 16px 16px;
	resize: none;
`;

const FormButton = styled.button`
	color: #1f262e;
	border-radius: 4px;
	border: none;
	background: #d9d5b6;
	cursor: pointer;
	font-size: 15px;
	padding: 8px 0;
	margin-bottom: 10px;
`;

const Edit = () => {
	const blankForm = {
		section: "-select-",
		name: "name",
		description: "",
		price: 0,
		checked: false,
	};
	const [formState, setFormState] = useState(blankForm);
	const [items, setItems] = useState([]);
	// const [selection, setSelection] = useState('')
	const history = useHistory();

	const url = "https://restasitebackend.herokuapp.com/api/menu";

	useEffect(() => {
		axios(url)
			.then((res) => {
				setItems(res.data[0].menu_item_name);
			})
			.catch(console.error);
	}, []);

	let handleChange = (e) => {
		e.preventDefault();
		// setSelection(e.target.value)
	};

	let handleSubmit = (e) => {
		e.preventDefault();
		axios({
			method: "PATCH",
			url: url,
			headers: {
				Authorization: `Token ${localStorage.getItem("token")}`,
			},
			body: { ...formState },
		})
			.then(() => history.push("/menu"))
			.catch(console.error);
	};

	let handleCancel = (e) => {
		history.push("/menu");
		setFormState(blankForm);
	};

	let handleDelete = () => {};

	let handleSave = () => {};

	return (
		<>
			<Container>
				<Wrapper>
					<Icon to='/'>921</Icon>
					<Content>
						<Form onSubmit={handleSubmit}>
							<H1>Create/Edit/Delete Item</H1>
							<Label htmlFor='item'>Item</Label>
							<InputSelect name='item' onChange={handleChange} value=''>
								<option>-select-</option>
								{items.map((e, i) => {
									return (
										<option key={i} value={`${e.item_name}`}>
											{e.item_name}
										</option>
									);
								})}
							</InputSelect>
							<Label htmlFor='section'>Section</Label>
							<InputSelect name='section' onChange={handleChange} value=''>
								<option value='select'>-select-</option>
								<option value='Appetizers'>Appetizers</option>
								<option value='Shellfish'>Shellfish</option>
								<option value='Salads'>Salads</option>
								<option value='Entrees'>Entrees</option>
								<option value='primeSteaks'>Prime Steaks</option>
								<option value='largeFormatSteak'>Large Format Steak</option>
								<option value='Sides'>Sides</option>
							</InputSelect>
							<Label htmlFor='name'>New Item Name</Label>
							<Input
								type='text'
								name='name'
								required
								onChange={handleChange}
								value=''
							/>
							<Label htmlFor='description'>Description</Label>
							<InputTextArea
								rows='5'
								type='text'
								name='description'
								required
								onChange={handleChange}
								value=''
							/>
							<Label htmlFor='price'>Price</Label>
							<Input
								name='price'
								type='number'
								required
								onChange={handleChange}
								value=''
							/>
							<Label htmlFor='active'>Active?</Label>
							<Input
								name='active'
								type='checkbox'
								required
								onChange={handleChange}
								checked={false}
							/>
							<FormButton onClick={handleSave}>Save</FormButton>
							<FormButton onClick={handleDelete}>Delete</FormButton>
							<FormButton onClick={handleCancel}>Cancel</FormButton>
						</Form>
					</Content>
				</Wrapper>
			</Container>
		</>
	);
};

export default Edit;
