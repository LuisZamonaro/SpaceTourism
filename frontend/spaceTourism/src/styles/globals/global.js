import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`

    body {
        width: 100%;
        /* max-width: 1440px; */
        margin: 0 auto;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Bellefair', serif;
    }

    @media(max-width: 600px) {
        width: 100%;
        max-width: 600px;
        height: 700px;
        overflow-y: hidden;
    }
    
`