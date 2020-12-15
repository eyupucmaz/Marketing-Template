import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { Button } from "../../globalStyles";
import {
	FooterContainer,
	FooterLinksContainer,
	FooterSubHeading,
	FooterSubscription,
	FooterSubText,
	Form,
	FormInput,
	FooterLinksWrapper,
	FooterLink,
	FooterLinkTitle,
	FooterLinksItems,
	SocialMedia,
	SocialMediaWrapper,
	SocialLogo,
	SocialIcon,
	WebsiteRights,
	SocialIcons,
	SocialIconLink,
} from "./Footer.elements";

const Footer = () => {
	return (
		<>
			<FooterContainer>
				<FooterSubscription>
					<FooterSubHeading>
						Join our exclusive membership to receive the latest news and trends
					</FooterSubHeading>
					<FooterSubText>You can unsubscribe at any time.</FooterSubText>
					<Form>
						<FormInput name="email" type="email" placeholder=" Your Email" />
						<Button fontBig>Subscribe</Button>
					</Form>
				</FooterSubscription>
				<FooterLinksContainer>
					<FooterLinksWrapper>
						<FooterLinksItems>
							<FooterLinkTitle>About Us</FooterLinkTitle>
							<FooterLink to="/sign-up">How it works</FooterLink>
							<FooterLink to="/">Testimonials</FooterLink>
							<FooterLink to="/">Careers</FooterLink>
							<FooterLink to="/">Investors</FooterLink>
							<FooterLink to="/">Terms of Service</FooterLink>
						</FooterLinksItems>
						<FooterLinksItems>
							<FooterLinkTitle>Contact Us</FooterLinkTitle>
							<FooterLink to="/">Contact</FooterLink>
							<FooterLink to="/">Support</FooterLink>
							<FooterLink to="/">Destinations</FooterLink>
							<FooterLink to="/">Sponsorships</FooterLink>
						</FooterLinksItems>
					</FooterLinksWrapper>
					<FooterLinksWrapper>
						<FooterLinksItems>
							<FooterLinkTitle>Videos</FooterLinkTitle>
							<FooterLink to="/">Submit Video</FooterLink>
							<FooterLink to="/">Ambassadors</FooterLink>
							<FooterLink to="/">Agency</FooterLink>
							<FooterLink to="/">Influencer</FooterLink>
						</FooterLinksItems>
						<FooterLinksItems>
							<FooterLinkTitle>Social Media</FooterLinkTitle>
							<FooterLink to="/">Instagram</FooterLink>
							<FooterLink to="/">Facebook</FooterLink>
							<FooterLink to="/">Youtube</FooterLink>
							<FooterLink to="/">Twitter</FooterLink>
						</FooterLinksItems>
					</FooterLinksWrapper>
				</FooterLinksContainer>

				<SocialMedia>
					<SocialMediaWrapper>
						<SocialLogo to="/">
							<SocialIcon />
							SUNRISE
						</SocialLogo>
						<WebsiteRights>SUNRISE &copy; 2020</WebsiteRights>

						<SocialIcons>
							<SocialIconLink href="/" target="_blank" aria-label="Facebook">
								<FaFacebook />
							</SocialIconLink>
							<SocialIconLink href="/" target="_blank" aria-label="Instagram">
								<FaInstagram />
							</SocialIconLink>
							<SocialIconLink href="/" target="_blank" aria-label="Twitter">
								<FaTwitter />
							</SocialIconLink>
							<SocialIconLink href="/" target="_blank" aria-label="LinkedIn">
								<FaLinkedin />
							</SocialIconLink>
						</SocialIcons>
					</SocialMediaWrapper>
				</SocialMedia>
			</FooterContainer>
		</>
	);
};

export default Footer;
