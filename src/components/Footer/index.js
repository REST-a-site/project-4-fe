import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {
	FaFacebook,
	FaInstagram,
	FaTwitter,
	FaYoutube,
	FaLinkedin,
} from 'react-icons/fa';
import { animateScroll as Scroll } from 'react-scroll';

export const FooterContainer = styled.footer`
	background-color: #101522;
`;

export const FooterWrap = styled.div`
	padding: 48px 24px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	max-width: 1100px;
	margin: 0 auto;
`;

export const FooterLinksContainer = styled.div`
	display: flex;
	justify-content: center;

	#media screen and (max-width: 820px) {
		padding-top: 32px;
	}
`;

export const FooterLinksWrapper = styled.div`
	display: flex;

	@media screen and (max-width: 820px) {
		flex-direction: column;
	}
`;

export const FooterLinkItems = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    margin: 16px;
    text-align: left;
    width: 160px
    box-sizing: border-box;
    color: #ffffff;

    @media screen and (max-width: 420px){
        margin: 0;
        padding: 10px;
        width: 100%;
    }
`;

// export const FooterLinkTitle = styled.h1`
//     font-size=14px;
//     margin-bottom: 16px;
// `;

export const FooterLink = styled(Link)`
	color: #ffffff;
	text-decoration: none;
    margin-bottom: 0.5rem;
    padding-left: 2rem;
    max-width: 100%;
	font-size: 14px;

	&:hover {
		color: #d9d5b6;
		transition: 0.3s ease-out;
    }

`;

export const SocialMedia = styled.section`
	max-width: 1000px;
	width: 100%;
`;

export const SocialMediaWrap = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	max-width: 1100px;
	margin: 40px auto 0 auto;

	@media screen and (max-width: 820px) {
		flex-direction: column;
	}
`;

export const FooterLogo = styled(Link)`
	color: #ffffff;
	justify-self: start;
	cursor: pointer;
	text-decoration: none;
	font-size: 1.5rem;
	display: flex;
	align-items: center;
	margin-bottom: 16px;
	font-weight: bold;


`;

export const WebsiteRights = styled.small`
	color: #ffffff;
	margin-bottom: 16px;
`;

export const SocialIcons = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 240px;
`;

export const SocialIconLink = styled.a`
	color: #ffffff;
	font-size: 24px;

	&:hover {
		color: #d9d5b6;
		transition: 0.3s ease-out;
	}
`;

const Footer = () => {
	const toggleTop = () => {
		Scroll.scrollToTop();
	};

	return (
		<FooterContainer>
			<FooterWrap>
				<FooterLinksContainer>
					<FooterLinksWrapper>
						<FooterLinkItems>
							{/* <FooterLinkTitle>Contact Us</FooterLinkTitle> */}
							<FooterLink to='/'>Careers</FooterLink>
							<FooterLink to='/'>Investors</FooterLink>
							<FooterLink to='/'>Terms of Service</FooterLink>
							<FooterLink to='/'>Sponsorships</FooterLink>
							<FooterLink to='/'>Admin Login</FooterLink>
						</FooterLinkItems>
					</FooterLinksWrapper>
				</FooterLinksContainer>
				<SocialMedia>
					<SocialMediaWrap>
						<FooterLogo to='/' onClick={toggleTop}>
							921
						</FooterLogo>
						<WebsiteRights>
							921 © {new Date().getFullYear()} All Rights Reserved
						</WebsiteRights>
						<SocialIcons>
							<SocialIconLink href='/' target='_blank' aria-label='Facebook'>
								<FaFacebook />
							</SocialIconLink>
							<SocialIconLink href='/' target='_blank' aria-label='Instagram'>
								<FaInstagram />
							</SocialIconLink>
							<SocialIconLink href='/' target='_blank' aria-label='Twitter'>
								<FaTwitter />
							</SocialIconLink>
							<SocialIconLink href='/' target='_blank' aria-label='Youtube'>
								<FaYoutube />
							</SocialIconLink>
							<SocialIconLink
								href='//www.linkedin.com/in/jtomassoni'
								target='_blank'
								aria-label='Linkedin'>
								<FaLinkedin />
							</SocialIconLink>
						</SocialIcons>
					</SocialMediaWrap>
				</SocialMedia>
			</FooterWrap>
		</FooterContainer>
	);
};

export default Footer;
