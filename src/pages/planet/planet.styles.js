import styled from "styled-components";

const StyledBoxPlanet = styled.div`
    width: 100%;
    height: 100%;
    padding: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    @media screen and (width:768px) {
        padding: 39px;
    }
    @media screen and (width:1440px) {
        padding: 126px 165px 56px 165px;
    }
`;
const StyledBoxButtons = styled.div`
    width: 100%;
    height: 235px;
    margin-bottom: 28px;
    margin-top: 28px;

    @media screen and (width:768px) {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
    @media screen and (width:1440px) {
        flex-direction: column;
        width: 350px;
        align-items: flex-start;
        gap:35px;        
    }

`;
const StyledBoxPlanetImg = styled.div`
    width: 100%;
    height: 252px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 406px;
    @media screen and (width:1440px) {
        height:100% ;
    }
`;

const StyedImgPlanet = styled.img`
    width:${({$size})=>$size};
    height: ${({$size})=>$size};

    @media screen and (width:768px) {
        width:${({$tabletSize})=>$tabletSize};
        height: ${({$tabletSize})=>$tabletSize};
    }

    @media screen and (width:1440px) {
        width:${({$desktopSize})=>$desktopSize};
        height: ${({$desktopSize})=>$desktopSize};
    }
`;

const StyledFlexDesktop = styled.div`
    @media screen and (width:1440px) {
        width: 100%;
        height: 531px;
        display: flex;
        justify-content: space-between;
        margin-bottom: 87px;
    }
`;
const StyledImgGeology = styled.img`
        position:absolute;
        display: ${({$display})=>$display};
        width: 65px;
        height: 79px;
        top: 379px;

    @media screen and (width:768px) {
        width: 99px;
        height: 120px;
        top: 450px;
    }

    @media screen and (width:1440px) {
        width: 163px;
        height: 199px;
        top: 560px;
    }
    
`;

export {StyledImgGeology, StyledFlexDesktop, StyledBoxPlanetImg, StyedImgPlanet, StyledBoxPlanet, StyledBoxButtons}