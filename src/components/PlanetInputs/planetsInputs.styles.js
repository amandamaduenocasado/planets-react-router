import styled from "styled-components";

const StyledBoxesBox = styled.div`
    width: 100%;
    height:216px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;

    @media screen and (width:768px) {
        flex-direction: row;
        height:88px;
        gap:11px;
    }
    @media screen and (width:1440px) {
        height:128px;
        gap:30px;
    }
`;
const StyledBox = styled.div`
    border: 1px solid white;
    width: 100%;
    height: 48px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 24px;
    padding-right: 24px;

    @media screen and (width:768px) {
        flex-direction: column;
        height: 88px; 
        justify-content: left;
        align-items: flex-start;
        padding: 16px 0 19px 15px;
    }
    @media screen and (width:1440px) {
        height:128px;
        justify-content: center;
    }
`;
const StyledText = styled.p`
    @media screen and (width:768px) {
        font-size: 14px;
        margin: 0;
    }
`;
const StyledNumbers = styled.p`
    font-family: "Antonio", serif;
    @media screen and (width:768px) {
        font-size: 24px;
        margin: 0;
        margin-top: 6px;
        letter-spacing: -0.9;
        font-weight: 500;
    }
    @media screen and (width:1440px) {
        font-size: 40px;
    }
`;

export {StyledBox, StyledBoxesBox, StyledNumbers, StyledText}