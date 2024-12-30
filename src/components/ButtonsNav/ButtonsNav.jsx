import { FONT_SIZES } from '../../constants/styles/fonts'
import {
    StyledBoxPlanet,
    StyledChevron,
    StyledPlanetName
} from './buttonsNav.styles';

const ButtonsNav = ({
    name,
    $color,
    $transparent,
    setMenu,
    toggleMenu
}) => {
    return (
        <StyledBoxPlanet $transparent={$transparent}>
            <StyledPlanetName
                to={`${name}`}
                $color={$color}
                $fontWeight={FONT_SIZES.bold}
                onClick={() => toggleMenu(setMenu)}
            >
                {name.toUpperCase()}
            </StyledPlanetName>
            <StyledChevron src='assets/images/icon-chevron.svg'></StyledChevron>
        </StyledBoxPlanet>
    );
};

export default ButtonsNav; 

