import { createGlobalStyle } from 'styled-components';
import globalStyle from 'Global/styles/base';
import { GlobalFontStyles } from 'Global/styles/font';

const GlobalStyle = createGlobalStyle`
${GlobalFontStyles};
html,
body {
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  height: 100%;
  width: 100%;
}
#app {
  background-color: #fafafa;
  ${globalStyle.flex};
  ${globalStyle.column};
  ${globalStyle.flexstretch};
  height: 100%;
}
section {
  ${globalStyle.flexstretch};
  ${globalStyle.flex};
}
/* Page Container */
.container {
  flex: 1;
  align-self: center;
  width: 1020px;
  @media (max-width: 1024px) {
    width: 100%;
  }
}
`;

export default GlobalStyle;
