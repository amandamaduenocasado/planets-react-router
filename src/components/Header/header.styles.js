import styled from "styled-components";

const StyledBoxHeader = styled.div`
    width: 100%;
    height: 68px;
    border-bottom: 1px solid ${({ $tranparentwhite }) => $tranparentwhite};
    display: flex;
    padding-left: 24px;
    padding-right: 24px;
    justify-content: space-between;
    align-items: center;

    @media screen and (width:768px){
        height: 159px;
        padding: 0;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
    @media screen and (width:1440px){
        height: 85px;
        padding-left: 32px;
        padding-right: 40px;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        text-align: center;
    }
`;
const StyledNavTitle = styled.h1`
    font-family: "Antonio", serif;
    font-size: 28px;
    font-weight: ${({$fonts})=>$fonts};
`;

export {StyledBoxHeader, StyledNavTitle}