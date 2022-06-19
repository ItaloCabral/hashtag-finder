import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto&family=Rubik:wght@400;500;700&display=swap');

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "OpenSans", sans-serif;
    }

    html, body {
        /* background-color: #0A1744; */
    }

    a, a:hover {
        text-decoration: none;
        color: unset;
    }
`;
