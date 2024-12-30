import {
	StyledBox,
	StyledBoxesBox,
	StyledNumbers,
	StyledText
} from './planetsInputs.styles';

const PlanetInputs = ({ rotation, revolution, radius, temperature }) => {
	return (
		<StyledBoxesBox>
			<StyledBox>
				<StyledText>ROTATION TIME</StyledText>
				<StyledNumbers>{rotation}</StyledNumbers>
			</StyledBox>
			<StyledBox>
				<StyledText>REVOLUTION TIME</StyledText>
				<StyledNumbers>{revolution}</StyledNumbers>
			</StyledBox>
			<StyledBox>
				<StyledText>RADIUS</StyledText>
				<StyledNumbers>{radius}</StyledNumbers>
			</StyledBox>
			<StyledBox>
				<StyledText>AVERAGE TEMP.</StyledText>
				<StyledNumbers>{temperature}</StyledNumbers>
			</StyledBox>
		</StyledBoxesBox>
	);
};

export default PlanetInputs;