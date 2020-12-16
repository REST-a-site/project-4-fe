import React from "react";
import { Button } from "../Styles";
import styled from "styled-components";

const Container = styled.div``;

const Wrapper = styled.div``;

const Row = styled.div``;

const ColumnOne = styled.div``;

const ColumnTwo = styled.div``;

const Content = styled.div``;

const BigP = styled.p``;

const LittleP = styled.p``;

const H1 = styled.h1``;

const ButtonContainer = styled.div``;

const ImgContainer = styled.div``;

const Img = styled.img``;

const Info = () => {
	return (
		<Container>
			<Wrapper>
				<Row>
					<ColumnOne>
						<Content>
							<BigP>Want to know more...</BigP>
							<H1>...About the Restaurant</H1>
							<LittleP>
								Then read this little paragraph right here for the information about the restaurant that was told to you would be here!
							</LittleP>
							<ButtonContainer>
								<Button to='home' offset={-80} />
							</ButtonContainer>
						</Content>
					</ColumnOne>
					<ColumnTwo>
						<ImgContainer>
							<Img />
						</ImgContainer>
					</ColumnTwo>
				</Row>
			</Wrapper>
		</Container>
	);
};

export default Info;
