import styled from 'styled-components';
import globalStyle from 'Global/styles/base';
export const SignInContainer = styled.div`
  ${globalStyle.flex};
  ${globalStyle.column};
  width: 100%;
  @media (min-width: ${globalStyle.small}) {
    max-width: 350px;
    align-items: center;
  }
  ._wrapper {
    margin-top: 20px;
    ${globalStyle.flex};
    ${globalStyle.column};
    align-self: stretch;
  }
  input {
    ${globalStyle.flex};
    margin-bottom: 12px;
    align-self: stretch;
    @media (max-width: ${globalStyle.small}) {
      background: #f7f7f7;
    }
  }
  button {
    margin-bottom: 12px;
    align-self: stretch;
  }
  .donthavetext {
    font-size: 14px;
    font-weight: 600;
    text-align: center;
    @media (min-width: ${globalStyle.small}) {
      color: #ffffff;
    }
  }
  ._hText,
  ._decText {
    @media (min-width: ${globalStyle.small}) {
      color: #ffffff;
    }
  }
  ._hText {
    margin: 0px;
    line-height: 17px;
    font-size: 14px;
    font-weight: 600;
    text-transform: uppercase;
    @media (min-width: ${globalStyle.small}) {
      font-size: 18px;
    }
  }
  ._decText {
    font-size: 14px;
    font-weight: 300;
    @media (min-width: ${globalStyle.small}) {
      font-size: 18px;
    }
  }
`;
