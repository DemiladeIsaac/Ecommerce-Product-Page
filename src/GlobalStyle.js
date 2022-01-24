import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
        :root {
            --maxWidth:1280px;
            --orange:hsl(26, 100%, 55%);
            --paleOrange:hsl(25, 100%, 94%);
            --darkBlue:hsl(220, 13%, 13%);
            --darkGreyBlue:hsl(219, 9%, 45%);
            --greyBlue:hsl(220, 14%, 75%);
            --lightGreyBlue:hsl(223, 64%, 98%);
            --white:hsl(0, 0%, 100%);
            --black:hsl(0, 0%, 0%);
            --fontSuperBig:2.5rem;
            --fontBig:1.5rem;
            --fontMed:1.2rem;
            --fontSmall:1rem;
            --fontWeight:400;
            --fontWeightBold:700;
        }

        * {
            box-sizing: border-box;
            font-family: 'Kumbh Sans', sans-serif;
        }

        body {
            margin: 0;
            padding: 0;
           

            h1 {
                font-size:2rem;
                font-weight:700;
            }

            h3 {
                font-size:1.1rem;
                font-weight:600;
            }

            p {
                font-size:16px;
                font-weight:400;
            }
        }
`;
