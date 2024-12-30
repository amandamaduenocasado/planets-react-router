import styled from "styled-components";

const StyledBoxWiki = styled.div`
    width: 100%;
    height: 235px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media screen and (width:768px) {
        text-align: left;
        height: 253px;
        min-width: 339px;
        margin-right: 69px;
    }
    @media screen and (width:1440px) {
        height: 326px;
    }
`;

const StyledTitle = styled.p`
    font-size: 40px;
    font-family: "Antonio", serif;
    margin: 0;

    @media screen and (width:768px) {
        font-size: 48px;
    }
    @media screen and (width:1440px) {
        font-size: 80px;
        margin-bottom: 23px;
    }
`;

const StyledParagraph = styled.p`
    line-height: 25px;
    font-size: 14px;
    letter-spacing: 0px;
    
    @media screen and (width:768px) {
        line-height: 22px;
    }
    @media screen and (width:1440px) {
        line-height: 25px;
        font-size: 14px;
        margin-bottom: 23px;
        height: 150px;
    }
`;

const StyledLink = styled.a`
`;

export {StyledBoxWiki, StyledLink, StyledParagraph, StyledTitle}