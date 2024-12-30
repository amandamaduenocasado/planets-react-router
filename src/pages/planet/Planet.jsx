import { useState } from 'react';
import ButtonsPlanet from '../../components/ButtonsPlanet/ButtonsPlanet'
import ButtonsMob from '../../components/ButtonsMob/ButtonsMob';
import PlanetInputs from '../../components/PlanetInputs/PlanetInputs';
import WikiInfo from '../../components/WikiInfo/WikiInfo';
import {
	StyledImgPlanet,
	StyledBoxButtons,
	StyledBoxPlanet,
	StyledBoxPlanetImg,
	StyledFlexDesktop,
	StyledImgGeology
} from './planet.styles';

const Planet = ({ planet }) => {
	const [buttonSelected, setButtonSelected] = useState('overview');
	const [display, setDisplay] = useState('none');
	const [activeButton, setActiveButton] = useState('');

	return (
		<>
			<ButtonsMob setButtonSelected={setButtonSelected} />
			<StyledBoxPlanet>
				<StyledFlexDesktop>
					<StyledBoxPlanetImg>
						<StyledImgPlanet
							src={planet[buttonSelected].img}
							alt={planet.name}
							$size={planet.widthImg.mobile}
							$tabletSize={planet.widthImg.tablet}
							$desktopSize={planet.widthImg.desktop}
						/>
						<StyledImgGeology
							$display={display}
							src={planet[buttonSelected].geology}
						/>
					</StyledBoxPlanetImg>
					<StyledBoxButtons>
						<WikiInfo
							name={planet.name}
							paragraph={planet[buttonSelected].content}
						/>
						<ButtonsInfo
							setButtonSelected={setButtonSelected}
							setDisplay={setDisplay}
							activeButton={activeButton}
							color={planet.color}
						/>
					</StyledBoxButtons>
				</StyledFlexDesktop>
				<PlanetInputs
					rotation={planet.rotation}
					revolution={planet.revolution}
					radius={planet.radius}
					temperature={planet.temperature}
				/>
			</StyledBoxPlanet>
		</>
	);
};

export default Planet;