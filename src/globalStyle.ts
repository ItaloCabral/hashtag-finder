import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Rubik', sans-serif;
    }

    html, body {
        background-color: #0A1744;
    }

    a, a:hover {
        text-decoration: none;
        color: unset;
    }
`;
