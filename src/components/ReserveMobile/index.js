import React from 'react';
import styled from 'styled-components';
import ScriptTag from 'react-script-tag';

const Container = styled.div`
	background: ${({ altBg }) => (altBg ? '#9b9388' : '#1f262E')};
	color: #d9d5b6;
	padding: 50px;
`;

const Wrapper = styled.div`
	display: grid;
	height: 300px;
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
		imgPosition ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
`;

const ColumnOne = styled.div`
	grid-area: col1;
	margin-bottom: 15px;
	padding: 0 15px;
`;

const ReserveMobile = () => {
	const urlMobile =
		'//www.opentable.com/widget/reservation/loader?rid=432&theme=standard&iframe=true&domain=com&lang=en-US&newtab=false&ot_source=Restaurant%20website';

	return (
		<Container altBg={true}>
			<Wrapper>
				<Row imgPosition={true}>
					<ColumnOne>
						<ScriptTag type='text/javascript' src={urlMobile} />
					</ColumnOne>
				</Row>
			</Wrapper>
		</Container>
	);
};

export default ReserveMobile;
