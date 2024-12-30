import { useState } from 'react';
import { COLORS } from '../../constants/styles/colors';
import { PLANETS_INFO } from '../../constants/styles/planets';
import ButtonsNav from '../ButtonsNav/ButtonsNav';
import { StyledBoxNav, StyledButtonsNav, StyledBurger } from './nav.styles';

const Nav = () => {
	const [menu, setMenu] = useState(false);
	console.log(menu);
	return (
		<StyledBoxNav>
			<StyledBurger
				onClick={() => toggleMenu(setMenu)}
				src='assets/images/icon-hamburger.svg'
			></StyledBurger>
            <StyledButtonsNav
                $isVisible={menu}
                $bgcolor={COLORS.dark}>
                
				{PLANETS_INFO.map(planet => (
					<ButtonsNav
						key={planet.id}
						{...planet}
						$color={planet.linecolor}
						name={planet.name}
						$transparent={COLORS.transparent}
						setMenu={setMenu}
						toggleMenu={toggleMenu}
					/>
				))}
			</StyledButtonsNav>
		</StyledBoxNav>
	);
};

const toggleMenu = setMenu => {
	setMenu(status => !status);
};

export default Nav;