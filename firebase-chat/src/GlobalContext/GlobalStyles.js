import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&display=swap');
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
    body {
        font-size: 67.5%;
        font-family: 'Open Sans', sans-serif;
        color: #D6D7D9;
        font-weight: 400;
    }
`;

export default Global;
