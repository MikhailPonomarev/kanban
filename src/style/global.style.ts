import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body {
        width: 1235px;
        margin: 0 auto;
        font-family: "Roboto", serif;
    }

    @media (max-width: 375px) {
        body {
            width: 375px;
            /* overflow-y: scroll; */
        }
    }
`;

export default GlobalStyle;
