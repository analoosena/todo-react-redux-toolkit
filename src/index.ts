import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
  margin: 0 auto;
  padding: 0;
  box-sizing: border-box;
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
}
body {
  width: 80%; 
  margin: 0 auto; 
  div{
    width: 80%; 
    margin: 0 auto; 
  }
}
`;
export default GlobalStyle;
