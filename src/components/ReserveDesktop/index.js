import React from 'react';
import styled from 'styled-components';
import ScriptTag from 'react-script-tag';

const Container = styled.div`
	background: ${({ altBg }) => (altBg ? '#9b9388' : '#1f262E')};
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

const ReserveDesktop = () => {
	const urlDesktop =
		'//www.opentable.com/widget/reservation/loader?rid=432&theme=wide&iframe=true&domain=com&lang=en-US&newtab=false&ot_source=Restaurant%20website';

	return (
		<Container altBg={true}>
			<Wrapper>
				<Row imgPosition={true}>
					<ColumnOne>
						<ScriptTag type='text/javascript' src={urlDesktop} />
					</ColumnOne>
				</Row>
			</Wrapper>
		</Container>
	);
};

export default ReserveDesktop;
