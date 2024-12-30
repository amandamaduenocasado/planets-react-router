import { COLORS } from '../../constants/styles/colors';
import { FONTS } from '../../constants/styles/colors';
import Nav from '../Nav/Nav';
import { StyledBoxHeader } from './header.styles'

const Header = () => {
    return (
        <StyledBoxHeader $transparent={COLORS.transparent}>
            <StyledNavTitle $fonts={FONTS.medium}>THE PLANETS</StyledNavTitle>
            <Nav />
        </StyledBoxHeader>
    );
};

export default Header; 