import {
	StyledBoxWiki,
	StyledLink,
	StyledParagraph,
	StyledTitle
} from './wikiInfo.styles';

const WikiInfo = ({ name, paragraph }) => {
	return (
		<StyledBoxWiki>
			<StyledTitle>{name.toUpperCase()}</StyledTitle>
			<StyledParagraph>{paragraph}</StyledParagraph>
			<StyledLink>Wikipedia</StyledLink>
		</StyledBoxWiki>
	);
};

export default WikiInfo;