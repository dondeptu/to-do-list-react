import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *, ::after, ::before {
        box-sizing: inherit;
    }

    body {
        font-family: "Montserrat", sans-serif;
        font-optical-sizing: auto;
        background-color: #ddd;
    }
`;