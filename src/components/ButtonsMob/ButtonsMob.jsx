import { StyledBoxButtonsMob, StyledButton } from './buttonsMob.styles';

const ButtonsMob = ({ setButtonSelected, setDisplay, activeButton }) => {
    return (
        <StyledBoxButtonsMob>
            <StyledButton
                onClick={() => {
                    setButtonSelected('overview');
                    setDisplay('none');
                }}
                isActive={activeButton === 'overview'}
            >
                <p>OVERVIEW</p>
            </StyledButton>
            <StyledButton
                onClick={() => {
                    setButtonSelected('structure');
                    setDisplay('none');
                }}
                isActive={activeButton === 'structure'}
            >
                <p>STRUCTURE</p>
            </StyledButton>
            <StyledButton
                onClick={() => {
                    setButtonSelected('geology');
                    setDisplay('none');
                }}
                isActive={activeButton === 'geology'}
            >
                <p>SURFACE</p>
            </StyledButton>
        </StyledBoxButtonsMob>
    );
};

export default ButtonsMob;
