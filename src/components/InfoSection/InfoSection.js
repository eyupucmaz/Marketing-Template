import React from "react";
import { Button, Container } from "../../globalStyles";
import {
	InfoSec,
	InfoRow,
	InfoColumn,
	TextWrapper,
	TopLine,
	Heading,
	Subtitle,
	ImgWrapper,
	Img,
} from "./InfoSection.elements";
import { Link } from "react-router-dom";

const InfoSection = ({
	primary,
	lightBg,
	imgStart,
	lightTopLine,
	lightTextDesc,
	buttonLabel,
	description,
	headLine,
	lightText,
	topLine,
	img,
	alt,
	start,
	imgShadow,
	btnShow,
}) => {
	return (
		<>
			<InfoSec lightBg={lightBg}>
				<Container>
					<InfoRow imgStart={imgStart}>
						<InfoColumn>
							<TextWrapper>
								<TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
								<Heading lightText={lightText}>{headLine}</Heading>
								<Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
								{btnShow ? (
									<Link to="/sign-up">
										<Button big fontBig primary={primary}>
											{buttonLabel}
										</Button>
									</Link>
								) : (
									""
								)}
							</TextWrapper>
						</InfoColumn>
						<InfoColumn>
							<ImgWrapper start={start}>
								<Img shadow={imgShadow} src={img} alt={alt} />
							</ImgWrapper>
						</InfoColumn>
					</InfoRow>
				</Container>
			</InfoSec>
		</>
	);
};

export default InfoSection;
