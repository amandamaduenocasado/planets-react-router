import styled from "styled-components";

const StyledBoxButtons = styled.div`
    @media screen and (width<768px) {
        display: none;
    }
    width: 100%;
    height: 152px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;

    @media screen and (width: 1440px) {
        height:172px;
        gap: 16px;
        align-self: flex-end;
    }
`;
const StyledButton = styled.div`
    background-color: ${({ isActive, $color }) => (isActive ? $color : 'transparent')};   // Cambia el color de fondo dependiendo de si el botón está activo o no
    font-size: 12px;
    font-weight: 700;
    width: 100%;
    height: 40px;
    border: 1px solid white;
    display: flex;
    flex-direction: column;
    justify-content: center;

    // Al pasar el ratón sobre el botón
    &:hover {
        cursor: pointer;
        background-color: ${({ $color }) => $color};
        opacity: 0.8;
    }
`;
const StyledSpan = styled.span`
    margin-left: 20px;
    margin-right: 17px;
`;

export {StyledSpan, StyledBoxButtons, StyledButton}