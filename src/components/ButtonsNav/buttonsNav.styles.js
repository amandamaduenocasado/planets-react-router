import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledBoxPlanet = styled.div`
    width: 100%;
    height: 65px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid ${({$transparent})=>$transparent};
    
    @media screen and (width: 768px){
        justify-content: center;
        border-bottom: transparent;
    }
    @media screen and (width: 1440px){
        flex-direction: column;
        justify-content: flex-start;
        height: 54px;
    }
`;

const StyledPlanetName = styled(NavLink)`
    font-size:0.938rem;
    line-height: 25px;
    letter-spacing: 1.36px;
    font-weight: ${({$fontWeight})=>$fontWeight};
    margin-left: 45px;

    &::before{
        content:'';
        position: absolute;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background-color: ${({$color})=>$color};
        left: 24px;
    }

    @media screen and (width: 768px){
        margin-left: 0;
        font-size:0.688rem;
        letter-spacing: 1px;
        &::before{
            display: none;
        }
    }
`;

const StyledChevron = styled.img`
    @media screen and (width: 768px){
        display: none;
    }
`;

export {StyledChevron, StyledPlanetName, StyledBoxPlanet};