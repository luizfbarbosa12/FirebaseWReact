import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
   
}

html {
  font-size: 62.5%;
}

    body {
        font-family: 'Open Sans', sans-serif;
        color: #D6D7D9;
        font-weight: 400;
    }
`;

export default Global;
