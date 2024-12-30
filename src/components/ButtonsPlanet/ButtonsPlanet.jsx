import {
	StyledBoxButtons,
	StyledButton,
	StyledSpan
} from './buttonsPlanet.styles';

const ButtonsPlanet = ({
	color,
	activeButton,
	setDisplay,
	setButtonSelected
}) => {
	return (
		<StyledBoxButtons>
			<StyledButton
				onClick={() => {
					setButtonSelected('overview');
					setDisplay('none');
				}}
				isActive={activeButton === 'overview'}
				$color={color}
			>
				<p>
					<StyledSpan>01</StyledSpan>OVERVIEW
				</p>
			</StyledButton>
			<StyledButton
				onClick={() => {
					setButtonSelected('structure');
					setDisplay('none');
				}}
				isActive={activeButton === 'structure'}
				$color={color}
			>
				<p>
					<StyledSpan>02</StyledSpan>INTERNAL STRUCTURE
				</p>
			</StyledButton>
			<StyledButton
				onClick={() => {
					setButtonSelected('geology');
					setDisplay('block');
				}}
				isActive={activeButton === 'geology'}
				$color={color}
			>
				<p>
					<StyledSpan>03</StyledSpan>SURFACE GEOLOGY
				</p>
			</StyledButton>
		</StyledBoxButtons>
	);
};
export default ButtonsPlanet;