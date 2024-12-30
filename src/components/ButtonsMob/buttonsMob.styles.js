import styled from "styled-components";

const StyledBoxButtonsMob = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    border-bottom: 1px solid white;
    
    @media screen and (width: 768px) {
        display: none;
    }
`;
const StyledButton = styled.div`
    width: 80px;
    height: 51px;
    line-height:25px;
    letter-spacing: 1.93px;
    font-size: 12px;
    text-align: center;
`;

export {StyledBoxButtonsMob, StyledButton}