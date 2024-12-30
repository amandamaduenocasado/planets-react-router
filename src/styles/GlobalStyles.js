import { createGlobalStyle } from 'styled-components';
import './normalize.css';
export const GlobalStyles = createGlobalStyle`
    *,
    *::after,
    *::before {
        box-sizing: border-box;
    }

    img {
        max-width: 100%;
        display: block;
    }

    ul {
        list-style: none;
        padding-left: 0;
        margin-top: 0;
        margin-bottom: 0;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    body {
        width: 100vw;
        height: 100vh;
        background-color: #070724;
        background-image: url(assets/images/background-stars.svg);
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        font-family: "League Spartan", serif;
        font-weight: 400;
        color: white;
    }
`;