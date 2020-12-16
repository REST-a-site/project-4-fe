

const Container = styled.div`
	height: 100vh;
	overflow: hidden;
	object-fit: cover;
	background-attachment: fixed;
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;

	${({ background }) =>
		background &&
		css`
			background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
				url("${({ background }) => background}");
		`}

	@media (min-width: 900px) {
		height: 400px;
	}
`;

const Title = styled.h1`
    margin-top: 20%;
	color: white;
	animation: 2s ${FadeIn} ease-in;
    font-size: 72px;
    
    @media (min-width: 900px) {
        font-size: 10px;
    }
`;

const Paragraph = styled.p`
	color: white;
	animation: 4s ${FadeIn} ease-in;
	font-size: 24px;
	@media (min-width: 900px) {
		font-size: 20px;
	}
`;
