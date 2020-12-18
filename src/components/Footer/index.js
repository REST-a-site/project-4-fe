import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { animateScroll as Scroll } from 'react-scroll';

export const FooterContainer = styled.footer`
	background-color: #1f262e;
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

	@media screen and (max-width: 820px) {
		padding-top: 32px;
	}
`;

export const FooterLinksWrapper = styled.div`
	display: flex;
	margin-bottom: 50px;

	@media screen and (max-width: 820px) {
		flex-direction: column;
	}
`;

export const FooterLinkItems = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    text-align: left;
    box-sizing: border-box;

    @media screen and (max-width: 420px){
        margin: 0;
        width: 100%;
        align-items: center;
        flex-direction: column;
    }
`;


export const FooterLink = styled(Link)`
	color: #d9d6b6;
	text-decoration: none;
	padding-left: 1rem;
	padding-right: 1rem;
	padding-bottom: 1rem;
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
	padding-top: 25px;
	border-top: 2px solid white;
`;

export const SocialMediaWrap = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	max-width: 1100px;

	@media screen and (max-width: 820px) {
		flex-direction: column;
	}
`;

export const FooterLogo = styled(Link)`
	color: #d9d6b6;
	justify-self: start;
	cursor: pointer;
	text-decoration: none;
	font-size: 1.5rem;
	display: flex;
	align-items: center;
	margin-bottom: 16px;
	font-weight: bold;

	&:hover {
		color: #d9d5b6;
		transition: 0.3s ease-out;
	}
`;

export const WebsiteRights = styled.small`
	color: #d9d6b6;
	margin-bottom: 16px;
	display: flex;
	justify-content: space-between;
`;

export const SocialIcons = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 240px;
`;

export const SocialIconLink = styled.a`
	color: #d9d6b6;
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
							<FooterLink to='/'>Careers</FooterLink>
							<FooterLink to='/'>Investors</FooterLink>
							<FooterLink to='/'>Terms of Service</FooterLink>
							<FooterLink to='/'>Sponsorships</FooterLink>
							<FooterLink to='/login'>Admin Login</FooterLink>
						</FooterLinkItems>
					</FooterLinksWrapper>
				</FooterLinksContainer>
				<SocialMedia>
					<SocialMediaWrap>
						<FooterLogo to='/' onClick={toggleTop}>
							921
						</FooterLogo>
						<WebsiteRights>
							© {new Date().getFullYear()} All Rights Reserved
						</WebsiteRights>
						<SocialIcons>
							<SocialIconLink
								href='https://www.facebook.com/swiftandsons'
								target='_blank'
								aria-label='Facebook'>
								<FaFacebook />
							</SocialIconLink>
							<SocialIconLink
								href='https://www.instagram.com/swiftandsons/'
								target='_blank'
								aria-label='Instagram'>
								<FaInstagram />
							</SocialIconLink>
							<SocialIconLink
								href='https://twitter.com/swiftandsonschi'
								target='_blank'
								aria-label='Twitter'>
								<FaTwitter />
							</SocialIconLink>
							<SocialIconLink
								href='https://youtube.com'
								target='_blank'
								aria-label='Youtube'>
								<FaYoutube />
							</SocialIconLink>
						</SocialIcons>
					</SocialMediaWrap>
				</SocialMedia>
			</FooterWrap>
		</FooterContainer>
	);
};

export default Footer;
